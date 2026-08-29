import type { Word, ProficiencyLevel } from '@/types'
import { level1Words } from './level1'
import { level2Words } from './level2'
import { level3Words } from './level3'
import { level4Words } from './level4'
import { level5Words } from './level5'
import { level6Words } from './level6'

// ====== All vocabulary by level ======
export const vocabularyByLevel: Record<ProficiencyLevel, Word[]> = {
  1: level1Words,
  2: level2Words,
  3: level3Words,
  4: level4Words,
  5: level5Words,
  6: level6Words,
}

// ====== All vocabulary (combined) ======
export const allVocabulary: Word[] = [
  ...level1Words,
  ...level2Words,
  ...level3Words,
  ...level4Words,
  ...level5Words,
  ...level6Words,
]

// ====== Helper Functions ======

/** ดึงคำศัพท์ตาม level */
export function getWordsByLevel(level: ProficiencyLevel): Word[] {
  return vocabularyByLevel[level] ?? []
}

/** ดึงคำศัพท์ตาม category */
export function getWordsByCategory(category: string): Word[] {
  return allVocabulary.filter((w) => w.category === category)
}

/** ดึงคำศัพท์ตาม level + category */
export function getWordsByLevelAndCategory(level: ProficiencyLevel, category: string): Word[] {
  return getWordsByLevel(level).filter((w) => w.category === category)
}

/** ดึงคำจาก id */
export function getWordById(id: string): Word | undefined {
  return allVocabulary.find((w) => w.id === id)
}

/** ดึงคำหลาย id */
export function getWordsByIds(ids: string[]): Word[] {
  return ids.map((id) => getWordById(id)).filter((w): w is Word => w !== undefined)
}

/** ดึง categories ที่มีใน level */
export function getCategoriesByLevel(level: ProficiencyLevel): string[] {
  const words = getWordsByLevel(level)
  return [...new Set(words.map((w) => w.category))]
}

/** ดึงจำนวนคำศัพท์ทั้งหมดของแต่ละ level */
export function getWordCountByLevel(level: ProficiencyLevel): number {
  return getWordsByLevel(level).length
}

/** ดึงจำนวนคำศัพท์รวมทุก level */
export function getTotalWordCount(): number {
  return allVocabulary.length
}

/** สุ่มคำศัพท์จาก level */
export function getRandomWords(level: ProficiencyLevel, count: number): Word[] {
  const words = getWordsByLevel(level)
  const shuffled = [...words].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/** สุ่มคำศัพท์จากทุก level */
export function getRandomWordsFromAll(count: number): Word[] {
  const shuffled = [...allVocabulary].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// ====== Exports for individual levels ======
export { level1Words, level2Words, level3Words, level4Words, level5Words, level6Words }
