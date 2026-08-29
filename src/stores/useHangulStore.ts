import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { consonants, vowels, combinedVowels, hangulCombinations, hangulExampleWords, doubleConsonants, singleConsonants, doubleConsonantWords as dcWords } from '@/data/hangul'
import type { HangulChar, HangulCombination } from '@/types'

export const useHangulStore = defineStore('hangul', () => {
  // State
  const completedChars = ref<string[]>(loadFromStorage<string[]>('hangul_completed') ?? [])
  const currentChar = ref<HangulChar | null>(null)
  const showTip = ref(false)
  const filterType = ref<'all' | 'consonant' | 'single' | 'double' | 'basic' | 'compound'>('all')

  // Getters
  const allChars = computed<HangulChar[]>(() => {
    const all = [...consonants, ...vowels, ...combinedVowels]
    if (filterType.value === 'all') return all
    if (filterType.value === 'consonant') return all.filter((c) => c.type === 'consonant')
    if (filterType.value === 'single') return all.filter((c) => c.consonantSubtype === 'single')
    if (filterType.value === 'double') return all.filter((c) => c.consonantSubtype === 'double')
    if (filterType.value === 'basic') return all.filter((c) => c.vowelSubtype === 'basic')
    if (filterType.value === 'compound') return all.filter((c) => c.vowelSubtype === 'compound')
    return all
  })

  const consonantList = computed(() => consonants)
  const singleConsonantList = computed(() => singleConsonants)
  const doubleConsonantList = computed(() => doubleConsonants)
  const vowelList = computed(() => [...vowels, ...combinedVowels])
  const combinations = computed<HangulCombination[]>(() => hangulCombinations)
  const exampleWords = computed(() => hangulExampleWords)
  const doubleConsonantWords = computed(() => dcWords)

  const progress = computed(() => {
    const total = consonants.length + vowels.length + combinedVowels.length
    const done = completedChars.value.length
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 }
  })

  const isAllCompleted = computed(() => progress.value.percent === 100)

  // Actions
  function markComplete(char: string) {
    if (!completedChars.value.includes(char)) {
      completedChars.value.push(char)
      saveToStorage('hangul_completed', completedChars.value)
    }
  }

  function unmarkComplete(char: string) {
    completedChars.value = completedChars.value.filter((c) => c !== char)
    saveToStorage('hangul_completed', completedChars.value)
  }

  function toggleComplete(char: string) {
    if (completedChars.value.includes(char)) {
      unmarkComplete(char)
    } else {
      markComplete(char)
    }
  }

  function setCurrentChar(char: HangulChar) {
    currentChar.value = char
    showTip.value = false
  }

  function toggleTip() {
    showTip.value = !showTip.value
  }

  function setFilter(type: 'all' | 'consonant' | 'single' | 'double' | 'basic' | 'compound') {
    filterType.value = type
  }

  function nextChar() {
    const chars = allChars.value
    if (chars.length === 0) return
    const currentIndex = currentChar.value
      ? chars.findIndex((c) => c.char === currentChar.value!.char)
      : -1
    const nextIndex = (currentIndex + 1) % chars.length
    const next = chars[nextIndex]
    if (next) {
      currentChar.value = next
    }
    showTip.value = false
  }

  function prevChar() {
    const chars = allChars.value
    if (chars.length === 0) return
    const currentIndex = currentChar.value
      ? chars.findIndex((c) => c.char === currentChar.value!.char)
      : chars.length
    const prevIndex = (currentIndex - 1 + chars.length) % chars.length
    const prev = chars[prevIndex]
    if (prev) {
      currentChar.value = prev
    }
    showTip.value = false
  }

  function resetProgress() {
    completedChars.value = []
    saveToStorage('hangul_completed', [])
  }

  return {
    // State
    completedChars,
    currentChar,
    showTip,
    filterType,
    // Getters
    allChars,
    consonantList,
    singleConsonantList,
    doubleConsonantList,
    vowelList,
    combinations,
    exampleWords,
    doubleConsonantWords,
    progress,
    isAllCompleted,
    // Actions
    markComplete,
    unmarkComplete,
    toggleComplete,
    setCurrentChar,
    toggleTip,
    setFilter,
    nextChar,
    prevChar,
    resetProgress,
  }
})

// ====== localStorage helpers ======
function loadFromStorage<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(`leran_korean_${key}`)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function saveToStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(`leran_korean_${key}`, JSON.stringify(value))
  } catch {
    // silently ignore
  }
}
