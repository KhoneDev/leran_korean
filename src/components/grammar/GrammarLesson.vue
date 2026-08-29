<script setup lang="ts">

import { ref } from 'vue'
import type { GrammarPoint } from '@/data/grammar'
import { speakNormal } from '@/utils/speech'
const props = defineProps<{
  grammar: GrammarPoint
}>()
const showExamples = ref(true)
const showPractice = ref(false)
const currentAnswer = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
function checkAnswer(correctAnswer: string) {
  currentAnswer.value = currentAnswer.value.trim()
  isCorrect.value = currentAnswer.value === correctAnswer
  showResult.value = true
}
function resetPractice() {
  currentAnswer.value = ''
  showResult.value = false
}
function speak(text: string) {
  speakNormal(text)
}
</script>

<template>
  <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
    <!-- Header -->
    <div class="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-lg font-bold text-slate-800">{{ grammar.title }}</h3>
          <div class="text-sm text-blue-600 font-medium mt-0.5">{{ grammar.titleKr }}</div>
        </div>
        <span
          class="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full whitespace-nowrap"
        >
          Lv.{{ grammar.level }}
        </span>
      </div>
      <div class="mt-2 px-3 py-2 bg-white rounded-lg border border-blue-100">
        <div class="text-xs text-slate-400 mb-0.5">โครงสร้าง</div>
        <div class="text-sm font-mono font-semibold text-slate-700">{{ grammar.structure }}</div>
      </div>
    </div>
    <!-- Content -->
    <div class="px-5 py-4">
      <!-- Meaning -->
      <div class="mb-4">
        <div class="text-sm font-semibold text-slate-600 mb-1">💡 ความหมาย</div>
        <div class="text-sm text-slate-700">{{ grammar.meaning }}</div>
      </div>
      <!-- Explanation -->
      <div class="mb-4">
        <div class="text-sm font-semibold text-slate-600 mb-1">📖 อธิบาย</div>
        <div
          class="text-sm text-slate-700 whitespace-pre-line leading-relaxed bg-slate-50 p-3 rounded-lg"
        >
          {{ grammar.explanation }}
        </div>
      </div>
      <!-- Examples -->
      <div class="mb-4">
        <button
          class="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2 hover:text-blue-700"
          @click="showExamples = !showExamples"
        >
          <span>{{ showExamples ? '▾' : '▸' }}</span>
          <span>ตัวอย่าง ({{ grammar.examples.length }})</span>
        </button>
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="showExamples" class="space-y-2">
            <div
              v-for="(ex, idx) in grammar.examples"
              :key="idx"
              class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg group"
            >
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-base font-semibold text-slate-800">{{ ex.kr }}</span>
                  <button
                    class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors text-xs opacity-0 group-hover:opacity-100"
                    @click="speak(ex.kr)"
                  >
                    🔊
                  </button>
                </div>
                <div class="text-sm text-slate-500 mt-0.5">{{ ex.th }}</div>
                <div v-if="ex.note" class="text-xs text-blue-500 mt-0.5">📝 {{ ex.note }}</div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <!-- Tips -->
      <div v-if="grammar.tips.length > 0" class="mb-4">
        <div class="text-sm font-semibold text-slate-600 mb-2">⭐ เคล็ดลับ</div>
        <div class="space-y-1.5">
          <div
            v-for="(tip, idx) in grammar.tips"
            :key="idx"
            class="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-2.5 rounded-lg"
          >
            <span>💡</span> <span>{{ tip }}</span>
          </div>
        </div>
      </div>
      <!-- Practice -->
      <div>
        <button
          class="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mb-2"
          @click="showPractice = !showPractice"
        >
          <span>{{ showPractice ? '▾' : '▸' }}</span>
          <span>แบบฝึกหัด ({{ grammar.practice.length }})</span>
        </button>
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 -translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="showPractice" class="space-y-3">
            <div
              v-for="(p, idx) in grammar.practice"
              :key="p.id"
              class="p-4 bg-slate-50 rounded-xl"
            >
              <div class="text-sm font-medium text-slate-700 mb-2">
                <span class="text-slate-400 mr-1">{{ idx + 1 }}.</span> {{ p.question }}
              </div>
              <!-- Fill blank -->
              <div v-if="p.type === 'fill-blank'" class="flex items-center gap-2 mb-2">
                <input
                  v-model="currentAnswer"
                  type="text"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  :placeholder="p.hint || 'พิมพ์คำตอบ...'"
                  :disabled="showResult"
                  @keyup.enter="checkAnswer(p.answer)"
                />
                <button
                  v-if="!showResult"
                  class="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  @click="checkAnswer(p.answer)"
                >
                  ตรวจ
                </button>
              </div>
              <!-- Multiple choice -->
              <div v-if="p.type === 'multiple-choice'" class="flex flex-wrap gap-2 mb-2">
                <button
                  v-for="opt in p.options"
                  :key="opt"
                  class="px-3 py-1.5 text-sm border rounded-lg transition-all"
                  :class="
                    showResult && opt === p.answer
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-700'
                      : showResult && opt === currentAnswer && opt !== p.answer
                        ? 'bg-red-100 border-red-400 text-red-700'
                        : opt === currentAnswer
                          ? 'bg-blue-100 border-blue-400 text-blue-700'
                          : 'bg-white border-slate-200 hover:border-blue-300'
                  "
                  :disabled="showResult"
                  @click="currentAnswer = opt; checkAnswer(p.answer)"
                >
                  {{ opt }}
                </button>
              </div>
              <!-- Result -->
              <Transition
                enter-active-class="transition-all duration-200"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <div v-if="showResult" class="mt-2">
                  <div
                    class="flex items-center gap-2 text-sm font-medium"
                    :class="isCorrect ? 'text-emerald-600' : 'text-red-500'"
                  >
                    <span>{{ isCorrect ? '✅' : '❌' }}</span>
                    <span>{{ isCorrect ? 'ถูกต้อง!' : `คำตอบ: ${p.answer}` }}</span>
                  </div>
                  <div class="text-xs text-slate-500 mt-1">💡 {{ p.explanation }}</div>
                </div>
              </Transition>
            </div>
            <button
              v-if="showResult"
              class="w-full py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              @click="resetPractice()"
            >
              🔄 ลองใหม่
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
