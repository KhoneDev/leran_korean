import type { LevelConfig, ProficiencyLevel } from '@/types'

// ====== Level 1-6 Configurations (TOPIK-based) ======
export const levelConfigs: Record<ProficiencyLevel, LevelConfig> = {
  1: {
    level: 1,
    name: 'Beginner',
    nameKr: '초급 1',
    description: 'เริ่มต้นเรียนเกาหลี — ทักทาย ตัวเลข สรรพนาม ประโยคพื้นฐาน',
    descriptionKr: '한국어 초급 — 인사, 숫자, 대명사, 기본 문장',
    icon: '🌱',
    color: '#52c41a',
    xpRequired: 0,
    vocabTarget: 100,
    grammarTopics: [
      '은/는 (หัวข้อ-กรรม)',
      '이/가 (ประธาน)',
      '을/를 (กรรม)',
      '에 (สถานที่/เวลา)',
      '에서 (สถานที่ทำกิจกรรม)',
      '입니다 (ประโยค巾말)',
    ],
    skills: [
      'อ่าน-เขียนตัวอักษรเกาหลีได้',
      'ทักทายและแนะนำตัว',
      'นับเลข 1-100',
      'บอกสถานที่และเวลา',
      'ประโยคพื้นฐาน 20+ ประโยค',
    ],
    unlockRequirement: {
      minXP: 0,
      minWordsLearned: 0,
      minLessonsCompleted: 0,
    },
  },
  2: {
    level: 2,
    name: 'Elementary',
    nameKr: '초급 2',
    description: 'ขยายคำศัพท์ — กริยา คุณศัพท์ ประโยคคำถาม กริยา past tense',
    descriptionKr: '어휘 확장 — 동사, 형용사, 의문문, 과거형',
    icon: '🌿',
    color: '#13c2c2',
    xpRequired: 150,
    vocabTarget: 250,
    grammarTopics: [
      '습니다/ㅂ니다 (Formal)',
      '아요/어요 (Casual)',
      '했어요 (Past tense)',
      '안 (否定)',
      '못 (Cannot)',
      'через ~고 싶다 (Want to)',
      '~을/를 것이다 (Future)',
    ],
    skills: [
      'พูดคุยเรื่อง日常生活',
      'กริยา 3 กาล (ปัจจุบัน/อดีต/อนาคต)',
      'ประโยคคำถาม-คำตอบ',
      'สั่งอาหารและช็อปปิ้ง',
      'บอกเวลาและวันที่',
    ],
    unlockRequirement: {
      minXP: 150,
      minWordsLearned: 50,
      minLessonsCompleted: 10,
    },
  },
  3: {
    level: 3,
    name: 'Intermediate',
    nameKr: '중급 1',
    description: 'ไวยากรณ์ขั้นกลาง — การเปรียบเทียบ การเชื่อมประโยค Honorifics',
    descriptionKr: '중급 문법 — 비교, 접속, 높임법',
    icon: '🌳',
    color: '#faad14',
    xpRequired: 400,
    vocabTarget: 500,
    grammarTopics: [
      '~보다 (เปรียบเทียบ)',
      '~아/어서 (เหตุผล-ผลลัพธ์)',
      '~지만 (แต่)',
      '~ㄹ까요? (เสนอ/ถาม)',
      '존댓말/Honorifics ขั้นสูง',
      '~는 것 (ทำให้เป็นคำนาม)',
      '~을 때 (เมื่อ...)',
    ],
    skills: [
      'เขียนย่อหน้าสั้นๆ ได้',
      'อ่านบทความง่ายๆ',
      'พูดคุยเรื่องทั่วไป',
      'เข้าใจ honorifics ระดับกลาง',
      'Express opinions',
    ],
    unlockRequirement: {
      minXP: 400,
      minWordsLearned: 150,
      minLessonsCompleted: 30,
    },
  },
  4: {
    level: 4,
    name: 'Upper Intermediate',
    nameKr: '중급 2',
    description: 'ไวยากรณ์ซับซ้อน — ประโยคเงื่อนไข ข้อเสนอ ข้อร้องเรียน',
    descriptionKr: '중급 문법 — 조건문, 제안, 불평',
    icon: '🌲',
    color: '#f5222d',
    xpRequired: 800,
    vocabTarget: 900,
    grammarTopics: [
      '~면 (ถ้า)',
      '~아/어 보세요 (ลองทำ)',
      '~ㄹ 수 있다/없다 (สามารถ)',
      '~아/어 달라다 (ร้องขอ)',
      '~지/죠 (ยืนยัน)',
      '~는 중이다 (กำลังทำ)',
      'Passive/Causative verbs',
    ],
    skills: [
      'เขียน email สั้นๆ ได้',
      'เข้าใจข่าวง่ายๆ',
      'อธิบายสถานการณ์ซับซ้อน',
      'ใช้ไวยากรณ์เงื่อนไข',
      'เข้าใจสำนวนพื้นฐาน',
    ],
    unlockRequirement: {
      minXP: 800,
      minWordsLearned: 350,
      minLessonsCompleted: 60,
    },
  },
  5: {
    level: 5,
    name: 'Advanced',
    nameKr: '고급 1',
    description: 'ภาษาเกาหลีขั้นสูง — อ่านข่าว เขียน essay ใช้สำนวนและ idioms',
    descriptionKr: '고급 한국어 — 뉴스 읽기, 에세이 작성, 관용표현',
    icon: '🏔️',
    color: '#722ed1',
    xpRequired: 1500,
    vocabTarget: 1500,
    grammarTopics: [
      '문어체 (Written style)',
      '설명조 (Explanatory tone)',
      '~게 되다 (Resultative)',
      '~지 않다/못하다 (Negation advanced)',
      'Connectors: 그리고, 그런데, 하지만',
      'Indirect speech (간접 화법)',
    ],
    skills: [
      'อ่านข่าวเกาหลีได้',
      'เขียน essay 200+ คำ',
      'เข้าใจบทสนทนาในดราม่า',
      'ใช้ภาษาเขียน/Formal',
      'เข้าใจวัฒนธรรมผ่านภาษา',
    ],
    unlockRequirement: {
      minXP: 1500,
      minWordsLearned: 600,
      minLessonsCompleted: 100,
    },
  },
  6: {
    level: 6,
    name: 'Proficient',
    nameKr: '고급 2',
    description: 'ระดับใกล้-native — อ่านนิยาย สนทนาลึก ใช้ภาษาทางการและอารมณ์',
    descriptionKr: '원어민 수준 — 소설 읽기, 심화 대화, 격식/감정 표현',
    icon: '👑',
    color: '#eb2f96',
    xpRequired: 2500,
    vocabTarget: 2500,
    grammarTopics: [
      '고전문법 (Classical forms)',
      '사투리/지역방언 (Dialects)',
      '비유/은유 (Metaphor)',
      '시조/문학어 (Literary language)',
      'Business Korean',
      'Debate/Argumentation',
    ],
    skills: [
      'อ่านนิยายเกาหลีได้',
      'เขียนรายงาน/Formal essay',
      'สนทนาธุรกิจ',
      'เข้าใจอารมณ์ละเอียด',
      'ใช้ภาษาได้เหมาะสมทุกสถานการณ์',
    ],
    unlockRequirement: {
      minXP: 2500,
      minWordsLearned: 1200,
      minLessonsCompleted: 180,
    },
  },
}

