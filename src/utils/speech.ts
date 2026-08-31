/**
 * Korean Speech Engine — Web Speech API
 * ໃຊ້ Web Speech API ຂອງ Browser ໂດຍຄັດເລືອກສຽງເກົາຫຼີທີ່ດີທີ່ສຸດ
 * ທຳງານໄດ້ທັງ mobile ແລະ desktop ໂດຍບໍ່ຕ້ອງ CORS
 */

import { ref } from 'vue'

export type AudioMode = 'native' | 'webspeech' | 'off'

const AUDIO_MODE_KEY = 'korean_audio_mode'

function loadAudioMode(): AudioMode {
  try {
    const saved = localStorage.getItem(AUDIO_MODE_KEY) as AudioMode | null
    if (saved === 'native' || saved === 'webspeech' || saved === 'off') {
      return saved
    }
  } catch { /* ignore */ }
  return 'native'
}

const currentMode = ref<AudioMode>(loadAudioMode())

export function setAudioMode(mode: AudioMode) {
  currentMode.value = mode
  try { localStorage.setItem(AUDIO_MODE_KEY, mode) } catch { /* ignore */ }
}

export function getAudioMode() {
  return currentMode
}

// ====== Web Speech Engine ======
let koreanVoice: SpeechSynthesisVoice | null = null
let voicesLoaded = false
let voiceLoadPromise: Promise<void> | null = null

/**
 * เลือกเสียงเกาหลีที่ดีที่สุดจากเบราว์เซอร์
 * ลำดับความสำคัญ: Google KR > Natural/Online > Local > fallback
 */
function pickBestKoreanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const ko = voices.filter(v => v.lang.startsWith('ko'))
  if (!ko.length) return null

  // ລຳດັບຄວາມນິຍົມ: Google (online) > Natural > SunHi / Yuna > ອື່ນໆ
  const priority = [
    (v: SpeechSynthesisVoice) => /google/i.test(v.name) && !v.localService,
    (v: SpeechSynthesisVoice) => /natural/i.test(v.name),
    (v: SpeechSynthesisVoice) => !v.localService, // online voice
    (v: SpeechSynthesisVoice) => /sunhi|yuna|heami|sora|jiyeon|minjun/i.test(v.name),
    () => true,
  ]

  for (const fn of priority) {
    const found = ko.find(fn)
    if (found) return found
  }

  return ko[0] ?? null
}

function initVoices(): Promise<void> {
  if (voiceLoadPromise) return voiceLoadPromise
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return Promise.resolve()
  }

  voiceLoadPromise = new Promise<void>((resolve) => {
    const synth = window.speechSynthesis

    const tryLoad = () => {
      const voices = synth.getVoices()
      if (voices.length > 0) {
        koreanVoice = pickBestKoreanVoice(voices)
        voicesLoaded = true
        resolve()
      }
    }

    tryLoad()
    if (!voicesLoaded) {
      synth.addEventListener('voiceschanged', () => {
        tryLoad()
      }, { once: true })
      // ລະບົບສຳຮອງ — ໂທລະສັບບາງລຸ້ນຊ້າໃນການໂຫຼດ voice list
      setTimeout(tryLoad, 300)
      setTimeout(tryLoad, 1000)
    }
  })

  return voiceLoadPromise
}

/**
 * ອອກສຽງພາສາເກົາຫຼີຜ່ານ Web Speech API
 */
async function speakViaSpeechAPI(text: string, rate: number = 1.0): Promise<void> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

  await initVoices()

  return new Promise((resolve) => {
    try {
      const synth = window.speechSynthesis
      synth.cancel() // ຢຸດສຽງທີ່ຄ້າງຢູ່ກ່ອນ

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ko-KR'
      utterance.rate = Math.max(0.5, Math.min(2.0, rate))
      utterance.pitch = 1.0
      utterance.volume = 1.0

      if (koreanVoice) {
        utterance.voice = koreanVoice
      }

      // iOS Safari workaround — speechSynthesis ຕ້ອງຖືກ trigger ຈາກ user gesture
      // ດ້ວຍການ speak ຄ່າ empty ກ່ອນ
      const timeoutId = setTimeout(() => resolve(), 8000)

      utterance.onend = () => {
        clearTimeout(timeoutId)
        resolve()
      }
      utterance.onerror = () => {
        clearTimeout(timeoutId)
        resolve()
      }

      synth.speak(utterance)

      // Chrome bug workaround: resume if paused
      if (synth.paused) synth.resume()

    } catch {
      resolve()
    }
  })
}

// ====== Public API ======

export async function speakKorean(text: string, rate: number = 1.0): Promise<void> {
  if (currentMode.value === 'off') return
  return speakViaSpeechAPI(text, rate)
}

export async function speakSlow(text: string): Promise<void> {
  return speakKorean(text, 0.8)
}

export async function speakNormal(text: string): Promise<void> {
  return speakKorean(text, 1.0)
}

export async function speakFast(text: string): Promise<void> {
  return speakKorean(text, 1.25)
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try { window.speechSynthesis.cancel() } catch { /* ignore */ }
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
