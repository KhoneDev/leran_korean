/**
 * Korean Native Speaker Audio & Speech Engine
 * ສຽງຄົນເກົາຫຼີແທ້ (Native Korean Human Audio) ພ້ອມລະບົບສຳຮອງ
 */

import { ref } from 'vue'

export type AudioMode = 'native' | 'webspeech' | 'off'

const AUDIO_MODE_KEY = 'korean_audio_mode'

// Load saved mode or default to 'native' (ສຽງຄົນເກົາຫຼີແທ້)
function loadAudioMode(): AudioMode {
  try {
    const saved = localStorage.getItem(AUDIO_MODE_KEY) as AudioMode | null
    if (saved === 'native' || saved === 'webspeech' || saved === 'off') {
      return saved
    }
  } catch { /* ignore */ }
  return 'native' // Default is genuine native speaker audio
}

const currentMode = ref<AudioMode>(loadAudioMode())

export function setAudioMode(mode: AudioMode) {
  currentMode.value = mode
  try {
    localStorage.setItem(AUDIO_MODE_KEY, mode)
  } catch { /* ignore */ }
}

export function getAudioMode() {
  return currentMode
}

// Keep track of active audio element to allow stopping
let currentAudio: HTMLAudioElement | null = null

function getNativeAudioUrl(text: string): string {
  const cleanText = text.trim()
  return `https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&client=tw-ob&q=${encodeURIComponent(cleanText)}`
}

/**
 * ຫຼິ້ນສຽງຄົນເກົາຫຼີແທ້ (Native Korean Human Audio)
 */
export async function playNativeAudio(text: string, rate: number = 1.0): Promise<void> {
  if (currentMode.value === 'off') return

  stopSpeech()

  return new Promise((resolve) => {
    try {
      const url = getNativeAudioUrl(text)
      const audio = new Audio(url)
      currentAudio = audio
      audio.playbackRate = rate

      let resolved = false
      const finish = () => {
        if (!resolved) {
          resolved = true
          if (currentAudio === audio) {
            currentAudio = null
          }
          resolve()
        }
      }

      audio.onended = finish
      audio.onerror = async () => {
        // Fallback to Web Speech API if offline or network error
        console.warn('Native audio stream error, falling back to Web Speech synthesis...')
        await speakWebSpeech(text, rate)
        finish()
      }

      // Safety timeout in case audio stream stalls
      setTimeout(finish, 8000)

      audio.play().catch(async (err) => {
        console.warn('Audio play prevented or failed, trying Web Speech:', err)
        await speakWebSpeech(text, rate)
        finish()
      })
    } catch (e) {
      console.error('Audio creation error:', e)
      speakWebSpeech(text, rate).then(resolve)
    }
  })
}

/**
 * Web Speech API Fallback
 */
let koreanVoice: SpeechSynthesisVoice | null = null
let voicesLoaded = false

function initWebSpeechVoices(): Promise<void> {
  return new Promise((resolve) => {
    if (voicesLoaded || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve()
      return
    }

    const synth = window.speechSynthesis

    function pickBestKoreanVoice() {
      const voices = synth.getVoices()
      // Prioritize natural / online / native Korean voices
      const koVoices = voices.filter(v => v.lang.startsWith('ko') || v.lang.includes('KR'))

      const naturalVoice = koVoices.find(v =>
        v.name.includes('Natural') ||
        v.name.includes('Google') ||
        v.name.includes('Yuna') ||
        v.name.includes('SunHi') ||
        v.name.includes('Heami') ||
        v.name.includes('Sora')
      )

      koreanVoice = naturalVoice || koVoices[0] || null
      voicesLoaded = true
      resolve()
    }

    if (synth.getVoices().length > 0) {
      pickBestKoreanVoice()
    } else {
      synth.onvoiceschanged = pickBestKoreanVoice
      setTimeout(pickBestKoreanVoice, 1000)
    }
  })
}

async function speakWebSpeech(text: string, rate: number = 1.0): Promise<void> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

  await initWebSpeechVoices()

  return new Promise((resolve) => {
    try {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ko-KR'
      utterance.rate = rate
      utterance.pitch = 1.0
      if (koreanVoice) {
        utterance.voice = koreanVoice
      }

      utterance.onend = () => resolve()
      utterance.onerror = () => resolve()

      window.speechSynthesis.speak(utterance)
    } catch {
      resolve()
    }
  })
}

/**
 * ຟັງສຽງຫຼັກຂອງແອັບ (ເລືອກສຽງຄົນເກົາຫຼີແທ້ເປັນຫຼັກ)
 */
export async function speakKorean(text: string, rate: number = 1.0): Promise<void> {
  if (currentMode.value === 'off') return

  if (currentMode.value === 'webspeech') {
    return speakWebSpeech(text, rate)
  }

  // Default: Native Korean Human Audio
  return playNativeAudio(text, rate)
}

/** ຟັງສຽງຊ້າ (ຝຶກອອກສຽງ) */
export async function speakSlow(text: string): Promise<void> {
  return speakKorean(text, 0.8)
}

/** ຟັງສຽງປົກກະຕິ (ຄວາມໄວທຳມະຊາດ) */
export async function speakNormal(text: string): Promise<void> {
  return speakKorean(text, 1.0)
}

/** ຟັງສຽງໄວ */
export async function speakFast(text: string): Promise<void> {
  return speakKorean(text, 1.25)
}

/** ຢຸດສຽງທັງໝົດ */
export function stopSpeech(): void {
  if (currentAudio) {
    try {
      currentAudio.pause()
      currentAudio.currentTime = 0
      currentAudio = null
    } catch { /* ignore */ }
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel()
    } catch { /* ignore */ }
  }
}

export function isSpeechSupported(): boolean {
  return true
}
