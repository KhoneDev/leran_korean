import type { ProficiencyLevel } from '@/types'
import type { GrammarPoint } from './level1'

/**
 * Level 3 — ไวยากรณ์ระดับ Intermediate
 */
export const level3Grammar: GrammarPoint[] = [
  {
    id: 'g3_001', level: 3, title: '~보다 — เปรียบเทียบ', titleKr: '~보다 (비교)',
    meaning: 'เทียบว่า...กว่า', structure: 'A + 보다 + B + ~',
    explanation: '보다 แปลว่า "มากกว่า"\nA 보다 B = B มากกว่า A',
    examples: [
      { kr: '서울은 부산보다 커요.', th: 'โซลใหญ่กว่าปูซาน' },
      { kr: '이것은 저것보다 좋아요.', th: 'อันนี้ดีกว่าอันนั้น' },
    ],
    tips: ['보다 วางหลังคำเปรียบเทียบ'],
    practice: [
      { id: 'p3_001a', type: 'fill-blank', question: '서울은 부산___ 커요.', answer: '보다', explanation: 'A보다 B (B มากกว่า A)' },
    ],
  },
  {
    id: 'g3_002', level: 3, title: '~아/어서 — เหตุผล-ผลลัพธ์', titleKr: '~아/어서 (이유/결과)',
    meaning: 'เพราะ...จึง..., ทำ...แล้วจึง...', structure: 'กริยา1 + 아/어서 + กริยา2',
    explanation: 'เชื่อมเหตุผลเข้ากับผลลัพธ์\nกริยา1 = เหตุผล → กริยา2 = ผลลัพธ์',
    examples: [
      { kr: '배가 고파서 밥을 먹었어요.', th: 'หิวจึงกินข้าว' },
      { kr: '비가 와서 집에 있었어요.', th: 'ฝนตกจึงอยู่บ้าน' },
      { kr: '피곤해서 잤어요.', th: 'เหนื่อยจึงนอน' },
    ],
    tips: ['아/어서 เชื่อม 2 ประโยคเข้าด้วยกัน'],
    practice: [
      { id: 'p3_002a', type: 'reorder', question: 'เรียง: 밥을 / 고파서 / 먹었어요 / 배가', answer: '배가 고파서 밥을 먹었어요.', options: ['배가', '고파서', '밥을', '먹었어요.'], explanation: 'เหตุผล(หิว) + ผลลัพธ์(กิน)' },
    ],
  },
  {
    id: 'g3_003', level: 3, title: '~지만 — แต่/อย่างไรก็ตาม', titleKr: '~지만 (대조)',
    meaning: 'แต่..., ถึงแม้ว่า...', structure: 'กริยา/คำนาม + 지만',
    explanation: 'เชื่อมประโยคที่ขัดแย้งกัน\n"ทำ...แต่..."',
    examples: [
      { kr: '비싸지만 좋아요.', th: 'แพงแต่ดี' },
      { kr: '힘들지만 재미있어요.', th: 'เหนื่อยแต่สนุก' },
      { kr: '한국어는 어렵지만 공부해요.', th: 'ภาษาเกาหลียากแต่เรียน' },
    ],
    tips: ['지만 คล้าย "แต่" ในภาษาไทย'],
    practice: [
      { id: 'p3_003a', type: 'fill-blank', question: '비싸___ 좋아요.', answer: '지만', explanation: 'แพง(비싸) + แต่(지만) ดี' },
    ],
  },
  {
    id: 'g3_004', level: 3, title: '~ㄹ까요? — ข้อเสนอ/คำถาม', titleKr: '~ㄹ까요? (제안/의문)',
    meaning: 'จะ...ดีไหม?, ให้...ไหม?', structure: 'กริยา + ㄹ까요?',
    explanation: 'ใช้เสนอแนะหรือถามความเห็น\n"จะทำ...ดีไหม?"',
    examples: [
      { kr: '같이 갈까요?', th: 'ไปด้วยกันไหม?' },
      { kr: '뭐 먹을까요?', th: 'จะกินอะไรดี?' },
      { kr: '이번 주말에 만날까요?', th: '_weekend_นี้เจอกันไหม?' },
    ],
    tips: ['ㄹ까요 ใช้ได้ทั้งเสนอและถาม'],
    practice: [
      { id: 'p3_004a', type: 'fill-blank', question: '같이 갈___?', answer: 'ㄹ까요', explanation: 'ไปด้วยกันไหม?' },
    ],
  },
]

