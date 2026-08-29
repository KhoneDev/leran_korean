/**
 * Speech utility using Web Speech API (built-in browser TTS)
 * ใช้เสียงสากลของเกาหลีที่มีในเบราว์เซอร์ ไม่ใช่ AI
 * เสียงผู้หญิงเกาหลีเท่านั้น — เปิด/ปิดได้
 */

import { ref } from 'vue'

// ===== Voice State =====
const koreanFemaleVoice = ref<SpeechSynthesisVoice | null>(null)
const availableVoices = ref<SpeechSynthesisVoice[]>([])
let voicesLoaded = false

// ===== localStorage =====
const VOICE_ENABLED_KEY = 'korean_voice_enabled'

function isVoiceEnabled(): boolean {
  try {
    const saved = localStorage.getItem(VOICE_ENABLED_KEY)
    if (saved !== null) return saved === 'true'
  } catch { /* ignore */ }
  return true // เปิดเสียงเป็นค่า default
}

// ===== Voice Loading =====
function loadVoices(): Promise<void> {
  return new Promise((resolve) => {
    if (voicesLoaded) {
      resolve()
      return
    }

    const synth = window.speechSynthesis

    function findKoreanVoice() {
      const voices = synth.getVoices()
      availableVoices.value = voices

      // หาเสียงเกาหลีทั้งหมด (ko-KR, ko-KP, ko ฯลฯ)
      const koVoices = voices.filter((v) => v.lang.startsWith('ko'))

      console.log('🇰🇷 Korean voices found:', koVoices.length)
      koVoices.forEach((v, i) => {
        console.log(`  [${i}] ${v.name} (${v.lang}) ${v.localService ? 'LOCAL' : 'REMOTE'}`)
      })

      // เลือกเสียงหญิงเกาหลี (ตัวแรกที่หาได้)
      koreanFemaleVoice.value = koVoices[0] ?? null

      if (!koreanFemaleVoice.value) {
        console.warn('⚠️ ไม่พบเสียงเกาหลี — เสียงจะไม่ทำงาน')
      }

      voicesLoaded = true
      resolve()
    }

    if (synth.getVoices().length > 0) {
      findKoreanVoice()
    } else {
      synth.onvoiceschanged = findKoreanVoice
      setTimeout(() => {
        if (!voicesLoaded) findKoreanVoice()
      }, 1500)
    }
  })
}

// ===== Public API =====

/** ดูเสียงที่มี available */
export function getAvailableKoreanVoices() {
  return {
    current: koreanFemaleVoice,
    all: availableVoices,
  }
}

/** ออกเสียงข้อความภาษาเกาหลี */
export async function speakKorean(
  text: string,
  rate: number = 1.0,
): Promise<void> {
  // ตรวจสอบว่าเปิดเสียงหรือไม่
  if (!isVoiceEnabled()) return

  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis ไม่รองรับในเบราว์เซอร์นี้')
    return
  }

  window.speechSynthesis.cancel()
  await loadVoices()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ko-KR'
  utterance.rate = rate
  utterance.pitch = 1.0
  utterance.volume = 1

  // ใช้เสียงเกาหลีที่หาได้
  if (koreanFemaleVoice.value) {
    utterance.voice = koreanFemaleVoice.value
  }

  return new Promise((resolve) => {
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    window.speechSynthesis.speak(utterance)
  })
}

/** ออกเสียงช้าสำหรับฝึกออกเสียง */
export async function speakSlow(text: string): Promise<void> {
  return speakKorean(text, 0.8)
}

/** ออกเสียงปกติ (ความเร็วธรรมชาติ) */
export async function speakNormal(text: string): Promise<void> {
  return speakKorean(text, 1.0)
}

/** ออกเสียงเร็ว */
export async function speakFast(text: string): Promise<void> {
  return speakKorean(text, 1.3)
}

/** หยุดเสียงทั้งหมด */
export function stopSpeech(): void {
  window.speechSynthesis.cancel()
}

/** ตรวจสอบว่าเบราว์เซอร์รองรับ Speech หรือไม่ */
export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window
}
