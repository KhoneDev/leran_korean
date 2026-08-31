<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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

const shuffledWords = ref(shuffleArray(props.exercise.words))
const selectedWords = ref<string[]>([])
const showResult = ref(false)
const isCorrect = ref(false)
const isComplete = computed(() => selectedWords.value.length === props.exercise.words.length)

watch(() => props.exercise, () => {
  reset()
})

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
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
          ລຽງປະໂຫຍກ
        </span>
      </div>
      <div class="text-base font-semibold text-slate-800 mb-1">{{ exercise.thai }}</div>
      <div class="text-xs text-slate-400">ຈັດລຽງຄຳສັບໃຫ້ຖືກຕ້ອງ</div>
    </div>

    <!-- Answer Area in Lao -->
    <div
      class="min-h-[56px] p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 mb-4"
    >
      <div v-if="selectedWords.length === 0" class="text-sm text-slate-400 text-center py-2">
        ຄລິກຄຳສັບເພື່ອລຽງປະໂຫຍກ
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(word, idx) in selectedWords"
          :key="idx"
          class="px-3.5 py-2 text-sm font-semibold rounded-xl transition-all active:scale-95"
          :class="
            showResult && isCorrect
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : showResult && !isCorrect
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'bg-orange-100 text-orange-700 border border-orange-300 hover:bg-orange-200'
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
        class="px-3.5 py-2 text-sm font-semibold bg-white border border-slate-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all active:scale-95 shadow-xs"
        @click="selectWord(word)"
      >
        {{ word }}
      </button>
    </div>

    <!-- Result in Lao -->
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
          <span v-if="isCorrect">ຖືກຕ້ອງ! 🎉</span>
          <span v-else>
            <div>
              ຄຳຕອບທີ່ຖືກ: <strong>{{ exercise.answer }}</strong>
            </div>
            <div v-if="exercise.explanation" class="text-xs opacity-75 mt-1">
              💡 {{ exercise.explanation }}
            </div>
          </span>
        </div>
      </div>
    </Transition>

    <!-- Actions in Lao -->
    <div class="flex items-center gap-3">
      <button
        v-if="!showResult"
        class="flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all active:scale-95"
        :class="
          isComplete
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
        "
        :disabled="!isComplete"
        @click="checkAnswer"
      >
        ກວດຄຳຕອບ
      </button>
      <button
        v-if="showResult"
        class="flex-1 py-2.5 text-sm font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all active:scale-95"
        @click="reset(); $emit('next')"
      >
        ຂໍ້ຖັດໄປ →
      </button>
      <button
        class="px-4 py-2.5 text-sm font-semibold bg-white border border-slate-200 text-slate-600 rounded-xl hover:border-orange-300 transition-all active:scale-95"
        @click="speak"
        title="ຟັງສຽງ"
      >
        🔊
      </button>
    </div>
  </div>
</template>