/**
 * Level 4 — ไวยากรณ์ระดับ Upper Intermediate
 */
export const level4Grammar: GrammarPoint[] = [
  {
    id: 'g4_001', level: 4, title: '~면 — เงื่อนไข (ถ้า...)', titleKr: '~면 (조건)',
    meaning: 'ถ้า..., ถ้าหาก...', structure: 'กริยา + 면',
    explanation: 'ใช้บอกเงื่อนไข "ถ้าทำ...ก็จะ..."',
    examples: [
      { kr: '비가 오면 집에 있을게요.', th: 'ถ้าฝนตก จะอยู่บ้าน' },
      { kr: '시간이 있으면 만날게요.', th: 'ถ้ามีเวลา จะเจอกัน' },
      { kr: 'พูดเร็วจะไม่เข้าใจ', th: '비싸면 안 사요.' },
    ],
    tips: ['면 = "ถ้า" ในภาษาไทย'],
    practice: [
      { id: 'p4_001a', type: 'fill-blank', question: '비가 오___ 집에 있을게요.', answer: '면', explanation: 'ถ้า(면) ฝนตก อยู่บ้าน' },
    ],
  },
  {
    id: 'g4_002', level: 4, title: '~ㄹ 수 있다/없다 — ความสามารถ', titleKr: '~ㄹ 수 있다/없다',
    meaning: 'ทำได้/ทำไม่ได้', structure: 'กริยา + ㄹ 수 있다/없다',
    explanation: 'ㄹ 수 있다 = สามารถทำได้\nㄹ 수 없다 = ทำไม่ได้',
    examples: [
      { kr: '한국어를 할 수 있어요.', th: 'พูดภาษาเกาหลีได้' },
      { kr: '내일은 갈 수 없어요.', th: 'พรุ่งนี้ไปไม่ได้' },
    ],
    tips: ['ㄹ 수 있다 = ได้, ㄹ 수 없다 = ไม่ได้'],
    practice: [
      { id: 'p4_002a', type: 'fill-blank', question: '한국어를 할 ___ 있어요.', answer: '수', explanation: 'ทำได้ = ㄹ 수 있다' },
    ],
  },
  {
    id: 'g4_003', level: 4, title: '~아/어 보세요 — ลองทำ', titleKr: '~아/어 보세요',
    meaning: 'ลองทำ...', structure: 'กริยา + 아/어 보세요',
    explanation: 'ใช้แนะนำให้ลองทำอะไรสักอย่าง',
    examples: [
      { kr: '이 음식을 드셔 보세요.', th: 'ลองชิมอาหารนี้ดูสิ' },
      { kr: '한번 생각해 보세요.', th: 'ลองคิดดูสิ' },
    ],
    tips: ['~아/어 보세요 = "ลอง...ดูสิ"'],
    practice: [
      { id: 'p4_003a', type: 'fill-blank', question: '먹___ 보세요.', answer: '어', explanation: '먹(ㅓ) + 어 보세요 = ลองกินดูสิ' },
    ],
  },
]

/**
 * Level 5 — ไวยากรณ์ระดับ Advanced
 */
