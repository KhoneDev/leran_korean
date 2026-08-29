<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { speakSlow, speakNormal } from '@/utils/speech'
import { useUserStore } from '@/stores/useUserStore'
import type { Word } from '@/types'

const props = defineProps<{
  word: Word
  autoSpeak?: boolean
}>()

defineEmits<{
  rate: [quality: 0 | 1 | 2]
}>()

const userStore = useUserStore()
const isFlipped = ref(false)
const isSpeaking = ref(false)

function flipCard() {
  isFlipped.value = !isFlipped.value
}

async function speakWord() {
  isSpeaking.value = true
  try {
    await speakSlow(props.word.korean)
  } finally {
    isSpeaking.value = false
  }
}

async function speakExample() {
  const ex = props.word.examples?.[0]
  if (!ex) return
  isSpeaking.value = true
  try {
    await speakNormal(ex.korean)
  } finally {
    isSpeaking.value = false
  }
}

watch(
  () => props.word,
  () => {
    isFlipped.value = false
    if (props.autoSpeak) {
      setTimeout(() => speakWord(), 300)
    }
  },
  { immediate: true },
)

const firstExample = computed(() => props.word.examples?.[0] ?? null)
const srsData = computed(() => userStore.getWordSRS(props.word.id))

const srsBadgeClass = computed(() => {
  if (!srsData.value) return 'bg-slate-100 text-slate-500'
  if (srsData.value.repetitions >= 5) return 'bg-emerald-100 text-emerald-600'
  if (srsData.value.repetitions >= 2) return 'bg-amber-100 text-amber-600'
  return 'bg-red-100 text-red-600'
})

const srsBadgeLabel = computed(() => {
  if (!srsData.value) return 'NEW'
  if (srsData.value.repetitions >= 5) return 'Mastered'
  if (srsData.value.repetitions >= 2) return 'LEARN'
  return 'NEW'
})

const goodInterval = computed(() => {
  const srs = srsData.value
  if (!srs || srs.repetitions === 0) return '1 วัน'
  if (srs.repetitions === 1) return '3 วัน'
  return Math.round(srs.interval * srs.easeFactor) + ' วัน'
})

const easyInterval = computed(() => {
  const srs = srsData.value
  if (!srs || srs.repetitions === 0) return '2 วัน'
  if (srs.repetitions === 1) return '5 วัน'
  return Math.round(srs.interval * srs.easeFactor * 1.2) + ' วัน'
})

const categoryLabels: Record<string, string> = {
  greetings: '👋 ทักทาย',
  pronouns: '🗣️ สรรพนาม',
  numbers: '🔢 ตัวเลข',
  family: '👨‍👩‍👧 ครอบครัว',
  food: '🍜 อาหาร',
  body: '🦴 ร่างกาย',
  colors: '🎨 สี',
  time: '📅 วันเวลา',
  animals: '🐕 สัตว์',
  places: '🏠 สถานที่',
  verbs: '🏃 กริยา',
  adjectives: '😊 คุณศัพท์',
  conjunctions: '🔗 เชื่อม',
  sentences: '💬 ประโยค',
}
const categoryLabel = categoryLabels[props.word.category] || props.word.category

const categoryClass = (() => {
  const map: Record<string, string> = {
    greetings: 'bg-blue-100 text-blue-700',
    pronouns: 'bg-indigo-100 text-indigo-700',
    numbers: 'bg-purple-100 text-purple-700',
    family: 'bg-pink-100 text-pink-700',
    food: 'bg-red-100 text-red-700',
    body: 'bg-orange-100 text-orange-700',
    colors: 'bg-yellow-100 text-yellow-700',
    time: 'bg-green-100 text-green-700',
    animals: 'bg-teal-100 text-teal-700',
    places: 'bg-cyan-100 text-cyan-700',
    verbs: 'bg-blue-100 text-blue-700',
    adjectives: 'bg-violet-100 text-violet-700',
    conjunctions: 'bg-slate-100 text-slate-700',
    sentences: 'bg-emerald-100 text-emerald-700',
  }
  return map[props.word.category] || 'bg-slate-100 text-slate-700'
})()
</script>

