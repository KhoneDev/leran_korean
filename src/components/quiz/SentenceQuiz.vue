<template>
  <div class="max-w-2xl mx-auto">
    <!-- ===== Setup Screen ===== -->
    <div v-if="state === 'setup'" class="space-y-6">
      <!-- Quiz Type Selection -->
      <div>
        <h3 class="text-lg font-bold text-slate-800 mb-3">🎯 เลือกโหมด Quiz</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="qt in quizTypes"
            :key="qt.type"
            class="p-4 rounded-2xl border-2 text-left transition-all duration-200"
            :class="
              selectedType === qt.type
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
            "
            @click="selectedType = qt.type"
          >
            <div class="text-2xl mb-2">{{ qt.icon }}</div>
            <div class="font-bold text-slate-800 text-sm">{{ qt.label }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ qt.description }}</div>
            <div class="text-xs text-blue-500 mt-2 font-medium">{{ qt.count }} ข้อ</div>
          </button>
        </div>
      </div>
      <!-- Question Count -->
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-medium text-slate-700">จำนวนข้อ</span>
          <span class="text-lg font-bold text-blue-600">{{ questionCount }} ข้อ</span>
        </div>
        <input
          v-model.number="questionCount"
          type="range"
          :min="5"
          :max="maxQuestions"
          step="5"
          class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div class="flex justify-between text-xs text-slate-400 mt-1">
          <span>5 ข้อ</span> <span>{{ maxQuestions }} ข้อ</span>
        </div>
      </div>
      <!-- Start Button -->
      <button
        class="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98]"
        @click="startQuiz"
      >
        🚀 เริ่ม Quiz!
      </button>
    </div>
    <!-- ===== Quiz Screen ===== -->
    <div v-if="state === 'quiz'">
      <!-- Progress Bar -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-slate-600">
            ข้อ {{ currentIndex + 1 }} / {{ questions.length }}
          </span>
          <span class="text-sm font-bold text-blue-600">
            {{ correctCount }}/{{ currentIndex }} ถูก
          </span>
        </div>
        <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            :style="{ width: `${(currentIndex / questions.length) * 100}%` }"
          />
        </div>
      </div>
      <!-- Question Card -->
      <div
        v-if="currentQuestion"
        class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <!-- Question Type Badge -->
        <div class="px-5 pt-5">
          <span
            class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            :class="typeBadgeClass"
          >
            {{ typeBadgeLabel }}
          </span>
        </div>
        <!-- Question Content -->
        <div class="px-5 py-4">
          <!--(sentence-to-meaning)-->
          <div v-if="currentQuestion.type === 'sentence-to-meaning'" class="text-center">
            <div class="flex items-center justify-center gap-3 mb-3">
              <div class="text-3xl sm:text-4xl font-bold text-slate-800 leading-relaxed">
                {{ currentQuestion.koreanSentence }}
              </div>
              <button
                class="shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                :class="
                  isSpeaking
                    ? 'bg-blue-500 text-white animate-pulse'
                    : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                "
                @click="speakSentence(currentQuestion.koreanSentence)"
              >
                🔊
              </button>
            </div>
            <div class="text-sm text-slate-400 italic mb-2">{{ currentQuestion.romanization }}</div>
            <p class="text-base text-slate-600">ประโยคนี้หมายถึงอะไร?</p>
          </div>
          <!--(meaning-to-sentence)-->
          <div v-else-if="currentQuestion.type === 'meaning-to-sentence'" class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
              {{ currentQuestion.thaiMeaning }}
            </div>
            <p class="text-base text-slate-600">ประโยคเกาหลีที่ถูกต้องคือข้อไหน?</p>
          </div>
          <!--(fill-blank)-->
          <div v-else-if="currentQuestion.type === 'fill-blank'" class="text-center">
            <div class="flex items-center justify-center gap-3 mb-3">
              <div class="text-3xl sm:text-4xl font-bold text-slate-800 leading-relaxed">
                {{ currentQuestion.blankSentence }}
              </div>
              <button
                class="shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                :class="
                  isSpeaking
                    ? 'bg-blue-500 text-white animate-pulse'
                    : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                "
                @click="speakSentence(currentQuestion.koreanSentence)"
              >
                🔊
              </button>
            </div>
            <div class="text-sm text-slate-400 italic mb-2">{{ currentQuestion.romanization }}</div>
            <p class="text-base text-slate-600">เติมคำในช่องว่างให้ถูกต้อง</p>
          </div>
          <!--(word-in-context)-->
          <div v-else-if="currentQuestion.type === 'word-in-context'" class="text-center">
            <div class="flex items-center justify-center gap-3 mb-3">
              <div class="text-3xl sm:text-4xl font-bold text-slate-800 leading-relaxed">
                <span v-html="highlightedSentence" />
              </div>
              <button
                class="shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                :class="
                  isSpeaking
                    ? 'bg-blue-500 text-white animate-pulse'
                    : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                "
                @click="speakSentence(currentQuestion.koreanSentence)"
              >
                🔊
              </button>
            </div>
            <div class="text-sm text-slate-400 italic mb-2">{{ currentQuestion.romanization }}</div>
            <p class="text-base text-slate-600">
              " <span class="font-bold text-blue-600">{{ currentQuestion.highlightWord }}</span
              >" ในประโยคนี้หมายถึงอะไร?
            </p>
          </div>
        </div>
        <!-- Answer Options -->
        <div class="px-5 pb-5 space-y-2.5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            class="w-full p-4 rounded-xl border-2 text-left transition-all duration-200"
            :class="getOptionClass(option, i)"
            :disabled="answered"
            @click="selectAnswer(option)"
          >
            <div class="flex items-center gap-3">
              <span
                class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold"
                :class="getLetterClass(option)"
              >
                {{ ['ก', 'ข', 'ค', 'ง'][i] }}
              </span>
              <span
                class="flex-1 text-sm sm:text-base"
                :class="{ 'font-medium': answered && option === currentQuestion.answer }"
              >
                {{ option }}
              </span>
              <span
                v-if="answered && option === currentQuestion.answer"
                class="text-green-500 text-lg"
                >✓</span
              >
              <span
                v-else-if="
                  answered && option === selectedAnswer && option !== currentQuestion.answer
                "
                class="text-red-500 text-lg"
                >✗</span
              >
            </div>
          </button>
        </div>
        <!-- Explanation (after answer) -->
        <Transition name="fade">
          <div v-if="answered" class="px-5 pb-5">
            <div
              class="p-4 rounded-xl border"
              :class="isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'"
            >
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">{{ isCorrect ? '🎉' : '💡' }}</span>
                <span class="font-bold" :class="isCorrect ? 'text-green-700' : 'text-red-700'">
                  {{ isCorrect ? 'ถูกต้อง!' : 'ไม่ถูกนะ' }}
                </span>
              </div>
              <p class="text-sm" :class="isCorrect ? 'text-green-600' : 'text-red-600'">
                {{ currentQuestion.explanation }}
              </p>
            </div>
          </div>
        </Transition>
        <!-- Next Button -->
        <div v-if="answered" class="px-5 pb-5">
          <button
            class="w-full py-3 rounded-xl font-bold text-white transition-all duration-200"
            :class="
              currentIndex < questions.length - 1
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
            "
            @click="nextQuestion"
          >
            {{ currentIndex < questions.length - 1 ? 'ข้อถัดไป →' : '📊 ดูผลลัพธ์' }}
          </button>
        </div>
      </div>
    </div>
    <!-- ===== Result Screen ===== -->
    <div v-if="state === 'result'" class="text-center space-y-6">
      <!-- Score Card -->
      <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <div class="text-4xl font-bold text-slate-800 mb-2">{{ score }}%</div>
        <div class="text-lg text-slate-600 mb-4">
          {{ correctCount }}/{{ questions.length }} ข้อถูก
        </div>
        <div class="flex justify-center gap-4 text-sm">
          <div class="text-center">
            <div class="text-2xl font-bold text-green-500">{{ correctCount }}</div>
            <div class="text-slate-500">ถูก</div>
          </div>
          <div class="w-px bg-slate-200" />
          <div class="text-center">
            <div class="text-2xl font-bold text-red-500">{{ questions.length - correctCount }}</div>
            <div class="text-slate-500">ผิด</div>
          </div>
          <div class="w-px bg-slate-200" />
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-500">+{{ xpEarned }}</div>
            <div class="text-slate-500">XP</div>
          </div>
        </div>
      </div>
      <!-- XP Breakdown -->
      <div
        class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-5"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <span class="text-xl">🏆</span>
          <span class="font-bold text-blue-800">+{{ xpEarned }} XP</span>
        </div>
        <div class="text-sm text-blue-600 text-center">
          {{ correctCount }} ข้อถูก × 10 XP = {{ correctCount * 10 }} XP
          <span v-if="perfectBonus"> + {{ perfectBonus }} XP โบนัส!</span>
        </div>
      </div>
      <!-- Action Buttons -->
      <div class="flex gap-3">
        <button
          class="flex-1 py-3 rounded-xl font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          @click="state = 'setup'"
        >
          🔄 เล่นอีกครั้ง
        </button>
        <button
          class="flex-1 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all"
          @click="$emit('back')"
        >
          ← กลับ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed, watch } from 'vue'
