import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProficiencyLevel } from '@/types'
import { levelConfigs, checkLevelUnlocked, getNextLevel } from '@/data/levels'

// ====== SRS (Spaced Repetition System) ======
export interface SRSData {
  easeFactor: number    // ความยาก (2.5 = ปกติ)
  interval: number      // จำนวนวันที่รอจนรอบถัดไป
  repetitions: number   // จำนวนครั้งที่จำได้ติดต่อกัน
  nextReview: string    // วันที่ต้องทบทวนถัดไป (ISO date)
  lastReview: string    // วันที่ทบทวนล่าสุด
  totalReviews: number  // จำนวนครั้งที่ทบทวนทั้งหมด
}

interface UserProgress {
  currentLevel: ProficiencyLevel
  unlockedLevels: ProficiencyLevel[]
  totalXP: number
  streak: number
  lastStudyDate: string | null
  wordsLearned: number
  learnedWords: string[]  // word IDs that user has learned
  lessonsCompleted: number
  levelXP: Record<number, number>  // XP per level
  wordSRS: Record<string, SRSData>  // SRS data for each word
}

const STORAGE_KEY = 'leran_korean_user'

export const useUserStore = defineStore('user', () => {
  const progress = ref<UserProgress>(loadProgress())

  // ====== Getters ======

  /** XP เฉพาะ level ปัจจุบัน */
  const currentLevelXP = computed(() => progress.value.levelXP[progress.value.currentLevel] ?? 0)

  /** เปอร์เซ็นต์ XP ใน level ปัจจุบัน */
  const levelProgressPercent = computed(() => {
    const next = getNextLevel(progress.value.currentLevel)
    if (!next) return 100
    const currentReq = levelConfigs[progress.value.currentLevel].unlockRequirement.minXP
    const nextReq = next.unlockRequirement.minXP
    const range = nextReq - currentReq
    if (range <= 0) return 100
    return Math.min(100, Math.round(((progress.value.totalXP - currentReq) / range) * 100))
  })

  /** จำนวน level ที่ปลดล็อกแล้ว */
  const unlockedCount = computed(() => progress.value.unlockedLevels.length)

  /** Level ถัดไปที่ยังไม่ปลดล็อก */
  const nextLockedLevel = computed(() => {
    for (let i = 1; i <= 6; i++) {
      if (!progress.value.unlockedLevels.includes(i as ProficiencyLevel)) {
        return i as ProficiencyLevel
      }
    }
    return null
  })

  /** ตรวจสอบว่า level ไหนปลดล็อกแล้ว */
  function isLevelUnlocked(_level: ProficiencyLevel): boolean {
    return true // ทุก level เข้าได้หมด
  }

  /** ตรวจสอบว่า level ไหนผ่านเงื่อนไขปลดล็อกหรือยัง — เปิดให้ทุก level */
  function canUnlockLevel(_level: ProficiencyLevel): boolean {
    return true
  }

  /** ดูข้อมูล Level */
  function getLevelInfo(level: ProficiencyLevel) {
    return levelConfigs[level]
  }

  // ====== Actions ======

  /** เลือก level ปัจจุบัน — ทุก level เข้าได้หมด */
  function setCurrentLevel(level: ProficiencyLevel) {
    progress.value.currentLevel = level
    // ปลดล็อคอัตโนมัติถ้ายังไม่ปลด
    if (!progress.value.unlockedLevels.includes(level)) {
      progress.value.unlockedLevels.push(level)
    }
    saveProgress()
  }

  /** ปลดล็อก level ใหม่ */
  function unlockLevel(level: ProficiencyLevel) {
    if (!progress.value.unlockedLevels.includes(level)) {
      progress.value.unlockedLevels.push(level)
      saveProgress()
    }
  }

  /** ตรวจสอบและปลดล็อก level ใหม่ตามเงื่อนไข */
  function checkAndUnlockLevels() {
    for (let i = 1; i <= 6; i++) {
      const lvl = i as ProficiencyLevel
      if (!progress.value.unlockedLevels.includes(lvl)) {
        if (canUnlockLevel(lvl)) {
          unlockLevel(lvl)
        }
      }
    }
  }

  /** เพิ่ม XP */
  function addXP(amount: number) {
    progress.value.totalXP += amount
    progress.value.levelXP[progress.value.currentLevel] =
      (progress.value.levelXP[progress.value.currentLevel] ?? 0) + amount
    checkStreak()
    checkAndUnlockLevels()
    saveProgress()
  }

  /** เช็ค streak */
  function checkStreak() {
    const today = getToday()
    if (progress.value.lastStudyDate === today) return

    const yesterday = getYesterday()
    if (progress.value.lastStudyDate === yesterday) {
      progress.value.streak += 1
    } else if (progress.value.lastStudyDate !== today) {
      progress.value.streak = 1
    }

    progress.value.lastStudyDate = today
    saveProgress()
  }

  /** เรียนคำศัพท์ใหม่ */
  function incrementWordsLearned() {
    progress.value.wordsLearned += 1
    addXP(5)
    checkAndUnlockLevels()
  }

  /** เรียนคำศัพท์ — เพิ่ม word ID */
  function learnWord(wordId: string) {
    if (!progress.value.learnedWords.includes(wordId)) {
      progress.value.learnedWords.push(wordId)
      progress.value.wordsLearned = progress.value.learnedWords.length
      addXP(5)
      checkAndUnlockLevels()
      saveProgress()
    }
  }

  /** ลบคำศัพท์ที่เรียนแล้ว */
  function unlearnWord(wordId: string) {
    const idx = progress.value.learnedWords.indexOf(wordId)
    if (idx !== -1) {
      progress.value.learnedWords.splice(idx, 1)
      progress.value.wordsLearned = progress.value.learnedWords.length
      saveProgress()
    }
  }

  // ====== SRS Functions ======

  /** ทบทวนคำศัพท์ — อัปเดต SRS data
   * quality: 0 = จำไม่ได้ (Again), 1 = จำได้เล็กน้อย (Good), 2 = จำได้ดี (Easy)
   */
  function reviewWord(wordId: string, quality: 0 | 1 | 2) {
    const today = getToday()
    const existing = progress.value.wordSRS[wordId]

    let easeFactor = existing?.easeFactor ?? 2.5
    let interval = existing?.interval ?? 1
    let repetitions = existing?.repetitions ?? 0

    if (quality === 0) {
      // จำไม่ได้ — รีเซ็ต
      repetitions = 0
      interval = 1
      easeFactor = Math.max(1.3, easeFactor - 0.2)
    } else if (quality === 1) {
      // จำได้เล็กน้อย
      repetitions += 1
      if (repetitions === 1) {
        interval = 1
      } else if (repetitions === 2) {
        interval = 3
      } else {
        interval = Math.round(interval * easeFactor)
      }
      easeFactor = Math.max(1.3, easeFactor + 0.05)
    } else {
      // จำได้ดี
      repetitions += 1
      if (repetitions === 1) {
        interval = 2
      } else if (repetitions === 2) {
        interval = 5
      } else {
        interval = Math.round(interval * easeFactor * 1.2)
      }
      easeFactor += 0.15
    }

    // คำนวณวันที่ทบทวนถัดไป
    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + interval)
    const nextReview = nextDate.toISOString().slice(0, 10)

    progress.value.wordSRS[wordId] = {
      easeFactor,
      interval,
      repetitions,
      nextReview,
      lastReview: today,
      totalReviews: (existing?.totalReviews ?? 0) + 1,
    }

    // เพิ่ม XP ตามคุณภาพ
    if (quality === 0) addXP(2)
    else if (quality === 1) addXP(5)
    else addXP(10)

    saveProgress()
  }

  /** ดึงคำศัพท์ที่ต้องทบทวน (เรียงตาม SRS priority) */
  function getWordsForReview(wordIds: string[]): string[] {
    const today = getToday()
    const srs = progress.value.wordSRS

    return [...wordIds].sort((a, b) => {
      const aData = srs[a]
      const bData = srs[b]

      // ไม่เคยทบทวน → มาก่อน
      if (!aData && !bData) return 0
      if (!aData) return -1
      if (!bData) return 1

      // ถึงเวลาทบทวนแล้ว → มาก่อน
      const aDue = aData.nextReview <= today
      const bDue = bData.nextReview <= today
      if (aDue && !bDue) return -1
      if (!aDue && bDue) return 1

      // จำไม่ได้บ่อย → มาก่อน
      const aScore = aData.repetitions * aData.easeFactor
      const bScore = bData.repetitions * bData.easeFactor
      return aScore - bScore
    })
  }

  /** ดูสถานะ SRS ของคำ */
  function getWordSRS(wordId: string): SRSData | null {
    return progress.value.wordSRS[wordId] ?? null
  }

  /** สถิติ SRS */
  const srsStats = computed(() => {
    const srs = progress.value.wordSRS
    const entries = Object.values(srs)
    const today = getToday()

    return {
      total: entries.length,
      mastered: entries.filter(e => e.repetitions >= 5).length,
      learning: entries.filter(e => e.repetitions >= 1 && e.repetitions < 5).length,
      new: progress.value.wordsLearned - entries.length,
      dueToday: entries.filter(e => e.nextReview <= today).length,
    }
  })

  /** ทำบทเรียนเสร็จ */
  function incrementLessonsCompleted() {
    progress.value.lessonsCompleted += 1
    addXP(20)
    checkAndUnlockLevels()
  }

  /** รีเซ็ตทั้งหมด */
  function resetAll() {
    progress.value = {
      currentLevel: 1,
      unlockedLevels: [1, 2, 3, 4, 5, 6],
      totalXP: 0,
      streak: 0,
      lastStudyDate: null,
      wordsLearned: 0,
      learnedWords: [],
      lessonsCompleted: 0,
      levelXP: {},
      wordSRS: {},
    }
    saveProgress()
  }

  return {
    progress,
    currentLevelXP,
    levelProgressPercent,
    unlockedCount,
    nextLockedLevel,
    srsStats,
    isLevelUnlocked,
    canUnlockLevel,
    getLevelInfo,
    setCurrentLevel,
    unlockLevel,
    checkAndUnlockLevels,
    addXP,
    checkStreak,
    incrementWordsLearned,
    learnWord,
    unlearnWord,
    reviewWord,
    getWordsForReview,
    getWordSRS,
    incrementLessonsCompleted,
    resetAll,
  }
})

// ====== Helpers ======
function getToday(): string {
  return new Date().toISOString().slice(0, 10)
}

function getYesterday(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw) as UserProgress
      // Migration: ensure new fields exist
      if (!data.unlockedLevels) data.unlockedLevels = [1]
      if (!data.levelXP) data.levelXP = {}
      if (!data.currentLevel) data.currentLevel = 1
      if (!data.learnedWords) data.learnedWords = []
      if (!data.wordSRS) data.wordSRS = {}
      return data
    }
  } catch {
    // ignore
  }    return {
      currentLevel: 1,
      unlockedLevels: [1, 2, 3, 4, 5, 6],
      totalXP: 0,
      streak: 0,
      lastStudyDate: null,
      wordsLearned: 0,
      learnedWords: [],
      lessonsCompleted: 0,
      levelXP: {},
      wordSRS: {},
    }
}

function saveProgress() {
  try {
    const store = useUserStore()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.progress))
  } catch {
    // ignore
  }
}
