<script setup lang="ts">
import { computed, ref } from 'vue'
import type { HangulChar } from '@/types'
import { useHangulStore } from '@/stores/useHangulStore'
import { speakSlow } from '@/utils/speech'
const props = defineProps<{
  char: HangulChar
  compact?: boolean
  autoSpeak?: boolean
}>()
const emit = defineEmits<{
 speak: [char: string]
}>()
const hangulStore = useHangulStore()
const isSpeaking = ref(false)
const isCompleted = computed(() => hangulStore.completedChars.includes(props.char.char))
async function handleClick() {
  await speak(props.char.char)
  if (props.compact) {
    hangulStore.setCurrentChar(props.char)
  } else {
    hangulStore.toggleComplete(props.char.char)
  }
}
async function handleSpeak(e: Event) {
  e.stopPropagation()
  await speak(props.char.char)
}
async function speak(text: string) {
  isSpeaking.value = true
  try {
    await speakSlow(text)
  } finally {
    isSpeaking.value = false
  }
}
</script>

<template>
  <button
    class="hangul-card group relative flex flex-col items-center justify-center border-2 rounded-xl transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-[0.97]"
    :class="[
      compact
        ? 'px-2 py-2.5 sm:px-3 sm:py-3 min-h-[72px] sm:min-h-[80px]'
        : 'px-4 py-4 sm:px-5 sm:py-5 min-h-[100px] sm:min-h-[120px]',
      isCompleted
        ? 'bg-emerald-50 border-emerald-300 hover:border-emerald-400'
        : isSpeaking
          ? 'bg-blue-50 border-blue-400 shadow-md shadow-blue-100 scale-[1.02]'
          : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-0.5',
    ]"
    @click="handleClick"
  >
    <!-- Character -->
    <div
      class="font-bold text-slate-800 leading-none transition-transform group-hover:scale-110"
      :class="compact ? 'text-2xl sm:text-3xl mb-1' : 'text-5xl sm:text-6xl mb-2'"
    >
      {{ char.char }}
    </div>
    <!-- Info -->
    <div class="text-center">
      <div
        class="font-semibold text-blue-500"
        :class="compact ? 'text-[10px] sm:text-xs' : 'text-sm'"
      >
        {{ char.romanization }}
      </div>
      <div v-if="!compact" class="text-xs text-slate-400 mt-0.5">{{ char.sound }}</div>
    </div>
    <!-- Sound Button — เห็นชัดเจน ไม่ต้อง hover -->
    <button
      class="absolute top-1 right-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full transition-all duration-200 z-10"
      :class="
        isSpeaking
          ? 'bg-blue-500 text-white animate-pulse'
          : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
      "
      :title="isSpeaking ? 'กำลังออกเสียง...' : 'ฟังเสียง'"
      @click="handleSpeak"
    >
      <span v-if="isSpeaking" class="text-xs">🔊</span>
      <span v-else class="text-xs">🔊</span>
    </button>
    <!-- Completed Badge -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="scale-0 opacity-0"
      enter-to-class="scale-100 opacity-100"
    >
      <div
        v-if="isCompleted"
        class="absolute -top-1.5 -left-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm"
      >
        ✓
      </div>
    </Transition>
  </button>
</template>