import { getBalancedQuiz, getQuizByType, getQuizStats } from '@/data/sentenceQuiz'
import { useUserStore } from '@/stores/useUserStore'
import { speakNormal, speakSlow, stopSpeech } from '@/utils/speech'
import type { SentenceQuizQuestion, SentenceQuizType } from '@/types'
const emit = defineEmits<{
 back: []
}>()
const userStore = useUserStore()
// State
const isSpeaking = ref(false)
const state = ref<'setup' | 'quiz' | 'result'>('setup')
const selectedType = ref<SentenceQuizType | 'balanced'>('balanced')
const questionCount = ref(10)
const questions = ref<SentenceQuizQuestion[]>([])
const currentIndex = ref(0)
const selectedAnswer = ref<string | null>(null)
const answered = ref(false)
const correctCount = ref(0)
const xpEarned = ref(0)
// Quiz type options
const stats = getQuizStats()
const quizTypes = [
  { type: 'balanced' as const, icon: '🎯', label: 'สมดุล (ทุกโหมด)', description: 'สุ่มจากทุกโหมด จำนวนเท่ากัน', count: Math.floor(stats.total / 4) * 4 },
  { type: 'sentence-to-meaning' as const, icon: '🇰🇷→🇹🇭', label: 'ประโยค → ความหมาย', description: 'อ่านเกาหลี เลือกความหมายไทย', count: stats.byType['sentence-to-meaning'] },
  { type: 'meaning-to-sentence' as const, icon: '🇹🇭→🇰🇷', label: 'ความหมาย → ประโยค', description: 'อ่านไทย เลือกประโยคเกาหลี', count: stats.byType['meaning-to-sentence'] },
  { type: 'fill-blank' as const, icon: '📝', label: 'เติมคำในช่องว่าง', description: 'เลือกคำที่หายไปในประโยค', count: stats.byType['fill-blank'] },
  { type: 'word-in-context' as const, icon: '🔍', label: 'คำในบริบท', description: 'คำนี้ในประโยคหมายถึงอะไร', count: stats.byType['word-in-context'] },
]
const maxQuestions = computed(() => {
  if (selectedType.value === 'balanced') {
    return Math.floor(stats.total / 4) * 4
  }
  return stats.byType[selectedType.value] || 50
})
// Current question
const currentQuestion = computed(() => questions.value[currentIndex.value] || null)
const isCorrect = computed(() => selectedAnswer.value === currentQuestion.value?.answer)
const score = computed(() => questions.value.length ? Math.round((correctCount.value / questions.value.length) * 100) : 0)
const perfectBonus = computed(() => score.value === 100 ? 50 : 0)
const scoreEmoji = computed(() => {
  if (score.value === 100) return '🏆'
  if (score.value >= 80) return '🎉'
  if (score.value >= 60) return '😊'
  if (score.value >= 40) return '😅'
  return '💪'
})
// Highlighted sentence for word-in-context
const highlightedSentence = computed(() => {
  if (!currentQuestion.value || currentQuestion.value.type !== 'word-in-context') return ''
  const word = currentQuestion.value.highlightWord || ''
  return currentQuestion.value.koreanSentence.replace(word, `<span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-lg border border-blue-200">${word}</span>`)
})
// Type badge
const typeBadgeClass = computed(() => {
  const colors: Record<string, string> = {
    'sentence-to-meaning': 'bg-blue-100 text-blue-700',
    'meaning-to-sentence': 'bg-purple-100 text-purple-700',
    'fill-blank': 'bg-amber-100 text-amber-700',
    'word-in-context': 'bg-emerald-100 text-emerald-700',
  }
  return colors[currentQuestion.value?.type || ''] || 'bg-slate-100 text-slate-700'
})
const typeBadgeLabel = computed(() => {
  const labels: Record<string, string> = {
    'sentence-to-meaning': '🇰🇷→🇹🇭 ประโยค → ความหมาย',
    'meaning-to-sentence': '🇹🇭→🇰🇷 ความหมาย → ประโยค',
    'fill-blank': '📝 เติมคำ',
    'word-in-context': '🔍 คำในบริบท',
  }
  return labels[currentQuestion.value?.type || ''] || ''
})
// Methods
function startQuiz() {
  if (selectedType.value === 'balanced') {
    const perType = Math.floor(questionCount.value / 4)
    questions.value = getBalancedQuiz(perType, 1)
  } else {
    questions.value = getQuizByType(selectedType.value).slice(0, questionCount.value)
  }
  currentIndex.value = 0
  correctCount.value = 0
  selectedAnswer.value = null
  answered.value = false
  state.value = 'quiz'
}
// ===== Speech ===== // อ่านประโยคเกาหลี
async function speakSentence(text: string) {
  isSpeaking.value = true
  try {
    await speakSlow(text)
  } finally {
    isSpeaking.value = false
  }
}
// อ่านคำตอบที่ถูก
async function speakAnswer() {
  if (!currentQuestion.value) return
  const text = currentQuestion.value.type === 'meaning-to-sentence' ? currentQuestion.value.answer : currentQuestion.value.koreanSentence
  await speakNormal(text)
}
// อ่านประโยคเมื่อเปลี่ยนข้อ
watch(currentQuestion, (q) => {
  if (q && state.value === 'quiz') {
    const text = q.type === 'meaning-to-sentence' ? undefined : q.koreanSentence
    if (text) {
      setTimeout(() => speakSentence(text), 300)
    }
  }
})
function selectAnswer(option: string) {
  if (answered.value) return
  selectedAnswer.value = option
  answered.value = true
  if (isCorrect.value) { correctCount.value++ }
  setTimeout(() => speakAnswer(), 500)
}
function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    answered.value = false
  } else {
    xpEarned.value = correctCount.value * 10 + perfectBonus.value
    userStore.addXP(xpEarned.value)
    state.value = 'result'
  }
}
function getOptionClass(option: string, _index: number) {
  if (!answered.value) return 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
  if (option === currentQuestion.value?.answer) return 'border-green-400 bg-green-50'
  if (option === selectedAnswer.value && option !== currentQuestion.value?.answer) return 'border-red-400 bg-red-50'
  return 'border-slate-200 bg-slate-50 opacity-50'
}
function getLetterClass(option: string) {
  if (!answered.value) return 'bg-slate-100 text-slate-600'
  if (option === currentQuestion.value?.answer) return 'bg-green-500 text-white'
  if (option === selectedAnswer.value && option !== currentQuestion.value?.answer) return 'bg-red-500 text-white'
  return 'bg-slate-100 text-slate-400'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
