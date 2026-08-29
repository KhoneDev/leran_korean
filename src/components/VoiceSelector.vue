<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
      :class="
        isOpen
          ? 'bg-pink-100 text-pink-700'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 :bg-slate-600'
      "
      @click="isOpen = !isOpen"
    >
      <span class="text-lg">👩</span>
      <span class="hidden sm:inline">เสียงหญิง</span>
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
        class="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden z-50"
      >
        <div class="p-2">
          <div class="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wide">
            🔊 เสียงเกาหลี
          </div>
          <!-- Female Voice -->
          <button
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
            :class="
              isFemale
                ? 'bg-pink-50 text-pink-700 '
                : 'text-slate-700 hover:bg-slate-50 :bg-slate-700'
            "
            @click="toggleFemale(true)"
          >
            <span class="text-xl">👩</span>
            <div class="text-left flex-1">
              <div class="text-sm font-medium">เปิดเสียง</div>
              <div class="text-xs text-slate-400">女性 — เสียงผู้หญิงเกาหลี</div>
            </div>
            <span v-if="isFemale" class="text-pink-500">✓</span>
          </button>
          <!-- Off -->
          <button
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
            :class="
              !isFemale
                ? 'bg-slate-50 text-slate-700 '
                : 'text-slate-700 hover:bg-slate-50 :bg-slate-700'
            "
            @click="toggleFemale(false)"
          >
            <span class="text-xl">🔇</span>
            <div class="text-left flex-1">
              <div class="text-sm font-medium">ปิดเสียง</div>
              <div class="text-xs text-slate-400">ไม่อ่านออกเสียง</div>
            </div>
            <span v-if="!isFemale" class="text-slate-400">✓</span>
          </button>
        </div>
        <!-- Test Button -->
        <div class="border-t border-slate-100 p-2">
          <button
            class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 :bg-slate-600 transition-colors text-sm"
            @click="testVoice"
          >
            <span>▶️</span> <span>ลองฟังเสียง</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { speakNormal } from '@/utils/speech'
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const isFemale = ref(loadVoiceEnabled())
const VOICE_KEY = 'korean_voice_enabled'
function loadVoiceEnabled(): boolean {
  try {
    const saved = localStorage.getItem(VOICE_KEY)
    if (saved !== null) return saved === 'true'
  } catch { /* ignore */ }
  return true
}
function saveVoiceEnabled(enabled: boolean) {
  try { localStorage.setItem(VOICE_KEY, String(enabled)) } catch { /* ignore */ }
}
function toggleFemale(enabled: boolean) {
  isFemale.value = enabled
  saveVoiceEnabled(enabled)
  isOpen.value = false
}
function testVoice() {
  speakNormal('안녕하세요! 한국어를 배우고 있어요.')
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
// Export for other components to check
defineExpose({ isFemale })
</script>
