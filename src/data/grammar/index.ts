import type { ProficiencyLevel } from '@/types'
import { level1Grammar } from './level1'
import { level2Grammar } from './level2'
import { level3Grammar, level4Grammar, level5Grammar, level6Grammar } from './level3-6'
import type { GrammarPoint, PracticeItem } from './level1'

// ====== Grammar by level ======
export const grammarByLevel: Record<ProficiencyLevel, GrammarPoint[]> = {
  1: level1Grammar,
  2: level2Grammar,
  3: level3Grammar,
  4: level4Grammar,
  5: level5Grammar,
  6: level6Grammar,
}

// ====== All grammar ======
export const allGrammar: GrammarPoint[] = [
  ...level1Grammar,
  ...level2Grammar,
  ...level3Grammar,
  ...level4Grammar,
  ...level5Grammar,
  ...level6Grammar,
]

// ====== Helpers ======

/** ดึงไวยากรณ์ตาม level */
export function getGrammarByLevel(level: ProficiencyLevel): GrammarPoint[] {
  return grammarByLevel[level] ?? []
}

/** ดึงไวยากรณ์จาก id */
export function getGrammarById(id: string): GrammarPoint | undefined {
  return allGrammar.find((g) => g.id === id)
}

/** ดึงจำนวนหัวข้อไวยากรณ์ของแต่ละ level */
export function getGrammarCountByLevel(level: ProficiencyLevel): number {
  return getGrammarByLevel(level).length
}

/** รวม practice ทุกหัวข้อของ level */
export function getAllPracticeByLevel(level: ProficiencyLevel): PracticeItem[] {
  return getGrammarByLevel(level).flatMap((g) => g.practice)
}

/** สุ่ม practice จาก level */
export function getRandomPractice(level: ProficiencyLevel, count: number): PracticeItem[] {
  const all = getAllPracticeByLevel(level)
  const shuffled = [...all].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Re-export types
export type { GrammarPoint, PracticeItem }
export { level1Grammar, level2Grammar, level3Grammar, level4Grammar, level5Grammar, level6Grammar }
