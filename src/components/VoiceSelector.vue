<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-200 bg-white hover:bg-pink-50 hover:border-pink-300 shadow-xs active:scale-95"
      :class="
        isOpen
          ? 'bg-pink-50 text-pink-700 border-pink-300'
          : 'text-slate-700'
      "
      @click="isOpen = !isOpen"
      aria-label="ເລືອກສຽງອ່ານພາສາເກົາຫຼີ"
    >
      <span class="text-base leading-none">{{ currentModeIcon }}</span>
      <span class="hidden sm:inline font-medium text-xs">{{ currentModeLabel }}</span>
      <svg
        class="w-3 h-3 text-slate-400 transition-transform duration-200"
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
        class="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden z-50 p-2"
      >
        <div class="text-xs font-bold text-slate-400 px-3 py-2 uppercase tracking-wide">
          🔊 ລະບົບສຽງອ່ານເກົາຫຼີ
        </div>

        <!-- Mode 1: Native Korean Speaker Audio (Default & Recommended) -->
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left"
          :class="
            activeMode === 'native'
              ? 'bg-blue-50 text-blue-700 font-semibold'
              : 'text-slate-700 hover:bg-slate-50'
          "
          @click="selectMode('native')"
        >
          <span class="text-xl">🇰🇷</span>
          <div class="flex-1">
            <div class="text-sm font-bold flex items-center gap-1.5">
              <span>ສຽງຄົນເກົາຫຼີແທ້</span>
              <span class="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-bold">ແນະນຳ</span>
            </div>
            <div class="text-[11px] text-slate-400">ສຳນຽງທຳມະຊາດ ຊັດເຈນ</div>
          </div>
          <span v-if="activeMode === 'native'" class="text-blue-600 font-bold">✓</span>
        </button>

        <!-- Mode 2: Web Speech System -->
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left mt-1"
          :class="
            activeMode === 'webspeech'
              ? 'bg-purple-50 text-purple-700 font-semibold'
              : 'text-slate-700 hover:bg-slate-50'
          "
          @click="selectMode('webspeech')"
        >
          <span class="text-xl">🔊</span>
          <div class="flex-1">
            <div class="text-sm font-bold">ສຽງລະບົບ (Web Speech)</div>
            <div class="text-[11px] text-slate-400">ສຽງອ່ານຈາກອຸປະກອນ</div>
          </div>
          <span v-if="activeMode === 'webspeech'" class="text-purple-600 font-bold">✓</span>
        </button>

        <!-- Mode 3: Mute / Off -->
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left mt-1"
          :class="
            activeMode === 'off'
              ? 'bg-slate-100 text-slate-800 font-semibold'
              : 'text-slate-700 hover:bg-slate-50'
          "
          @click="selectMode('off')"
        >
          <span class="text-xl">🔇</span>
          <div class="flex-1">
            <div class="text-sm font-bold">ປິດສຽງ</div>
            <div class="text-[11px] text-slate-400">ບໍ່ອ່ານອອກສຽງ</div>
          </div>
          <span v-if="activeMode === 'off'" class="text-slate-600 font-bold">✓</span>
        </button>

        <!-- Test Button -->
        <div class="border-t border-slate-100 mt-2 pt-2">
          <button
            class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors text-xs active:scale-95"
            @click="testVoice"
          >
            <span>▶️</span> <span>ລອງຟັງສຽງຕົວຢ່າງ</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getAudioMode, setAudioMode, speakNormal, type AudioMode } from '@/utils/speech'

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const activeMode = getAudioMode()

const currentModeIcon = computed(() => {
  if (activeMode.value === 'native') return '🇰🇷'
  if (activeMode.value === 'webspeech') return '🔊'
  return '🔇'
})

const currentModeLabel = computed(() => {
  if (activeMode.value === 'native') return 'ສຽງຄົນເກົາຫຼີ'
  if (activeMode.value === 'webspeech') return 'ສຽງລະບົບ'
  return 'ປິດສຽງ'
})

function selectMode(mode: AudioMode) {
  setAudioMode(mode)
  isOpen.value = false
}

function testVoice() {
  speakNormal('안녕하세요! 한국어를 배워요.')
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