export const level5Grammar: GrammarPoint[] = [
  {
    id: 'g5_001', level: 5, title: '~게 되다 — ผลลัพธ์', titleKr: '~게 되다',
    meaning: 'กลายเป็นว่า..., ได้...', structure: 'กริยา + 게 되다',
    explanation: 'บอกว่าสถานการณ์เปลี่ยนไปจนเป็นแบบนั้น',
    examples: [
      { kr: '한국에 오게 되었어요.', th: 'กลายเป็นว่าได้มาเกาหลี' },
      { kr: '알게 되었어요.', th: 'ได้รู้(เอง)' },
    ],
    tips: ['게 되다 = กลายเป็นว่า'],
    practice: [
      { id: 'p5_001a', type: 'fill-blank', question: '한국에 오___ 되었어요.', answer: '게', explanation: 'กลายเป็นว่าได้มาเกาหลี' },
    ],
  },
  {
    id: 'g5_002', level: 5, title: '간접 �법 — ถ้อยคำอ้อม', titleKr: '간접 �법',
    meaning: 'บอกว่าคนอื่นพูดอะไร (แบบอ้อม)', structure: '~다고 하다/하다',
    explanation: 'ใช้รายงานคำพูดของคนอื่น\n-direct speech → indirect speech',
    examples: [
      { kr: '비가 온다고 해요.', th: 'เขาบอกว่าฝนตก' },
      { kr: '내일 안 온다고 했어요.', th: 'เขาบอกว่าพรุ่งนี้ไม่มา' },
    ],
    tips: ['간접 �법 = indirect speech'],
    practice: [
      { id: 'p5_002a', type: 'fill-blank', question: '비___ 온다고 해요.', answer: '가', explanation: '비(สระ) + 가 → 비가 온다고 해요' },
    ],
  },
]

/**
 * Level 6 — ไวยากรณ์ระดับ Proficient
 */
export const level6Grammar: GrammarPoint[] = [
  {
    id: 'g6_001', level: 6, title: '비유/은유 — อุปมา/อุปมัย', titleKr: '비유/은유',
    meaning: 'การเปรียบเปรย', structure: '~처럼, ~같이, ~마냥',
    explanation: 'ใช้เทียบเคียงสิ่งต่างๆ\n처럼/같이 = เหมือน\n마냥 = เหมือน(เน้นมาก)',
    examples: [
      { kr: '눈처럼 하얗다.', th: 'ขาวเหมือนหิมะ' },
      { kr: '아이처럼 웃어요.', th: 'ยิ้มเหมือนเด็ก' },
    ],
    tips: ['처럼/같이 = เหมือน, 마냥 = เหมือน(เน้น)'],
    practice: [
      { id: 'p6_001a', type: 'fill-blank', question: '눈___ 하얗다.', answer: '처럼', explanation: 'เหมือนหิมะ = 눈처럼' },
    ],
  },
  {
    id: 'g6_002', level: 6, title: '격식체 — ภาษาทางการ', titleKr: '격식체 (합쇼체)',
    meaning: 'รูปแบบประโยคสำหรับการเขียน/Formal', structure: '~ㅂ니다/습니다',
    explanation: '합쇼체 = รูปแบบสุภาพที่สุด\nใช้ในการPresentations รายงาน ข่าว',
    examples: [
      { kr: '존경합니다.', th: 'นับถือ (ทางการ)' },
      { kr: '감사드리겠습니다.', th: 'ขอบคุณ (ทางการมาก)' },
    ],
    tips: ['합쇼체 ใช้ในที่ทำงาน รายงาน ข่าว'],
    practice: [
      { id: 'p6_002a', type: 'fill-blank', question: '존경___', answer: '합니다', explanation: '합쇼체: ㅂ니다' },
    ],
  },
]

// ====== Combine all ======
export const allGrammarByLevel: Record<ProficiencyLevel, GrammarPoint[]> = {
  1: level3Grammar,  // import จาก level1.ts
  2: level3Grammar,
  3: level3Grammar,
  4: level4Grammar,
  5: level5Grammar,
  6: level6Grammar,
}