// ====== Helper Functions ======
export function getLevelConfig(level: ProficiencyLevel): LevelConfig {
  return levelConfigs[level]
}

export function getNextLevel(currentLevel: ProficiencyLevel): LevelConfig | null {
  const next = (currentLevel + 1) as ProficiencyLevel
  return levelConfigs[next] ?? null
}

export function checkLevelUnlocked(
  level: ProficiencyLevel,
  totalXP: number,
  wordsLearned: number,
  lessonsCompleted: number,
): boolean {
  const config = levelConfigs[level]
  return (
    totalXP >= config.unlockRequirement.minXP &&
    wordsLearned >= config.unlockRequirement.minWordsLearned &&
    lessonsCompleted >= config.unlockRequirement.minLessonsCompleted
  )
}

export function getLevelProgress(
  level: ProficiencyLevel,
  totalXP: number,
  wordsLearned: number,
  lessonsCompleted: number,
): {
  xp: number
  words: number
  lessons: number
  overall: number
} {
  const config = levelConfigs[level]
  const nextConfig = getNextLevel(level)

  if (!nextConfig) {
    // Max level
    return { xp: 100, words: 100, lessons: 100, overall: 100 }
  }

  const xpProgress = Math.min(
    100,
    Math.round(
      ((totalXP - config.unlockRequirement.minXP) /
        (nextConfig.unlockRequirement.minXP - config.unlockRequirement.minXP)) *
        100,
    ),
  )

  const wordsProgress = Math.min(
    100,
    Math.round(
      ((wordsLearned - config.unlockRequirement.minWordsLearned) /
        (nextConfig.unlockRequirement.minWordsLearned - config.unlockRequirement.minWordsLearned)) *
        100,
    ),
  )

  const lessonsProgress = Math.min(
    100,
    Math.round(
      ((lessonsCompleted - config.unlockRequirement.minLessonsCompleted) /
        (nextConfig.unlockRequirement.minLessonsCompleted - config.unlockRequirement.minLessonsCompleted)) *
        100,
    ),
  )

  const overall = Math.round((xpProgress + wordsProgress + lessonsProgress) / 3)

  return { xp: xpProgress, words: wordsProgress, lessons: lessonsProgress, overall }
}

// ====== All levels as array ======
export const allLevels: LevelConfig[] = Object.values(levelConfigs)

export const levelOrder: ProficiencyLevel[] = [1, 2, 3, 4, 5, 6]
