<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border shadow-sm active:scale-95 touch-manipulation"
      :class="
        audioEnabled
          ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
          : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200'
      "
      @click.stop="isOpen = !isOpen"
      aria-label="ເລືອກສຽງ"
    >
      <span class="text-base leading-none">{{ audioEnabled ? '🔊' : '🔇' }}</span>
      <span class="hidden sm:inline font-medium text-xs">{{ audioEnabled ? 'ສຽງເປີດ' : 'ສຽງປິດ' }}</span>
      <svg
        class="w-3 h-3 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden z-50 p-2"
      >
        <div class="text-xs font-bold text-slate-400 px-3 py-2 uppercase tracking-wide">
          🔊 ສຽງອ່ານເກົາຫຼີ
        </div>

        <!-- On -->
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 text-left touch-manipulation"
          :class="audioEnabled ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'"
          @click="setEnabled(true)"
        >
          <span class="text-xl">🔊</span>
          <div class="flex-1">
            <div class="text-sm font-bold">ເປີດສຽງ</div>
            <div class="text-[11px] text-slate-400">ອ່ານພາສາເກົາຫຼີ</div>
          </div>
          <span v-if="audioEnabled" class="text-blue-600 font-bold">✓</span>
        </button>

        <!-- Off -->
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 text-left touch-manipulation mt-1"
          :class="!audioEnabled ? 'bg-slate-100 text-slate-800' : 'text-slate-700 hover:bg-slate-50'"
          @click="setEnabled(false)"
        >
          <span class="text-xl">🔇</span>
          <div class="flex-1">
            <div class="text-sm font-bold">ປິດສຽງ</div>
            <div class="text-[11px] text-slate-400">ບໍ່ອ່ານອອກສຽງ</div>
          </div>
          <span v-if="!audioEnabled" class="text-slate-500 font-bold">✓</span>
        </button>

        <!-- Test -->
        <div class="border-t border-slate-100 mt-2 pt-2">
          <button
            class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors text-xs touch-manipulation"
            @click="testVoice"
          >
            <span>▶️</span> <span>ລອງຟັງສຽງ</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getAudioMode, setAudioMode, speakNormal } from '@/utils/speech'

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const activeMode = getAudioMode()

const audioEnabled = computed(() => activeMode.value !== 'off')

function setEnabled(on: boolean) {
  setAudioMode(on ? 'native' : 'off')
  isOpen.value = false
}

function testVoice() {
  speakNormal('안녕하세요! 한국어를 배워요.')
  isOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
