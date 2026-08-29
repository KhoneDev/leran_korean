import type { Word } from '@/types'

/**
 * Level 5 — 고급 1 (Advanced)
 * อ่านข่าว เขียน essay สำนวน business
 */
export const level5Words: Word[] = [
  // === Business ===
  { id: 'l5_001', korean: '계약', romanization: 'gyeyak', meaning: 'สัญญา', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_002', korean: '회의실', romanization: 'hoeuisil', meaning: 'ห้องประชุม', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_003', korean: '제안서', romanization: 'jeonseo', meaning: 'ข้อเสนอ', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_004', korean: '마케팅', romanization: 'maketing', meaning: 'การตลาด', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_005', korean: '매출', romanization: 'maechul', meaning: 'รายได้', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_006', korean: '투자', romanization: 'tuja', meaning: 'การลงทุน', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_007', korean: '고객', romanization: 'gogaek', meaning: 'ลูกค้า', category: 'business', tags: ['daily'], difficulty: 5 },
  { id: 'l5_008', korean: '경쟁', romanization: 'gyeongjaeng', meaning: 'การแข่งขัน', category: 'business', tags: ['daily'], difficulty: 5 },

  // === ข่าว/สังคม ===
  { id: 'l5_009', korean: '정치', romanization: 'jeongchi', meaning: 'การเมือง', category: 'news', tags: ['daily'], difficulty: 5 },
  { id: 'l5_010', korean: '국제', romanization: 'gukje', meaning: 'ระหว่างประเทศ', category: 'news', tags: ['daily'], difficulty: 5 },
  { id: 'l5_011', korean: '사건', romanization: 'sageon', meaning: 'เหตุการณ์', category: 'news', tags: ['daily'], difficulty: 5 },
  { id: 'l5_012', korean: '발전', romanization: 'baljeon', meaning: 'การพัฒนา', category: 'news', tags: ['daily'], difficulty: 5 },
  { id: 'l5_013', korean: '위기', romanization: 'wigi', meaning: 'วิกฤต', category: 'news', tags: ['daily'], difficulty: 5 },
  { id: 'l5_014', korean: '해결', romanization: 'haegyeol', meaning: 'การแก้ปัญหา', category: 'news', tags: ['daily'], difficulty: 5 },

  // === วัฒนธรรม ===
  { id: 'l5_015', korean: '전통', romanization: 'jeontong', meaning: 'ประเพณี', category: 'culture', tags: ['daily'], difficulty: 5 },
  { id: 'l5_016', korean: '예술', romanization: 'yesul', meaning: 'ศิลปะ', category: 'culture', tags: ['daily'], difficulty: 5 },
  { id: 'l5_017', korean: '문학', romanization: 'munhak', meaning: 'วรรณกรรม', category: 'culture', tags: ['daily'], difficulty: 5 },
  { id: 'l5_018', korean: '음악', romanization: 'eumak', meaning: 'ดนตรี', category: 'culture', tags: ['daily'], difficulty: 5 },
  { id: 'l5_019', korean: '영화', romanization: 'yeonghwa', meaning: 'ภาพยนตร์', category: 'culture', tags: ['daily'], difficulty: 5 },
  { id: 'l5_020', korean: '드라마', romanization: 'deurama', meaning: 'ละคร', category: 'culture', tags: ['daily'], difficulty: 5 },

  // === อารมณ์/ความรู้สึก ระดับสูง ===
  { id: 'l5_021', korean: '점점', romanization: 'jeomjeom', meaning: 'ค่อยๆ', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },
  { id: 'l5_022', korean: '대체로', romanization: 'daechero', meaning: 'ส่วนใหญ่', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },
  { id: 'l5_023', korean: '결국', romanization: 'gyeolguk', meaning: 'ในที่สุด', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },
  { id: 'l5_024', korean: '오히려', romanization: 'ohiryeo', meaning: 'กลับกัน', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },
  { id: 'l5_025', korean: '설령', romanization: 'seollyeong', meaning: 'ถึงแม้ว่า', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },
  { id: 'l5_026', korean: '일부러', romanization: 'ilbureo', meaning: 'จงใจ', category: 'advanced_vocab', tags: ['daily'], difficulty: 5 },

  // === ประโยค Business ===
  { id: 'l5_027', korean: '미팅을 잡아주세요', romanization: 'miting-eul jabajuseyo', meaning: 'กรุณานัด meeting', category: 'sentences', tags: ['daily'], difficulty: 5 },
  { id: 'l5_028', korean: '검토해 보겠습니다', romanization: 'geomtohae bogessseumnida', meaning: 'จะตรวจสอบดู', category: 'sentences', tags: ['daily'], difficulty: 5 },
  { id: 'l5_029', korean: '추가 설명이 필요합니다', romanization: 'chuga seolmyeoni piryohamnida', meaning: 'ต้องการคำอธิบายเพิ่ม', category: 'sentences', tags: ['daily'], difficulty: 5 },
  { id: 'l5_030', korean: '가능한 빨리 부탁드립니다', romanization: 'ganeunghan ppalli butakdeurimnida', meaning: 'รบกวนเร็วที่สุด', category: 'sentences', tags: ['daily'], difficulty: 5 },
  { id: 'l5_031', korean: '경제성장', romanization: 'gyeongjejang', meaning: 'การเติบโตทางเศรษฐกิจ', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_032', korean: '고용', romanization: 'goyong', meaning: 'การจ้างงาน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_033', korean: '공정', romanization: 'gongjeong', meaning: 'ความยุติธรรม', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_034', korean: '관료', romanization: 'gwanryo', meaning: 'ข้าราชการ', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_035', korean: '금융', romanization: 'geumyung', meaning: 'การเงิน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_036', korean: '기업', romanization: 'gieop', meaning: 'บริษัท', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_037', korean: '뉴스룸', romanization: 'nyuseurum', meaning: 'ห้องข่าว', category: 'nouns', tags: ['media'], difficulty: 5 },
  { id: 'l5_038', korean: '독서실', romanization: 'dokseosil', meaning: 'ห้องสมุด', category: 'nouns', tags: ['education'], difficulty: 5 },
  { id: 'l5_039', korean: '문화유산', romanization: 'munhwayusan', meaning: 'มรดกทางวัฒนธรรม', category: 'nouns', tags: ['culture'], difficulty: 5 },
  { id: 'l5_040', korean: '보험료', romanization: 'boheomnyo', meaning: 'เบี้ยประกัน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_041', korean: '부동산', romanization: 'budongsan', meaning: 'อสังหาริมทรัพย์', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_042', korean: '비즈니스', romanization: 'bijeuniseu', meaning: 'ธุรกิจ', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_043', korean: '사채', romanization: 'sachae', meaning: 'หนี้นอกระบบ', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_044', korean: '사회주의', romanization: 'sahoejuui', meaning: 'สังคมนิยม', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_045', korean: '선거', romanization: 'seonleo', meaning: 'การเลือกตั้ง', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_046', korean: '소득', romanization: 'sodeuk', meaning: 'รายได้', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_047', korean: '수출', romanization: 'suchul', meaning: 'การส่งออก', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_048', korean: '시민', romanization: 'simin', meaning: 'พลเมือง', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_049', korean: '아나운서', romanization: 'anaunseo', meaning: 'ผู้ประกาศ', category: 'nouns', tags: ['media'], difficulty: 5 },
  { id: 'l5_050', korean: '언론', romanization: 'eollon', meaning: 'สื่อมวลชน', category: 'nouns', tags: ['media'], difficulty: 5 },
  { id: 'l5_051', korean: '외교', romanization: 'oegyo', meaning: 'การทูต', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_052', korean: '요건', romanization: 'yogeon', meaning: 'เงื่อนไข', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_053', korean: '유산', romanization: 'yusan', meaning: 'มรดก', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_054', korean: '의결', romanization: 'uigyeol', meaning: 'การลงมติ', category: 'nouns', tags: ['society'], difficulty: 5 },
  { id: 'l5_055', korean: '이론', romanization: 'iron', meaning: 'ทฤษฎี', category: 'nouns', tags: ['education'], difficulty: 5 },
  { id: 'l5_056', korean: '인플레이션', romanization: 'inpeulleisyeon', meaning: 'เงินเฟ้อ', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_057', korean: '재벌', romanization: 'jaebul', meaning: 'กลุ่มธุรกิจใหญ่', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_058', korean: '적자', romanization: 'jeokja', meaning: 'ผลขาดทุน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_059', korean: '전략', romanization: 'jeonryak', meaning: 'กลยุทธ์', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_060', korean: '정보통신', romanization: 'jeongbotongsin', meaning: 'ไอที', category: 'nouns', tags: ['technology'], difficulty: 5 },
  { id: 'l5_061', korean: '증권', romanization: 'jeunggwon', meaning: 'หลักทรัพย์', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_062', korean: '직원', romanization: 'jigwon', meaning: 'พนักงาน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_063', korean: '총괄', romanization: 'chonggwal', meaning: 'ภาพรวม', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_064', korean: '트렌드', romanization: 'teurende', meaning: 'แนวโน้ม', category: 'nouns', tags: ['media'], difficulty: 5 },
  { id: 'l5_065', korean: '플랫폼', romanization: 'pillaeteurom', meaning: 'แพลตฟอร์ม', category: 'nouns', tags: ['technology'], difficulty: 5 },
  { id: 'l5_066', korean: '해외투자', romanization: 'haeoeTuja', meaning: 'การลงทุนต่างประเทศ', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_067', korean: '협상', romanization: 'hyeopsang', meaning: 'การเจรจา', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_068', korean: '현금', romanization: 'hyeongeum', meaning: 'เงินสด', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_070', korean: '회계', romanization: 'hoege', meaning: 'บัญชี', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_071', korean: '활성화', romanization: 'hwalseonghwa', meaning: 'การกระตุ้น', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_072', korean: '규모', romanization: 'gyumo', meaning: 'ขนาด', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_073', korean: '브랜드', romanization: 'beuraendeu', meaning: 'แบรนด์', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_074', korean: '수익', romanization: 'suik', meaning: 'กำไร', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_075', korean: '인건비', romanization: 'ingeonbi', meaning: 'ค่าใช้จ่ายด้านบุคลากร', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_076', korean: '자본', romanization: 'jabon', meaning: 'ทุน', category: 'nouns', tags: ['business'], difficulty: 5 },
  { id: 'l5_077', korean: '증명', romanization: 'jeungmyeong', meaning: 'การพิสูจน์', category: 'nouns', tags: ['education'], difficulty: 5 },
  { id: 'l5_078', korean: '차트', romanization: 'chateu', meaning: 'กราฟ', category: 'nouns', tags: ['business'], difficulty: 5 }
]
