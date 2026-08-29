import type { HangulChar, HangulCombination } from '@/types'

// ====== พยัญชนะเดี่ยว (Single Consonants / 단자음) 14 ตัว ======
export const singleConsonants: HangulChar[] = [
  {
    char: 'ㄱ',
    name: '기역',
    romanization: 'g/k',
    sound: 'ก',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงคล้าย ก.ไก่ ต้นคำเป็น g, ท้ายคำเป็น ค',
  },
  {
    char: 'ㄴ',
    name: '니은',
    romanization: 'n',
    sound: 'น',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงเหมือน น.หนู',
  },
  {
    char: 'ㄷ',
    name: '디귿',
    romanization: 'd/t',
    sound: 'ด/ต',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ต้นคำเป็น ด, ท้ายคำเป็น ต',
  },
  {
    char: 'ㄹ',
    name: '리을',
    romanization: 'r/l',
    sound: 'ร/ล',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ต้นคำคล้าย ร, ท้ายคำคล้าย ล หรือ น',
  },
  {
    char: 'ㅁ',
    name: '미음',
    romanization: 'm',
    sound: 'ม',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงเหมือน ม.ม้า',
  },
  {
    char: 'ㅂ',
    name: '비읍',
    romanization: 'b/p',
    sound: 'บ/ป',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ต้นคำเป็น บ, ท้ายคำเป็น ป',
  },
  {
    char: 'ㅅ',
    name: '시옷',
    romanization: 's',
    sound: 'ซ/ส',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงคล้าย ส.เสือ หรือ ซ',
  },
  {
    char: 'ㅇ',
    name: '이응',
    romanization: '-/ng',
    sound: 'เงียบ/ง',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'หน้าพยางค์ไม่ออกเสียง (ตัวเติมสระ) ท้ายออกเสียง ง',
  },
  {
    char: 'ㅈ',
    name: '지읒',
    romanization: 'j',
    sound: 'จ',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงคล้าย จ.จาน',
  },
  {
    char: 'ㅊ',
    name: '치읓',
    romanization: 'ch',
    sound: 'ช',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงคล้าย ช.ช้าง มีลมหายใจ (aspirated)',
  },
  {
    char: 'ㅋ',
    name: '키읔',
    romanization: 'k',
    sound: 'ค',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียง ค แบบมีลมหายใจ (aspirated) — แรงกว่า ㄱ',
  },
  {
    char: 'ㅌ',
    name: '티읕',
    romanization: 't',
    sound: 'ท',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียง ท แบบมีลมหายใจ (aspirated) — แรงกว่า ㄷ',
  },
  {
    char: 'ㅍ',
    name: '피읖',
    romanization: 'p',
    sound: 'พ',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียง พ แบบมีลมหายใจ (aspirated) — แรงกว่า ㅂ',
  },
  {
    char: 'ㅎ',
    name: '히읗',
    romanization: 'h',
    sound: 'ฮ',
    type: 'consonant',
    consonantSubtype: 'single',
    tip: 'ออกเสียงคล้าย ฮ.นกฮูก',
  },
]

// ====== พยัญชนะคู่ (Double Consonants / 쌍자음) 5 ตัว ======
export const doubleConsonants: HangulChar[] = [
  {
    char: 'ㄲ',
    name: '쌍기역',
    romanization: 'kk',
    sound: 'กก',
    type: 'consonant',
    consonantSubtype: 'double',
    tip: 'ออกเสียงเหมือน ㄱ แต่เน้นกว่า 2 เท่า (เหมือนพูด ก-ก ติดกัน)',
  },
  {
    char: 'ㄸ',
    name: '쌍디귿',
    romanization: 'tt',
    sound: 'ดด',
    type: 'consonant',
    consonantSubtype: 'double',
    tip: 'ออกเสียงเหมือน ㄷ แต่เน้นกว่า 2 เท่า (ไม่มีในภาษาไทย)',
  },
  {
    char: 'ㅃ',
    name: '쌍비읍',
    romanization: 'pp',
    sound: 'บบ',
    type: 'consonant',
    consonantSubtype: 'double',
    tip: 'ออกเสียงเหมือน ㅂ แต่เน้นกว่า 2 เท่า (เหมือนพูด บ-บ ติดกัน)',
  },
  {
    char: 'ㅆ',
    name: '쌍시옷',
    romanization: 'ss',
    sound: 'ซซ',
    type: 'consonant',
    consonantSubtype: 'double',
    tip: 'ออกเสียงเหมือน ㅅ แต่เน้นกว่า 2 เท่า (เหมือนพูด ส-ส ติดกัน)',
  },
  {
    char: 'ㅉ',
    name: '쌍지읒',
    romanization: 'jj',
    sound: 'จจ',
    type: 'consonant',
    consonantSubtype: 'double',
    tip: 'ออกเสียงเหมือน ㅈ แต่เน้นกว่า 2 เท่า (เหมือนพูด จ-จ ติดกัน)',
  },
]

