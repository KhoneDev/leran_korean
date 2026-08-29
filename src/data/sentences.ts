import type { ProficiencyLevel } from '@/types'

export interface SentenceExercise {
  id: string
  level: ProficiencyLevel
  type: 'build' | 'order' | 'translate'
  korean: string
  thai: string
  words: string[]          // คำที่ต้องเรียง/สร้าง
  answer: string           // ประโยคถูกต้อง
  hint?: string
  explanation?: string
}

/**
 * ชุดประโยคสำหรับฝึกสร้าง/เรียงประโยค
 */
export const sentenceExercises: SentenceExercise[] = [
  // ====== Level 1 ======
  { id: 's1_001', level: 1, type: 'order', korean: '저는 학생입니다.', thai: 'ฉันเป็นนักเรียน', words: ['저는', '학생입니다.'], answer: '저는 학생입니다.', explanation: 'ประธาน + คำนาม + 입니다' },
  { id: 's1_002', level: 1, type: 'order', korean: '이것은 책이에요.', thai: 'นี่คือหนังสือ', words: ['이것은', '책이에요.'], answer: '이것은 책이에요.', explanation: 'ประธาน + คำนาม + 이에요' },
  { id: 's1_003', level: 1, type: 'build', korean: '밥을 먹어요.', thai: 'กินข้าว', words: ['밥을', '먹어요.'], answer: '밥을 먹어요.', hint: 'กรรม + กริยา', explanation: '밥(กรรม) + 을 + 먹어요(กริยา)' },
  { id: 's1_004', level: 1, type: 'order', korean: '물이 차가워요.', thai: 'น้ำเย็น', words: ['물이', '차가워요.'], answer: '물이 차가워요.', explanation: 'ประธาน(น้ำ) + คุณศัพท์(เย็น)' },
  { id: 's1_005', level: 1, type: 'build', korean: '한국어를 공부해요.', thai: 'เรียนภาษาเกาหลี', words: ['한국어를', '공부해요.'], answer: '한국어를 공부해요.', hint: 'กรรม(ภาษาเกาหลี) + กริยา(เรียน)' },
  { id: 's1_006', level: 1, type: 'order', korean: '안녕하세요.', thai: 'สวัสดี', words: ['안녕하세요.'], answer: '안녕하세요.', explanation: 'คำทักทาย' },
  { id: 's1_007', level: 1, type: 'build', korean: '감사합니다.', thai: 'ขอบคุณ', words: ['감사합니다.'], answer: '감사합니다.' },

  // ====== Level 2 ======
  { id: 's2_001', level: 2, type: 'order', korean: '학교에 가요.', thai: 'ไปโรงเรียน', words: ['학교에', '가요.'], answer: '학교에 가요.', explanation: 'สถานที่ + 에 + กริยา' },
  { id: 's2_002', level: 2, type: 'build', korean: '카페에서 커피를 마셔요.', thai: 'ดื่มกาแฟที่ร้าน', words: ['카페에서', '커피를', '마셔요.'], answer: '카페에서 커피를 마셔요.', hint: 'สถานที่ + กรรม + กริยา' },
  { id: 's2_003', level: 2, type: 'order', korean: '집에서 쉬어요.', thai: 'พักผ่อนที่บ้าน', words: ['집에서', '쉬어요.'], answer: '집에서 쉬어요.' },
  { id: 's2_004', level: 2, type: 'build', korean: '한국어를 배우고 싶어요.', thai: 'อยากเรียนภาษาเกาหลี', words: ['한국어를', '배우고', '싶어요.'], answer: '한국어를 배우고 싶어요.', hint: 'กรรม + กริยา + 고 싶다', explanation: '배우다 → 배우고 싶다 = อยากเรียน' },
  { id: 's2_005', level: 2, type: 'order', korean: '내일 시간이 있어요.', thai: 'พรุ่งนี้มีเวลา', words: ['내일', '시간이', '있어요.'], answer: '내일 시간이 있어요.', explanation: 'เวลา + ประธาน + กริยา' },
  { id: 's2_006', level: 2, type: 'build', korean: '이 음식이 맛있어요.', thai: 'อาหารนี้อร่อย', words: ['이', '음식이', '맛있어요.'], answer: '이 음식이 맛있어요.', hint: 'สรรพนาม + ประธาน + คุณศัพท์' },

  // ====== Level 3 ======
  { id: 's3_001', level: 3, type: 'order', korean: '서울은 부산보다 커요.', thai: 'โซลใหญ่กว่าปูซาน', words: ['서울은', '부산보다', '커요.'], answer: '서울은 부산보다 커요.', explanation: 'A + 은/는 + B보다 + คุณศัพท์' },
  { id: 's3_002', level: 3, type: 'build', korean: '비가 와서 집에 있었어요.', thai: 'ฝนตกจึงอยู่บ้าน', words: ['비가', '와서', '집에', '있었어요.'], answer: '비가 와서 집에 있었어요.', hint: 'เหตุผล + 아/어서 + ผลลัพธ์' },
  { id: 's3_003', level: 3, type: 'order', korean: '비싸지만 좋아요.', thai: 'แพงแต่ดี', words: ['비싸지만', '좋아요.'], answer: '비싸지만 좋아요.', explanation: 'กริยา + 지만 + คุณศัพท์' },
  { id: 's3_004', level: 3, type: 'build', korean: '같이 갈까요?', thai: 'ไปด้วยกันไหม?', words: ['같이', '갈까요?'], answer: '같이 갈까요?', hint: 'ด้วยกัน + ㄹ까요' },
  { id: 's3_005', level: 3, type: 'order', korean: '시간이 없어서 바빠요.', thai: 'ไม่มีเวลาจึงยุ่ง', words: ['시간이', '없어서', '바빠요.'], answer: '시간이 없어서 바빠요.', explanation: 'เหตุผล(ไม่มีเวลา) + ผลลัพธ์(ยุ่ง)' },
  { id: 's3_006', level: 3, type: 'build', korean: '한국 음식이 중국 음식보다 매워요.', thai: 'อาหารเกาหลีเผ็ดกว่าอาหารจีน', words: ['한국', '음식이', '중국', '음식보다', '매워요.'], answer: '한국 음식이 중국 음식보다 매워요.' },

  // ====== Level 4 ======
  { id: 's4_001', level: 4, type: 'order', korean: '비가 오면 집에 있을게요.', thai: 'ถ้าฝนตก จะอยู่บ้าน', words: ['비가', '오면', '집에', '있을게요.'], answer: '비가 오면 집에 있을게요.', explanation: 'เหตุผล + 면 + ผลลัพธ์' },
  { id: 's4_002', level: 4, type: 'build', korean: '한국어를 할 수 있어요.', thai: 'พูดภาษาเกาหลีได้', words: ['한국어를', '할', '수', '있어요.'], answer: '한국어를 할 수 있어요.', hint: 'กรรม + ㄹ 수 있다' },
  { id: 's4_003', level: 4, type: 'order', korean: '이 음식을 드셔 보세요.', thai: 'ลองชิมอาหารนี้ดูสิ', words: ['이', '음식을', '드셔', '보세요.'], answer: '이 음식을 드셔 보세요.', explanation: 'คำนาม + 을/를 + กริยา + 아/어 보세요' },
  { id: 's4_004', level: 4, type: 'build', korean: '시간이 있으면 만날게요.', thai: 'ถ้ามีเวลา จะเจอกัน', words: ['시간이', '있으면', '만날게요.'], answer: '시간이 있으면 만날게요.' },
  { id: 's4_005', level: 4, type: 'order', korean: '.Mailga 안 와요.', thai: 'เมล์ไม่มา', words: ['Mailga', '안', '와요.'], answer: 'Mailga 안 와요.', explanation: 'ประธาน + 안 + กริยา' },

  // ====== Level 5 ======
  { id: 's5_001', level: 5, type: 'order', korean: '한국에 오게 되었어요.', thai: 'กลายเป็นว่าได้มาเกาหลี', words: ['한국에', '오게', '되었어요.'], answer: '한국에 오게 되었어요.', explanation: 'สถานที่ + 게 되다' },
  { id: 's5_002', level: 5, type: 'build', korean: '비가 온다고 해요.', thai: 'เขาบอกว่าฝนตก', words: ['비가', '온다고', '해요.'], answer: '비가 온다고 해요.', hint: '간접화법' },
  { id: 's5_003', level: 5, type: 'order', korean: '검토해 보겠습니다.', thai: 'จะตรวจสอบดู', words: ['검토해', '보겠습니다.'], answer: '검토해 보겠습니다.' },
  { id: 's5_004', level: 5, type: 'build', korean: '추가 설명이 필요합니다.', thai: 'ต้องการคำอธิบายเพิ่ม', words: ['추가', '설명이', '필요합니다.'], answer: '추가 설명이 필요합니다.' },

  // ====== Level 6 ======
  { id: 's6_001', level: 6, type: 'order', korean: '눈처럼 하얗다.', thai: 'ขาวเหมือนหิมะ', words: ['눈처럼', '하얗다.'], answer: '눈처럼 하얗다.', explanation: 'เปรียบเทียบ + คุณศัพท์' },
  { id: 's6_002', level: 6, type: 'build', korean: '깊이 생각해 볼 문제네요.', thai: 'เป็นปัญหาที่ต้องคิดลึก', words: ['깊이', '생각해', '볼', '문제네요.'], answer: '깊이 생각해 볼 문제네요.' },
  { id: 's6_003', level: 6, type: 'order', korean: '합의점을 찾아야 할 것 같아요.', thai: 'น่าจะต้องหาจุดร่วม', words: ['합의점을', '찾아야', '할', '것', '같아요.'], answer: '합의점을 찾아야 할 것 같아요.' },
  { id: 's6_004', level: 6, type: 'build', korean: '존경합니다.', thai: 'นับถือ', words: ['존경합니다.'], answer: '존경합니다.', explanation: '합쇼체 (ภาษาทางการ)' },
]

// ====== Helpers ======
export function getSentencesByLevel(level: ProficiencyLevel): SentenceExercise[] {
  return sentenceExercises.filter((s) => s.level === level)
}

export function getBuildExercises(level: ProficiencyLevel): SentenceExercise[] {
  return getSentencesByLevel(level).filter((s) => s.type === 'build')
}

export function getOrderExercises(level: ProficiencyLevel): SentenceExercise[] {
  return getSentencesByLevel(level).filter((s) => s.type === 'order')
}

export function getRandomSentence(level: ProficiencyLevel): SentenceExercise | undefined {
  const sentences = getSentencesByLevel(level)
  return sentences[Math.floor(Math.random() * sentences.length)]
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]!
    shuffled[j] = temp!
  }
  return shuffled
}
