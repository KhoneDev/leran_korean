<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { getWordsByLevel, getCategoriesByLevel } from '@/data/vocabulary'
import { useUserStore } from '@/stores/useUserStore'
import { speakSlow, stopSpeech } from '@/utils/speech'
import FlashCard from '@/components/flashcard/FlashCard.vue'
import type { Word, ProficiencyLevel } from '@/types'
const userStore = useUserStore()
// State
const currentIndex = ref(0)
const filterCategory = ref<string>('all')
const isAutoSpeak = ref(true)
const sortMode = ref<'srs' | 'shuffle' | 'order'>('srs')
// Get words for current level
const allWords = computed(() => getWordsByLevel(userStore.progress.currentLevel))
const categories = computed(() => getCategoriesByLevel(userStore.progress.currentLevel))
// Sorted words based on mode
const sortedWords = computed(() => {
  let words = [...allWords.value]
  if (filterCategory.value !== 'all') {
    words = words.filter(w => w.category === filterCategory.value)
  }
  if (sortMode.value === 'srs') {
    const wordIds = words.map(w => w.id)
    const sortedIds = userStore.getWordsForReview(wordIds)
    const idToWord = new Map(words.map(w => [w.id, w]))
    return sortedIds.map(id => idToWord.get(id)).filter(Boolean) as Word[]
  } else if (sortMode.value === 'shuffle') {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = words[i]
      const swap = words[j]
      if (temp && swap) { words[i] = swap; words[j] = temp }
    }
    return words
  }
  return words
})
// Current word
const currentWord = computed(() => sortedWords.value[currentIndex.value] || null)
// Progress
const progress = computed(() => {
  const total = sortedWords.value.length
  const current = currentIndex.value + 1
  return { total, current, percent: total > 0 ? Math.round((current / total) * 100) : 0 }
})
// SRS Stats for this deck
const deckSRSStats = computed(() => {
  const words = sortedWords.value
  const today = new Date().toISOString().slice(0, 10)
  let mastered = 0, learning = 0, newWords = 0, due = 0
  for (const w of words) {
    const srs = userStore.getWordSRS(w.id)
    if (!srs) { newWords++ } else if (srs.repetitions >= 5) { mastered++ } else { learning++ }
    if (srs && srs.nextReview <= today) due++
  }
  return { mastered, learning, new: newWords, due }
})
// Navigation
function nextCard() {
  if (currentIndex.value < sortedWords.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
function prevCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
function handleRate(quality: 0 | 1 | 2) {
  if (!currentWord.value) return
  userStore.reviewWord(currentWord.value.id, quality)
  setTimeout(() => nextCard(), 300)
}
// Keyboard navigation
function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nextCard() }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevCard() }
  else if (e.key === '1') { handleRate(0) }
  else if (e.key === '2') { handleRate(1) }
  else if (e.key === '3') { handleRate(2) }
}
// Touch swipe
let touchStartX = 0
let touchStartY = 0
function handleTouchStart(e: TouchEvent) {
  const touch = e.touches[0]
  if (touch) { touchStartX = touch.clientX; touchStartY = touch.clientY }
}
function handleTouchEnd(e: TouchEvent) {
  const touch = e.changedTouches[0]
  if (!touch) return
  const deltaX = touch.clientX - touchStartX
  const deltaY = touch.clientY - touchStartY
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX < 0) { nextCard() } else { prevCard() }
  }
}
// Reset index when sort mode changes
watch(sortMode, () => { currentIndex.value = 0 })
watch(filterCategory, () => { currentIndex.value = 0 })
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  stopSpeech()
})
</script>

