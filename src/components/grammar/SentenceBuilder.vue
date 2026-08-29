<script setup lang="ts">

import { ref, computed } from 'vue'
import type { SentenceExercise } from '@/data/sentences'
import { shuffleArray } from '@/data/sentences'
import { speakNormal } from '@/utils/speech'
const props = defineProps<{
  exercise: SentenceExercise
}>()
const emit = defineEmits<{
  (e: 'next'): void
  (e: 'correct'): void
}>()
// สลับคำสำหรับ drag
const shuffledWords = ref(shuffleArray(props.exercise.words))
const selectedWords = ref<string[]>([])
const showResult = ref(false)
const isCorrect = ref(false)
const isComplete = computed(() => selectedWords.value.length === props.exercise.words.length)
function selectWord(word: string) {
  if (showResult.value) return
  const idx = shuffledWords.value.indexOf(word)
  if (idx !== -1) {
    shuffledWords.value.splice(idx, 1)
    selectedWords.value.push(word)
  }
}
function removeWord(word: string) {
  if (showResult.value) return
  const idx = selectedWords.value.indexOf(word)
  if (idx !== -1) {
    selectedWords.value.splice(idx, 1)
    shuffledWords.value.push(word)
  }
}
function checkAnswer() {
  const userAnswer = selectedWords.value.join(' ')
  isCorrect.value = userAnswer === props.exercise.answer
  showResult.value = true
  if (isCorrect.value) {
    emit('correct')
    speakNormal(props.exercise.korean)
  }
}
function reset() {
  shuffledWords.value = shuffleArray(props.exercise.words)
  selectedWords.value = []
  showResult.value = false
  isCorrect.value = false
}
function speak() {
  speakNormal(props.exercise.korean)
}
</script>

<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
    <!-- Question -->
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">
          สร้างประโยค
        </span>
        <span class="text-xs text-slate-400">{{
          exercise.type === 'build' ? 'จัดคำ' : 'เรียงคำ'
        }}</span>
      </div>
      <div class="text-base font-semibold text-slate-800 mb-1">{{ exercise.thai }}</div>
      <div v-if="exercise.hint" class="text-xs text-blue-500">💡 {{ exercise.hint }}</div>
    </div>
    <!-- Selected Words (Answer Area) -->
    <div
      class="min-h-[56px] p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 mb-4"
    >
      <div v-if="selectedWords.length === 0" class="text-sm text-slate-400 text-center py-2">
        คลิกคำด้านล่างเพื่อจัดเรียงประโยค
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(word, idx) in selectedWords"
          :key="idx"
          class="px-3 py-1.5 text-sm font-medium rounded-lg transition-all"
          :class="
            showResult && isCorrect
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : showResult && !isCorrect
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'
          "
          @click="removeWord(word)"
        >
          {{ word }}
        </button>
      </div>
    </div>
    <!-- Available Words -->
    <div class="flex flex-wrap gap-2 mb-5">
      <button
        v-for="(word, idx) in shuffledWords"
        :key="idx"
        class="px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all active:scale-95"
        @click="selectWord(word)"
      >
        {{ word }}
      </button>
    </div>
    <!-- Result -->
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="showResult" class="mb-4">
        <div
          class="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
          :class="isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'"
        >
          <span>{{ isCorrect ? '✅' : '❌' }}</span>
          <span v-if="isCorrect">ถูกต้อง!</span>
          <span v-else>คำตอบ: {{ exercise.answer }}</span>
        </div>
        <div v-if="exercise.explanation" class="text-xs text-slate-500 mt-2">
          💡 {{ exercise.explanation }}
        </div>
      </div>
    </Transition>
    <!-- Actions -->
    <div class="flex items-center gap-3">
      <button
        v-if="!showResult"
        class="flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all"
        :class="
          isComplete
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
        "
        :disabled="!isComplete"
        @click="checkAnswer"
      >
        ตรวจคำตอบ
      </button>
      <button
        v-if="showResult"
        class="flex-1 py-2.5 text-sm font-semibold bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
        @click="reset(); $emit('next')"
      >
        ข้อถัดไป →
      </button>
      <button
        class="px-4 py-2.5 text-sm font-semibold bg-white border border-slate-200 text-slate-600 rounded-xl hover:border-blue-300 transition-all"
        @click="speak"
      >
        🔊
      </button>
    </div>
  </div>
</template>
