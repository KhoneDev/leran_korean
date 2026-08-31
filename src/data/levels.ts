import type { LevelConfig, ProficiencyLevel } from '@/types'

// ====== Level 1-6 Configurations (TOPIK-based in Lao) ======
export const levelConfigs: Record<ProficiencyLevel, LevelConfig> = {
  1: {
    level: 1,
    name: 'Beginner',
    nameKr: '초급 1',
    description: 'ເລີ່ມຕົ້ນຮຽນເກົາຫຼີ — ທັກທາຍ, ຕົວເລກ, ສັບພະນາມ, ປະໂຫຍກພື້ນຖານ',
    descriptionKr: '한국어 초급 — 인사, 숫자, 대명사, 기본 문장',
    icon: '🌱',
    color: '#52c41a',
    xpRequired: 0,
    vocabTarget: 100,
    grammarTopics: [
      '은/는 (ຫົວຂໍ້-ກຳ)',
      '이/가 (ປະທານ)',
      '을/를 (ກຳ)',
      '에 (ສະຖານທີ່/ເວລາ)',
      '에서 (ສະຖານທີ່ເຮັດກິດຈະກຳ)',
      '입니다 (ປະໂຫຍກສຸພາບ)',
    ],
    skills: [
      'ອ່ານ-ຂຽນຕົວອັກສອນເກົາຫຼີໄດ້',
      'ທັກທາຍ ແລະ ແນະນຳຕົວເອງ',
      'ນັບເລກ 1-100',
      'ບອກສະຖານທີ່ ແລະ ເວລາ',
      'ປະໂຫຍກພື້ນຖານ 20+ ປະໂຫຍກ',
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
    description: 'ຂະຫຍາຍຄຳສັບ — ກິລິຍາ, ຄຸນສັບ, ປະໂຫຍກຄຳຖາມ, ກິລິຍາ past tense',
    descriptionKr: '어휘 확장 — 동사, 형용사, 의문문, 과거형',
    icon: '🌿',
    color: '#13c2c2',
    xpRequired: 150,
    vocabTarget: 250,
    grammarTopics: [
      '습니다/ㅂ니다 (ທາງການ Formal)',
      '아요/어요 (ທົ່ວໄປ Casual)',
      '했어요 (ອະດີດ Past tense)',
      '안 (ປະຕິເສດ)',
      '못 (ບໍ່ສາມາດ)',
      '~고 싶다 (ຢາກ/ຕ້ອງການ)',
      '~을/를 것이다 (ອະນາຄົດ Future)',
    ],
    skills: [
      'ສົນທະນາເລື່ອງຊີວິດປະຈຳວັນ',
      'ກິລິຍາ 3 ກາລະ (ປະຈຸບັນ/ອະດີດ/ອະນາຄົດ)',
      'ປະໂຫຍກຄຳຖາມ-ຄຳຕອບ',
      'ສັ່ງອາຫານ ແລະ ຊື້ເຄື່ອງ',
      'ບອກເວລາ ແລະ ວັນທີ',
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
    description: 'ໄວຍາກອນຂັ້ນກາງ — ການປຽບທຽບ, ການເຊື່ອມປະໂຫຍກ, ຄຳສຸພາບ Honorifics',
    descriptionKr: '중급 문법 — 비교, 접속, 높임법',
    icon: '🌳',
    color: '#faad14',
    xpRequired: 400,
    vocabTarget: 500,
    grammarTopics: [
      '~보다 (ປຽບທຽບ)',
      '~아/어서 (ເຫດຜົນ-ຜົນຮັບ)',
      '~지만 (ແຕ່)',
      '~ㄹ까요? (ສະເໜີ/ຖາມ)',
      '존댓말/Honorifics ຂັ້ນສູງ',
      '~는 것 (ເຮັດໃຫ້ເປັນຄຳນາມ)',
      '~을 때 (ຕອນທີ່/ເມື່ອ...)',
    ],
    skills: [
      'ຂຽນວັກຕອນສັ້ນໆ ໄດ້',
      'ອ່ານບົດຄວາມງ່າຍໆ',
      'ສົນທະນາເລື່ອງທົ່ວໄປ',
      'ເຂົ້າໃຈ honorifics ລະດັບກາງ',
      'ສະແດງຄວາມຄິດເຫັນ',
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
    description: 'ໄວຍາກອນຊັບຊ້ອນ — ປະໂຫຍກເງື່ອນໄຂ, ຂໍ້ສະເໜີ, ການຮ້ອງຂໍ',
    descriptionKr: '중급 문법 — 조건문, 제안, 불평',
    icon: '🌲',
    color: '#f5222d',
    xpRequired: 800,
    vocabTarget: 900,
    grammarTopics: [
      '~면 (ຖ້າ/ຖ້າຫາກ)',
      '~아/어 보세요 (ລອງເຮັດ)',
      '~ㄹ 수 있다/없다 (ສາມາດ/ບໍ່ສາມາດ)',
      '~아/어 달라다 (ຮ້ອງຂໍ/ຊ່ວຍ)',
      '~지/죠 (ຢືນຢັນ)',
      '~는 중이다 (ກຳລັງເຮັດ)',
      'Passive/Causative verbs',
    ],
    skills: [
      'ຂຽນ email ສັ້ນໆ ໄດ້',
      'ເຂົ້າໃຈຂ່າວງ່າຍໆ',
      'ອະທິບາຍສະຖານະການຊັບຊ້ອນ',
      'ໃຊ້ໄວຍາກອນເງື່ອນໄຂ',
      'ເຂົ້າໃຈສຳນວນພື້ນຖານ',
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
    description: 'ພາສາເກົາຫຼີຂັ້ນສູງ — ອ່ານຂ່າວ, ຂຽນບົດຄວາມ, ໃຊ້ສຳນວນ ແລະ idioms',
    descriptionKr: '고급 한국어 — 뉴스 읽기, 에세이 작성, 관용표현',
    icon: '🏔️',
    color: '#722ed1',
    xpRequired: 1500,
    vocabTarget: 1500,
    grammarTopics: [
      '문어체 (ພາສາຂຽນ Written style)',
      '설명조 (ນ້ຳສຽງອະທິບາຍ Explanatory)',
      '~게 되다 (ກາຍເປັນ/ເກີດຜົນ)',
      '~지 않다/못하다 (ປະຕິເສດຂັ້ນສູງ)',
      'Connectors: 그리고, 그런데, 하지만',
      'Indirect speech (ການເລົ່າຕໍ່ 간접 화법)',
    ],
    skills: [
      'ອ່ານຂ່າວເກົາຫຼີໄດ້',
      'ຂຽນ essay 200+ ຄຳ',
      'ເຂົ້າໃຈບົດສົນທະນາໃນຊີຣີເກົາຫຼີ',
      'ໃຊ້ພາສາທາງການ/Formal',
      'ເຂົ້າໃຈວັດທະນະທຳຜ່ານພາສາ',
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
    description: 'ລະດັບໃກ້ຄຽງເຈົ້າຂອງພາສາ — ອ່ານນະວະນິຍາຍ, ສົນທະນາເລິກເຊິ່ງ, ພາສາທາງການ ແລະ ອາລົມ',
    descriptionKr: '원어민 수준 — 소설 읽기, 심화 대화, 격식/감정 표현',
    icon: '👑',
    color: '#eb2f96',
    xpRequired: 2500,
    vocabTarget: 2500,
    grammarTopics: [
      '고전문법 (ໄວຍາກອນບູຮານ Classical)',
      '사투리/지역방언 (ສຳນຽງທ້ອງຖິ່ນ Dialects)',
      '비유/은유 (ອຸປະມາ Metaphor)',
      '시조/문학어 (ພາສາວັນນະຄະດີ Literary)',
      'Business Korean (ທຸລະກິດ)',
      'Debate/Argumentation (ໂຕ້ວາທີ)',
    ],
    skills: [
      'ອ່ານນະວະນິຍາຍເກົາຫຼີໄດ້',
      'ຂຽນລາຍງານ/Formal essay',
      'ສົນທະນາທຸລະກິດຂັ້ນສູງ',
      'ເຂົ້າໃຈອາລົມລະອຽດອ່ອນ',
      'ໃຊ້ພາສາໄດ້ເໝາະສົມກັບທຸກສະຖານະການ',
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