// ====== พยัญชนะทั้งหมด (รวม single + double) ======
export const consonants: HangulChar[] = [...singleConsonants, ...doubleConsonants]

// ====== สระ (Vowels) 10 ตัว ======
export const vowels: HangulChar[] = [
  {
    char: 'ㅏ',
    name: '아',
    romanization: 'a',
    sound: 'อา',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ อา — เสียงตรงๆ คล้าย อา',
  },
  {
    char: 'ㅑ',
    name: '야',
    romanization: 'ya',
    sound: 'ยา',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ ยา — เพิ่ม ย นำหน้า อา',
  },
  {
    char: 'ㅓ',
    name: '어',
    romanization: 'eo',
    sound: 'อะ/ออ',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ ออ (กลางๆ ระหว่าง อะ กับ ออ) ไม่เหมือน สระ อะ ไทย',
  },
  {
    char: 'ㅕ',
    name: '여',
    romanization: 'yeo',
    sound: 'ยอ',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ ยอ — เพิ่ม ย นำหน้า ออ',
  },
  {
    char: 'ㅗ',
    name: '오',
    romanization: 'o',
    sound: 'โอ',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ โอ — ริมฝีปากหุ้ม',
  },
  {
    char: 'ㅛ',
    name: '요',
    romanization: 'yo',
    sound: 'โย',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ โย — เพิ่ม ย นำหน้า โอ',
  },
  {
    char: 'ㅜ',
    name: '우',
    romanization: 'u',
    sound: 'อู',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ อู — ริมฝีปากยื่น',
  },
  {
    char: 'ㅠ',
    name: '유',
    romanization: 'yu',
    sound: 'ยู',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ ยู — เพิ่ม ย นำหน้า อู',
  },
  {
    char: 'ㅡ',
    name: '으',
    romanization: 'eu',
    sound: 'อือ',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ อือ — อ้าปากแล้วพูด ไม่เหมือนสระไทย',
  },
  {
    char: 'ㅣ',
    name: '이',
    romanization: 'i',
    sound: 'อิ',
    type: 'vowel',
    vowelSubtype: 'basic',
    tip: 'สระ อิ — เสียงสั้น',
  },
]

