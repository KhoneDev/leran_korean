<script setup lang="ts">

import { onMounted } from 'vue'
import { useHangulStore } from '@/stores/useHangulStore'
import { useUserStore } from '@/stores/useUserStore'
import { speakSlow, speakNormal } from '@/utils/speech'
const hangulStore = useHangulStore()
const userStore = useUserStore()
onMounted(() => {
  if (!hangulStore.currentChar && hangulStore.allChars.length > 0) {
    const firstChar = hangulStore.allChars[0]
    if (firstChar) { hangulStore.setCurrentChar(firstChar) }
  }
})
function handleMarkDone() {
  if (hangulStore.currentChar) {
    hangulStore.toggleComplete(hangulStore.currentChar.char)
    userStore.addXP(2)
  }
}
function speakCurrent() {
  if (hangulStore.currentChar) {
    speakSlow(hangulStore.currentChar.char)
  }
}
function speakCurrentNormal() {
  if (hangulStore.currentChar) {
    speakNormal(hangulStore.currentChar.char)
  }
}
</script>

<template>
  <div class="flex flex-col items-center px-4 py-6 sm:py-8">
    <div v-if="hangulStore.currentChar" class="flex flex-col items-center w-full max-w-sm">
      <!-- Character Card -->
      <div
        class="w-full bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100/50 p-6 sm:p-8 text-center mb-6"
      >
        <div
          class="text-7xl sm:text-8xl font-bold text-slate-800 leading-none mb-4 animate-fade-in"
        >
          {{ hangulStore.currentChar.char }}
        </div>
        <div class="text-base text-slate-400 mb-1">{{ hangulStore.currentChar.name }}</div>
        <div class="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
          {{ hangulStore.currentChar.romanization }}
        </div>
        <div class="text-lg text-slate-600">{{ hangulStore.currentChar.sound }}</div>
        <!-- Pronunciation Buttons -->
        <div class="flex items-center justify-center gap-3 mt-5">
          <button
            class="flex items-center gap-2 px-4 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 active:scale-95 shadow-sm"
            title="ฟังเสียงช้า (ฝึกออกเสียง)"
            @click="speakCurrent"
          >
            🐢 ฟังเสียงช้า
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-200 active:scale-95"
            title="ฟังเสียงปกติ"
            @click="speakCurrentNormal"
          >
            🗣️ ฟังปกติ
          </button>
        </div>
      </div>
      <!-- Tip Toggle -->
      <button
        class="mb-4 px-4 py-2 text-sm text-slate-500 border border-dashed border-slate-300 rounded-lg hover:border-blue-400 hover:text-blue-500 transition-colors duration-200"
        @click="hangulStore.toggleTip()"
      >
        {{ hangulStore.showTip ? 'ซ่อนเคล็ดลับ' : '💡 แสดงเคล็ดลับ' }}
      </button>
      <!-- Tip Box -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-95"
      >
        <div
          v-if="hangulStore.showTip && hangulStore.currentChar.tip"
          class="w-full mb-5 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 text-center leading-relaxed"
        >
          {{ hangulStore.currentChar.tip }}
        </div>
      </Transition>
      <!-- Action Buttons -->
      <div class="flex items-center gap-3 w-full mb-6">
        <button
          class="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 active:scale-95"
          @click="hangulStore.prevChar()"
        >
          ◀ ก่อนหน้า
        </button>
        <button
          class="flex-1 px-4 py-3 font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
          :class="
            hangulStore.completedChars.includes(hangulStore.currentChar.char)
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          "
          @click="handleMarkDone"
        >
          {{
            hangulStore.completedChars.includes(hangulStore.currentChar.char)
              ? '✓ จำได้แล้ว'
              : 'จำได้ ✓'
          }}
        </button>
        <button
          class="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 active:scale-95"
          @click="hangulStore.nextChar()"
        >
          ถัดไป ▶
        </button>
      </div>
      <!-- Navigation Dots -->
      <div class="flex flex-wrap justify-center gap-1.5 max-w-xs">
        <button
          v-for="char in hangulStore.allChars"
          :key="char.char"
          class="w-2 h-2 rounded-full transition-all duration-200"
          :class="
            char.char === hangulStore.currentChar?.char
              ? 'bg-blue-500 scale-150'
              : hangulStore.completedChars.includes(char.char)
                ? 'bg-emerald-400 hover:scale-125'
                : 'bg-slate-300 hover:bg-slate-400 hover:scale-125'
          "
          @click="hangulStore.setCurrentChar(char)"
        ></button>
      </div>
    </div>
    <!-- Empty State -->
    <div v-else class="text-center py-16 text-slate-400">
      <div class="text-4xl mb-3">📖</div>
      <p class="text-lg">ยังไม่มีตัวอักษรให้ฝึก</p>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
