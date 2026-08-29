// ====== Level System (TOPIK-based 1-6) ======
export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface LevelConfig {
  level: ProficiencyLevel
  name: string
  nameKr: string
  description: string
  descriptionKr: string
  icon: string
  color: string
  xpRequired: number
  vocabTarget: number
  grammarTopics: string[]
  skills: string[]
  unlockRequirement: {
    minXP: number
    minWordsLearned: number
    minLessonsCompleted: number
  }
}

// ====== Hangul ======
export type HangulType = 'consonant' | 'vowel' | 'batchim'
export type ConsonantSubtype = 'single' | 'double'
export type VowelSubtype = 'basic' | 'compound'

export interface HangulChar {
  char: string
  name: string
  romanization: string
  sound: string
  type: HangulType
  consonantSubtype?: ConsonantSubtype
  vowelSubtype?: VowelSubtype
  strokeOrder?: number
  tip?: string
}

export interface HangulCombination {
  consonant: string
  vowel: string
  result: string
  reading: string
}

// ====== Vocabulary (Teaching-focused) ======
export interface WordExample {
  korean: string        // ประโยคตัวอย่าง
  romanization: string  // romanization
  meaning: string       // ความหมายไทย
  context?: string      // บริบทการใช้ เช่น 'ทางการ', 'ไม่เป็นทางการ', 'กับเพื่อน'
}

export interface Word {
  id: string
  korean: string
  romanization: string
  meaning: string
  // ===== Teaching fields =====
  examples?: WordExample[]           // ตัวอย่างประโยค (1-3 ประโยค)
  usage?: string                    // วิธีใช้ / หมายเหตุ (เช่น "ใช้กับผู้ใหญ่ต้องใส่ 요 ท้ายประโยค")
  grammarPattern?: string           // รูปแบบไวยากรณ์ (เช่น "名词 + 은/는 + 명사")
  relatedWords?: string[]           // คำที่เกี่ยวข้อง (id ของคำอื่น)
  tags?: string[]                   // เช่น ['formal', 'informal', 'daily']
  // ===== Legacy =====
  category: string
  difficulty: number
}

export interface Lesson {
  id: string
  title: string
  titleKr: string
  module: 'hangul' | 'vocabulary' | 'grammar' | 'reading'
  level: ProficiencyLevel
  order: number
  wordIds?: string[]
  content?: string
}

export interface QuizQuestion {
  id: string
  lessonId: string
  type: 'multiple-choice' | 'fill-blank' | 'match-pair'
  question: string
  options?: string[]
  answer: string
}

// ====== Sentence Quiz (ทดสอบจากประโยค) ======
export type SentenceQuizType = 'sentence-to-meaning' | 'meaning-to-sentence' | 'fill-blank' | 'word-in-context'

export interface SentenceQuizQuestion {
  id: string
  type: SentenceQuizType
  level: ProficiencyLevel
  // ประโยคเกาหลี
  koreanSentence: string
  romanization: string
  thaiMeaning: string
  // สำหรับ fill-blank
  blankWord?: string           // คำที่ถูกซ่อน
  blankSentence?: string       // ประโยคที่มีช่องว่าง (เช่น "___이/가 맛있어요")
  // สำหรับ word-in-context
  highlightWord?: string       // คำที่ต้องการถาม
  // ตัวเลือก
  options: string[]            // ตัวเลือก 4 ข้อ
  answer: string               // คำตอบที่ถูก
  // คำอธิบาย
  explanation?: string         // คำอธิบายหลังตอบ
  relatedWordId?: string       // id ของคำศัพท์ที่เกี่ยวข้อง
}

export interface QuizResult {
  lessonId: string
  score: number
  total: number
  correct: number
  date: string
  level: ProficiencyLevel
}

// ====== User Progress ======
export interface UserProgress {
  currentLevel: ProficiencyLevel
  unlockedLevels: ProficiencyLevel[]
  completedLessons: string[]
  learnedWords: string[]
  wordScores: Record<string, number>
  completedHangul: string[]
  streak: number
  totalXP: number
  levelXP: Record<ProficiencyLevel, number>
  lastStudyDate: string
  quizHistory: QuizResult[]
}
