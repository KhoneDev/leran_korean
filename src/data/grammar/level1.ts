import type { ProficiencyLevel } from '@/types'

export interface GrammarPoint {
  id: string
  level: ProficiencyLevel
  title: string
  titleKr: string
  meaning: string
  structure: string
  explanation: string
  examples: { kr: string; th: string; note?: string }[]
  tips: string[]
  practice: PracticeItem[]
}

export interface PracticeItem {
  id: string
  type: 'fill-blank' | 'multiple-choice' | 'reorder' | 'build-sentence'
  question: string
  answer: string
  options?: string[]
  hint?: string
  explanation: string
}

/**
 * Level 1 — ไวยากรณ์พื้นฐาน
 */
export const level1Grammar: GrammarPoint[] = [
  {
    id: 'g1_001',
    level: 1,
    title: '은/는 — หัวข้อประโยค',
    titleKr: '은/는 (주어)',
    meaning: 'ใช้ระบุหัวข้อหรือประธานของประโยค',
    structure: 'ประธาน + 은/는 + กรรม/ส่วนขยาย',
    explanation:
      '은 ใช้หลังพยัญชนะ ( 받침 )\n는 ใช้หลังสระ ( ไม่มี 받침 )\n\nเช่น:\n나는 = ฉัน (หลังสระ ㅏ)\n저는 = ฉัน (หลังสระ ㅓ)\n물은 = น้ำ (หลังพยัญชนะ ㄹ)',
    examples: [
      { kr: '저는 학생입니다.', th: 'ฉันเป็นนักเรียน', note: '저 + 는 (หลังสระ)' },
      { kr: '이것은 책이에요.', th: 'นี่คือหนังสือ', note: '이것 + 은 (หลังพยัญชนะ ㅅ)' },
      { kr: '한국어는 재미있어요.', th: 'ภาษาเกาหลีสนุก', note: '한국어 + 는 (หลังสระ)' },
    ],
    tips: [
      'จำง่ายๆ:  받침มี = 은, ไม่มี =  는',
      '은/не ต่างจาก 이/가 — ใช้ในประโยคบอกเล่าทั่วไป',
    ],
    practice: [
      { id: 'p1_001a', type: 'fill-blank', question: '저___ 학생이에요.', answer: '는', hint: 'หลังสระ', explanation: '저(สระ) + 는' },
      { id: 'p1_001b', type: 'fill-blank', question: '물___ 차가워요.', answer: '은', hint: 'หลังพยัญชนะ', explanation: '물( 받침 ㄹ) + 은' },
      { id: 'p1_001c', type: 'multiple-choice', question: '"나" ใช้ตัวไหน?', answer: '는', options: ['은', '는', '이', '가'], explanation: '나(สระ ㅏ) + 는' },
    ],
  },
  {
    id: 'g1_002',
    level: 1,
    title: '이/가 — ประธาน',
    titleKr: '이/가 (주어)',
    meaning: 'ใช้ระบุประธาน (เน้นตัวประธาน)',
    structure: 'ประธาน + 이/가 + กรรม/ส่วนขยาย',
    explanation:
      '이 ใช้หลังพยัญชนะ\n가 ใช้หลังสระ\n\nต่างจาก 은/는 ตรงที่ 이/가 เน้นว่า "ใคร/อะไร" ทำ ไม่ใช่แค่บอกเล่า',
    examples: [
      { kr: '비가 와요.', th: 'ฝนตก', note: 'เน้นว่า "ฝน" เป็นผู้ทำ' },
      { kr: '고양이가 있어요.', th: 'มีแมว', note: 'แมวมีอยู่จริง' },
      { kr: '꽃이 예뻐요.', th: 'ดอกไม้สวย', note: 'เน้นที่ดอกไม้' },
    ],
    tips: [
      'ใช้ 이/ก่า เมื่อแนะนำสิ่งใหม่หรือเน้นตัวประธาน',
      'ใช้ 은/는 เมื่อเปรียบเทียบหรือบอกเล่าทั่วไป',
    ],
    practice: [
      { id: 'p1_002a', type: 'fill-blank', question: '비___ 와요.', answer: '가', hint: 'หลังสระ', explanation: '비(สระ ㅣ) + 가' },
      { id: 'p1_002b', type: 'fill-blank', question: '꽃___ 예뻐요.', answer: '이', hint: 'หลังพยัญชนะ', explanation: '꽃( 받침 ㅊ) + 이' },
    ],
  },
  {
    id: 'g1_003',
    level: 1,
    title: '을/를 — กรรม',
    titleKr: '을/를 (목적어)',
    meaning: 'ใช้ระบุกรรม (คำที่ถูกกระทำ)',
    structure: 'ประธาน + 을/를 + กริยา',
    explanation:
      '을 ใช้หลังพยัญชนะ\n를 ใช้หลังสระ',
    examples: [
      { kr: '밥을 먹어요.', th: 'กินข้าว', note: '밥( 받침 ㅂ) + 을' },
      { kr: '책을 읽어요.', th: 'อ่านหนังสือ', note: '책( 받침 ㄱ) + 을' },
      { kr: '물을 마셔요.', th: 'ดื่มน้ำ', note: '물( 받침 ㄹ) + 을' },
      { kr: '영화를 봐요.', th: 'ดูหนัง', note: '영화(สระ ㅏ) + 를' },
    ],
    tips: [
      'ในประโยคบอกเล่าสบายๆ มักจะลบ 을/를 ออก เช่น "밥 먹어요"',
    ],
    practice: [
      { id: 'p1_003a', type: 'fill-blank', question: '밥___ 먹어요.', answer: '을', hint: 'หลังพยัญชนะ ㅂ', explanation: '밥( 받침 ㅂ) + 을' },
      { id: 'p1_003b', type: 'fill-blank', question: '영화___ 봐요.', answer: '를', hint: 'หลังสระ', explanation: '영화(สระ ㅏ) + 를' },
      { id: 'p1_003c', type: 'reorder', question: 'เรียงเป็นประโยค: 먹어요 / 을 / 저는 / 밡', answer: '저는 밥을 먹어요.', options: ['저는', '밥을', '먹어요.'], explanation: 'ประธาน + กรรม + กริยา' },
    ],
  },
  {
    id: 'g1_004',
    level: 1,
    title: '입니다 / 이에요/예요 — ประโยคบอกเล่า',
    titleKr: '입니다 / 이에요, 예요',
    meaning: 'เป็น... (ประโยคทางการ/ไม่ทางการ)',
    structure: 'คำนาม + 입니다 (ทางการ) / 이에요(พยัญชนะ) / 예요 (สระ)',
    explanation:
      '입니다 = ทางการ (formal)\n이에요 = ไม่ทางการ + หลังพยัญชนะ\n예요 = ไม่ทางการ + หลังสระ',
    examples: [
      { kr: '저는 선생님입니다.', th: 'ฉันเป็นครู (ทางการ)' },
      { kr: '이것은 사과예요.', th: 'นี่คือแอปเปิ้ล (หลังสระ)' },
      { kr: '저는 학생이에요.', th: 'ฉันเป็นนักเรียน (หลังพยัญชนะ)' },
    ],
    tips: [
      '입니다 ใช้ในที่ทำงาน การPresentations',
      '이에요/예요 ใช้ในชีวิตประจำวัน',
    ],
    practice: [
      { id: 'p1_004a', type: 'fill-blank', question: '저는 한국 사람___', answer: '이에요', hint: 'หลังพยัญชนะ + ไม่ทางการ', explanation: '사람( 받침 ㅁ) + 이에요' },
      { id: 'p1_004b', type: 'fill-blank', question: '이것은 뭐___?', answer: '예요', hint: 'หลังสระ + ไม่ทางการ', explanation: '것( 받침 ㅅ)...实际情况 это 보통 "이게 뭐예요?"' },
    ],
  },
]