<template>
  <div class="flashcard-container perspective-1000" @click="flipCard">
    <div
      class="flashcard relative w-full transition-transform duration-500 ease-in-out"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <!-- Front -->
      <div
        class="flashcard-front absolute inset-0 w-full rounded-3xl border-2 shadow-xl flex flex-col items-center justify-center p-6 sm:p-8 cursor-pointer select-none"
        :class="isSpeaking ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-white'"
      >
        <div
          v-if="word.category"
          class="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full"
          :class="categoryClass"
        >
          {{ categoryLabel }}
        </div>
        <div
          v-if="srsData"
          class="absolute top-4 right-14 px-2 py-0.5 text-[10px] font-bold rounded-full"
          :class="srsBadgeClass"
        >
          {{ srsBadgeLabel }}
        </div>
        <div v-if="isSpeaking" class="absolute top-4 right-4 flex items-center gap-1">
          <span class="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse" />
          <span
            class="w-1.5 h-4 bg-blue-500 rounded-full animate-pulse"
            style="animation-delay: 0.15s"
          />
          <span
            class="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse"
            style="animation-delay: 0.3s"
          />
        </div>
        <div class="text-5xl sm:text-7xl font-bold text-slate-800 mb-3">{{ word.korean }}</div>
        <div class="text-lg sm:text-xl text-blue-500 font-medium mb-2">{{ word.romanization }}</div>
        <div class="text-xs text-slate-400 mt-4">👆 แตะเพื่อพลิกการ์ด</div>
        <button
          class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-all duration-200"
          :class="isSpeaking ? 'bg-blue-500 text-white' : ''"
          @click.stop="speakWord"
        >
          🔊
        </button>
      </div>

      <!-- Back -->
      <div
        class="flashcard-back absolute inset-0 w-full rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-xl flex flex-col items-center justify-center p-6 sm:p-8 cursor-pointer select-none rotate-y-180"
      >
        <div class="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 text-center">
          {{ word.meaning }}
        </div>
        <div class="text-lg text-indigo-500 font-medium mb-4">{{ word.korean }}</div>
        <div v-if="firstExample" class="w-full max-w-sm mb-3">
          <div class="bg-white rounded-2xl p-4 border border-indigo-100">
            <div class="text-base sm:text-lg font-medium text-slate-800 mb-1">
              {{ firstExample.korean }}
            </div>
            <div class="text-xs text-slate-400 italic mb-1">{{ firstExample.romanization }}</div>
            <div class="text-sm text-indigo-600">{{ firstExample.meaning }}</div>
          </div>
          <button
            class="w-full mt-2 py-2 rounded-xl text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
            @click.stop="speakExample"
          >
            🐢 ฟังตัวอย่างประโยค
          </button>
        </div>
        <div v-if="word.usage" class="text-xs text-slate-500 text-center max-w-sm mb-2">
          💡 {{ word.usage }}
        </div>
        <div class="text-xs text-slate-400 mt-1">👆 แตะเพื่อพลิกกลับ</div>
      </div>
    </div>
  </div>

  <!-- SRS Rating -->
  <div class="flex gap-3 mt-4">
    <button
      class="flex-1 py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 border-2"
      :class="
        isFlipped
          ? 'border-red-300 bg-red-50 text-red-600 hover:bg-red-100'
          : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
      "
      :disabled="!isFlipped"
      @click.stop="$emit('rate', 0)"
    >
      <div class="text-lg mb-0.5">🔴</div>
      <div>จำไม่ได้</div>
      <div class="text-[10px] font-normal opacity-60 mt-0.5">1 วัน</div>
    </button>
    <button
      class="flex-1 py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 border-2"
      :class="
        isFlipped
          ? 'border-amber-300 bg-amber-50 text-amber-600 hover:bg-amber-100'
          : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
      "
      :disabled="!isFlipped"
      @click.stop="$emit('rate', 1)"
    >
      <div class="text-lg mb-0.5">🟡</div>
      <div>จำได้เล็กน้อย</div>
      <div class="text-[10px] font-normal opacity-60 mt-0.5">{{ goodInterval }}</div>
    </button>
    <button
      class="flex-1 py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 border-2"
      :class="
        isFlipped
          ? 'border-emerald-300 bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
          : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
      "
      :disabled="!isFlipped"
      @click.stop="$emit('rate', 2)"
    >
      <div class="text-lg mb-0.5">🟢</div>
      <div>จำได้ดี</div>
      <div class="text-[10px] font-normal opacity-60 mt-0.5">{{ easyInterval }}</div>
    </button>
  </div>
</template>