// ====== สระผสม (Combined Vowels) 11 ตัว ======
export const combinedVowels: HangulChar[] = [
  { char: 'ㅐ', name: '애', romanization: 'ae', sound: 'แอ', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ แอ — 组合 ㅏ + ㅣ (ออกเสียง แอ open)' },
  { char: 'ㅒ', name: '얘', romanization: 'yae', sound: 'แย', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ แย — 组合 ㅑ + ㅣ (เพิ่ม ย นำหน้า แอ)' },
  { char: 'ㅔ', name: '에', romanization: 'e', sound: 'แอ', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ แอ — 组合 ㅓ + ㅣ (ปัจจุบันออกเสียงเหมือน ㅐ)' },
  { char: 'ㅖ', name: '예', romanization: 'ye', sound: 'เย', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ เย — 组合 ㅕ + ㅣ (เพิ่ม ย นำหน้า แอ)' },
  { char: 'ㅘ', name: '와', romanization: 'wa', sound: 'ว아', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ ว아 — 组合 ㅗ + ㅏ' },
  { char: 'ㅙ', name: '왜', romanization: 'wae', sound: 'แว', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ แว — 组合 ㅗ + ㅐ (ออกเสียง แว)' },
  { char: 'ㅚ', name: '외', romanization: 'oe', sound: 'เว', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ เว — 组合 ㅗ + ㅣ (ปัจจุบันออกเสียงคล้าย ㅙ)' },
  { char: 'ㅝ', name: '워', romanization: 'wo', sound: 'วอ', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ วอ — 组合 ㅜ + ㅓ' },
  { char: 'ㅞ', name: '웨', romanization: 'we', sound: 'เว', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ เว — 组合 ㅜ + ㅐ (ออกเสียงเหมือน ㅙ)' },
  { char: 'ㅟ', name: '위', romanization: 'wi', sound: 'วิ', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ วิ — 组合 ㅜ + ㅣ' },
  { char: 'ㅢ', name: '의', romanization: 'ui', sound: 'อึ', type: 'vowel', vowelSubtype: 'compound', tip: 'สระ อึ — 组合 ㅡ + ㅣ (ออกเสียงหลายแบบตามตำแหน่ง)' },
]

// ====== ตัวอย่างการผสม (Examples) ======
export const hangulCombinations: HangulCombination[] = [
  // Basic consonant + vowel
  { consonant: 'ㄱ', vowel: 'ㅏ', result: '가', reading: 'กา (ga)' },
  { consonant: 'ㄴ', vowel: 'ㅏ', result: '나', reading: 'น่า (na)' },
  { consonant: 'ㄷ', vowel: 'ㅏ', result: '다', reading: 'ด่า (da)' },
  { consonant: 'ㄹ', vowel: 'ㅏ', result: '라', reading: 'ลา (ra)' },
  { consonant: 'ㅁ', vowel: 'ㅏ', result: '마', reading: 'มา (ma)' },
  { consonant: 'ㅂ', vowel: 'ㅏ', result: '바', reading: 'บ่า (ba)' },
  { consonant: 'ㅅ', vowel: 'ㅏ', result: '사', reading: 'ซ่า (sa)' },
  { consonant: 'ㅇ', vowel: 'ㅏ', result: '아', reading: 'อา (a)' },
  { consonant: 'ㅈ', vowel: 'ㅏ', result: '자', reading: 'จ่า (ja)' },
  { consonant: 'ㅊ', vowel: 'ㅏ', result: '차', reading: 'ช่า (cha)' },
  { consonant: 'ㅋ', vowel: 'ㅏ', result: '카', reading: 'ค่า (ka)' },
  { consonant: 'ㅌ', vowel: 'ㅏ', result: '타', reading: 'ท่า (ta)' },
  { consonant: 'ㅍ', vowel: 'ㅏ', result: '파', reading: 'พ่า (pa)' },
  { consonant: 'ㅎ', vowel: 'ㅏ', result: '하', reading: 'ฮ่า (ha)' },

  // With ㅓ
  { consonant: 'ㄱ', vowel: 'ㅓ', result: '거', reading: 'กอ (geo)' },
  { consonant: 'ㄴ', vowel: 'ㅓ', result: '너', reading: 'นอ (neo)' },
  { consonant: 'ㅁ', vowel: 'ㅓ', result: '머', reading: 'มอ (meo)' },
  { consonant: 'ㅅ', vowel: 'ㅓ', result: '서', reading: 'ซอ (seo)' },
  { consonant: 'ㅇ', vowel: 'ㅓ', result: '어', reading: 'ออ (eo)' },
  { consonant: 'ㅈ', vowel: 'ㅓ', result: '저', reading: 'จอ (jeo)' },
  { consonant: 'ㅎ', vowel: 'ㅓ', result: '허', reading: 'ฮอ (heo)' },

  // With ㅗ
  { consonant: 'ㄱ', vowel: 'ㅗ', result: '고', reading: 'โก (go)' },
  { consonant: 'ㄴ', vowel: 'ㅗ', result: '노', reading: 'โน (no)' },
  { consonant: 'ㅁ', vowel: 'ㅗ', result: '모', reading: 'โม (mo)' },
  { consonant: 'ㅇ', vowel: 'ㅗ', result: '오', reading: 'โอ (o)' },
  { consonant: 'ㅎ', vowel: 'ㅗ', result: '호', reading: 'โฮ (ho)' },

  // With ㅜ
  { consonant: 'ㄱ', vowel: 'ㅜ', result: '구', reading: 'กู (gu)' },
  { consonant: 'ㄴ', vowel: 'ㅜ', result: '누', reading: 'นู (nu)' },
  { consonant: 'ㅁ', vowel: 'ㅜ', result: '무', reading: 'มู (mu)' },
  { consonant: 'ㅇ', vowel: 'ㅜ', result: '우', reading: 'อู (u)' },
  { consonant: 'ㅈ', vowel: 'ㅜ', result: '주', reading: 'จู (ju)' },

  // With ㅡ
  { consonant: 'ㄱ', vowel: 'ㅡ', result: '그', reading: 'กือ (geu)' },
  { consonant: 'ㄴ', vowel: 'ㅡ', result: '느', reading: 'นือ (neu)' },
  { consonant: 'ㅇ', vowel: 'ㅡ', result: '으', reading: 'อือ (eu)' },
  { consonant: 'ㅎ', vowel: 'ㅡ', result: '허', reading: 'ฮือ (heu)' },

  // With ㅣ
  { consonant: 'ㄱ', vowel: 'ㅣ', result: '기', reading: 'กิ (gi)' },
  { consonant: 'ㄴ', vowel: 'ㅣ', result: '니', reading: 'นิ (ni)' },
  { consonant: 'ㄷ', vowel: 'ㅣ', result: '디', reading: 'ดิ (di)' },
  { consonant: 'ㅇ', vowel: 'ㅣ', result: '이', reading: 'อิ (i)' },
  { consonant: 'ㅁ', vowel: 'ㅣ', result: '미', reading: 'มิ (mi)' },
  { consonant: 'ㅂ', vowel: 'ㅣ', result: '비', reading: 'บิ (bi)' },
  { consonant: 'ㅅ', vowel: 'ㅣ', result: '시', reading: 'ซิ (si)' },
  { consonant: 'ㅈ', vowel: 'ㅣ', result: '지', reading: 'จิ (ji)' },

  // ㅅ with each vowel (common words)
  { consonant: 'ㅅ', vowel: 'ㅑ', result: '샤', reading: '샤 (sya)' },
  { consonant: 'ㅅ', vowel: 'ㅕ', result: '셔', reading: 'ชีอ (syeo)' },
  { consonant: 'ㅅ', vowel: 'ㅛ', result: '쇼', reading: 'ชโย (syo)' },
  { consonant: 'ㅅ', vowel: 'ㅠ', result: '슈', reading: 'ชู (syu)' },

  // Batchim examples ( 받침 )
  { consonant: 'ㄱ', vowel: 'ㅏ', result: '각', reading: 'กัก (gak) —  받침 ㄱ' },
  { consonant: 'ㄴ', vowel: 'ㅏ', result: '안', reading: 'อัน (an) — 받침 ㄴ' },
  { consonant: 'ㄹ', vowel: 'ㅏ', result: '알', reading: 'ออล (al) — 받침 ㄹ' },
  { consonant: 'ㅁ', vowel: 'ㅏ', result: '암', reading: 'อัม (am) — 받침 ㅁ' },
  { consonant: 'ㅂ', vowel: 'ㅏ', result: '압', reading: 'อับ (ap) — 받침 ㅂ' },
  { consonant: 'ㅇ', vowel: 'ㅏ', result: '앙', reading: 'อัง (ang) — 받침 ㅇ' },
]

// ====== คำศัพท์ตัวอย่าง (Example Words) ======
export const hangulExampleWords = [
  { korean: '가방', romanization: 'gabang', meaning: 'กระเป๋า', reading: 'กบัง', consonant: 'ㄱ' },
  { korean: '나라', romanization: 'nara', meaning: 'ประเทศ', reading: 'นารา', consonant: 'ㄴ' },
  { korean: '도시', romanization: 'dosi', meaning: 'เมือง', reading: 'โตชิ', consonant: 'ㄷ' },
  { korean: '물', romanization: 'mul', meaning: 'น้ำ', reading: 'มุล', consonant: 'ㅁ' },
  { korean: '바다', romanization: 'bada', meaning: 'ทะเล', reading: 'บาดา', consonant: 'ㅂ' },
  { korean: '시계', romanization: 'sigye', meaning: 'นาฬิกา', reading: 'ชิกเย', consonant: 'ㅅ' },
  { korean: '아이', romanization: 'ai', meaning: 'เด็ก', reading: 'อาอิ', consonant: 'ㅇ' },
  { korean: '자전거', romanization: 'jeongeo', meaning: 'จักรยาน', reading: 'จอนกอ', consonant: 'ㅈ' },
  { korean: '학교', romanization: 'hakgyo', meaning: 'โรงเรียน', reading: 'ฮักกโย', consonant: 'ㅎ' },
  { korean: '오이', romanization: 'oi', meaning: 'แตงกวา', reading: 'โออิ', consonant: 'ㅇ' },
]

// ====== คำศัพท์พยัญชนะคู่ (Double Consonant Words) ======
export const doubleConsonantWords = [
  { korean: '아빠', romanization: 'appa', meaning: 'พ่อ', reading: 'อับบา', tip: 'ㅃ อยู่ต้นคำ' },
  { korean: '어머니', romanization: 'eomeoni', meaning: 'แม่', reading: 'โอมอนิ', tip: 'ㅁ ท้าย แต่ ㄴ ในกลาง' },
  { korean: '있다', romanization: 'itda', meaning: 'มี (อยู่)', reading: 'อิดดา', tip: 'ㄸ ไม่มีในคำนี้ - ดู ด ธรรมดา' },
  { korean: '오빠', romanization: 'oppa', meaning: 'พี่ชาย (เรียกผู้ชาย)', reading: 'โอบบา', tip: 'ㅃ อยู่ต้นคำ ตัวแรก ㅇ เงียบ' },
  { korean: '짜다', romanization: 'jjada', meaning: 'เผ็ด', reading: 'จาดา', tip: 'ㅉ อยู่ต้นคำ' },
  { korean: '쌍', romanization: 'ssang', meaning: 'คู่ / คู่กัน', reading: 'ซาง', tip: 'ㅆ อยู่ต้นคำ' },
  { korean: '씨', romanization: 'ssi', meaning: 'ตระกูล (ใช้หลังนาม)', reading: 'ซิ', tip: 'ㅆ อยู่ต้นคำ' },
  { korean: '깎다', romanization: 'kkakda', meaning: 'เฉือน / ตัด', reading: 'กักดา', tip: 'ㄲ อยู่ต้นคำ' },
  { korean: '낚시', romanization: 'naksi', meaning: 'ตกปลา', reading: 'นักชิ', tip: 'ㄴ ธรรมดา - ดู ㄲ ปน' },
  { korean: '같이', romanization: 'gachi', meaning: 'ด้วยกัน', reading: 'กาชิ', tip: 'ㄱ ธรรมดา - ดู ㅃ ปน' },
]

// ====== คำทักทายตัวอย่าง ======
export const hangulGreetings = [
  { korean: '안녕하세요', romanization: 'annyeonghaseyo', meaning: 'สวัสดี (สุภาพ)', reading: 'อันนยงฮาเซโย' },
  { korean: '감사합니다', romanization: 'gamsahamnida', meaning: 'ขอบคุณ (สุภาพ)', reading: 'กัมซาฮัมนิดา' },
  { korean: '미안합니다', romanization: 'mianhamnida', meaning: 'ขอโทษ (สุภาพ)', reading: 'มีอันฮัมนิดา' },
  { korean: '안녕히 가세요', romanization: 'annyeonghi gaseyo', meaning: 'ลาก่อน (คนไป)', reading: 'อันนยงฮีกาเซโย' },
  { korean: '반갑습니다', romanization: 'bangapseumnida', meaning: 'ยินดีที่ได้รู้จัก', reading: 'บันกัปซัมนิดา' },
]