<template>
  <div
    class="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">🃏 Flashcard</h1>
      <p class="text-sm text-slate-500">ฝึกท่องจำคำศัพท์ — พลิกการ์ดแล้วให้คะแนน</p>
    </div>
    <!-- ===== SRS Stats Bar ===== -->
    <div class="grid grid-cols-4 gap-2 mb-6">
      <div class="text-center p-2 rounded-xl bg-emerald-50">
        <div class="text-lg font-bold text-emerald-600">{{ deckSRSStats.mastered }}</div>
        <div class="text-[10px] text-slate-500">/mastered</div>
      </div>
      <div class="text-center p-2 rounded-xl bg-amber-50">
        <div class="text-lg font-bold text-amber-600">{{ deckSRSStats.learning }}</div>
        <div class="text-[10px] text-slate-500">กำลังเรียน</div>
      </div>
      <div class="text-center p-2 rounded-xl bg-blue-50">
        <div class="text-lg font-bold text-blue-600">{{ deckSRSStats.new }}</div>
        <div class="text-[10px] text-slate-500">คำใหม่</div>
      </div>
      <div class="text-center p-2 rounded-xl bg-red-50">
        <div class="text-lg font-bold text-red-600">{{ deckSRSStats.due }}</div>
        <div class="text-[10px] text-slate-500">ถึงเวลาทบทวน</div>
      </div>
    </div>
    <!-- ===== Settings Bar ===== -->
    <div class="flex flex-wrap items-center gap-2 mb-6">
      <!-- Category filter -->
      <select
        v-model="filterCategory"
        class="px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option value="all">ทั้งหมด ({{ allWords.length }})</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
      <!-- Sort mode -->
      <div class="flex rounded-xl border border-slate-200 overflow-hidden">
        <button
          class="px-3 py-2 text-xs font-medium transition-all"
          :class="
            sortMode === 'srs'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-50 :bg-slate-700'
          "
          @click="sortMode = 'srs'"
        >
          🧠 SRS
        </button>
        <button
          class="px-3 py-2 text-xs font-medium transition-all border-l border-slate-200"
          :class="
            sortMode === 'shuffle'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-50 :bg-slate-700'
          "
          @click="sortMode = 'shuffle'"
        >
          🔀 สุ่ม
        </button>
        <button
          class="px-3 py-2 text-xs font-medium transition-all border-l border-slate-200"
          :class="
            sortMode === 'order'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-50 :bg-slate-700'
          "
          @click="sortMode = 'order'"
        >
          📋 ลำดับ
        </button>
      </div>
      <!-- Auto-speak toggle -->
      <button
        class="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border transition-all"
        :class="
          isAutoSpeak
            ? 'border-blue-300 bg-blue-50 text-blue-600 '
            : 'border-slate-200 bg-white text-slate-600 '
        "
        @click="isAutoSpeak = !isAutoSpeak"
      >
        {{ isAutoSpeak ? '🔊' : '🔇' }}
      </button>
    </div>
    <!-- ===== Progress ===== -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-slate-600">
          ข้อ {{ progress.current }} / {{ progress.total }}
        </span>
        <span class="text-sm font-bold text-blue-500"> {{ progress.percent }}% </span>
      </div>
      <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
          :style="{ width: progress.percent + '%' }"
        />
      </div>
    </div>
    <!-- ===== Flashcard ===== -->
    <div v-if="currentWord" class="mb-4">
      <FlashCard
        :key="currentWord.id"
        :word="currentWord"
        :auto-speak="isAutoSpeak"
        @rate="handleRate"
      />
    </div>
    <!-- ===== Navigation ===== -->
    <div class="flex items-center justify-center gap-3 mb-6">
      <button
        class="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white text-slate-600 hover:border-blue-300 :border-blue-600 hover:text-blue-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        :disabled="currentIndex === 0"
        @click="prevCard"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div
        class="px-6 py-3 rounded-2xl bg-slate-100 text-slate-700 font-bold text-lg min-w-[100px] text-center"
      >
        {{ currentIndex + 1 }} / {{ sortedWords.length }}
      </div>
      <button
        class="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white text-slate-600 hover:border-blue-300 :border-blue-600 hover:text-blue-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        :disabled="sortedWords.length === 0"
        @click="nextCard"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <!-- ===== Keyboard Shortcuts ===== -->
    <div class="bg-slate-50 rounded-2xl border border-slate-200 p-4">
      <div class="text-xs font-semibold text-slate-500 mb-2">⌨️ Keyboard Shortcuts</div>
      <div class="flex flex-wrap gap-3 text-xs text-slate-400">
        <span
          ><kbd class="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">←</kbd>
          ข้อก่อน</span
        >
        <span
          ><kbd class="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">→</kbd>
          ข้อถัดไป</span
        >
        <span
          ><kbd class="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">1</kbd>
          จำไม่ได้</span
        >
        <span
          ><kbd class="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">2</kbd>
          จำได้เล็กน้อย</span
        >
        <span
          ><kbd class="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">3</kbd>
          จำได้ดี</span
        >
      </div>
    </div>
    <!-- Empty state -->
    <div v-if="sortedWords.length === 0" class="text-center py-16">
      <div class="text-5xl mb-4">📭</div>
      <p class="text-lg text-slate-500">ไม่มีคำศัพท์ในหมวดนี้</p>
    </div>
  </div>
</template>
