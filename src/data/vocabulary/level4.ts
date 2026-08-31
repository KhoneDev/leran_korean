import type { Word } from '@/types'

/**
 * Level 4 — TOPIK 4 (Intermediate High / ລະດັບກາງຂັ້ນສູງ)
 * ບັນຫາສັງຄົມ, ວິທະຍາສາດ & ເຕັກໂນໂລຊີ, ສິ່ງແວດລ້ອມ, ວັດທະນະທຳ, ແລະ ຂ່າວສານ
 */
export const level4Words: Word[] = [
  // ====== ສັງຄົມ & ເສດຖະກິດ (Society & Economy) ======
  {
    id: 'l4_001',
    korean: '경제성장',
    romanization: 'gyeongjeseongjang',
    meaning: 'ການເຕີບໂຕທາງເສດຖະກິດ',
    category: 'economy',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '기술 발전이 경제성장을 이끌고 있습니다.',
        romanization: 'Gisul baljeoni gyeongjeseongjangeul ikkeulgo itseumnida.',
        meaning: 'ການພັດທະນາເຕັກໂນໂລຊີກຳລັງຂັບເຄື່ອນການເຕີບໂຕທາງເສດຖະກິດ.'
      }
    ]
  },
  {
    id: 'l4_002',
    korean: '물가상승',
    romanization: 'mulgasangseung',
    meaning: 'ເງິນເຟີ້, ລາຄາສິນຄ້າເພີ່ມຂຶ້ນ',
    category: 'economy',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '물가상승으로 인해 생활비 부담이 커졌어요.',
        romanization: 'Mulgasangseungeuro inhae saenghwalbi budami keojyeosseoyo.',
        meaning: 'ຍ້ອນສິນຄ້າຂຶ້ນລາຄາເຮັດໃຫ້ພາລະຄ່າຄອງຊີບສູງຂຶ້ນ.'
      }
    ]
  },
  {
    id: 'l4_003',
    korean: '고령화사회',
    romanization: 'goryeonghwasahoe',
    meaning: 'ສັງຄົມຜູ້ສູງອາຍຸ',
    category: 'society',
    tags: ['society', 'news'],
    difficulty: 4,
    examples: [
      {
        korean: '한국은 고령화사회에 빠르게 진입하고 있습니다.',
        romanization: 'Hangugeun goryeonghwasahoee ppareuge jiniphago itseumnida.',
        meaning: 'ປະເທດເກົາຫຼີກຳລັງກ້າວເຂົ້າສູ່ສັງຄົມຜູ້ສູງອາຍຸຢ່າງວ່ອງໄວ.'
      }
    ]
  },
  {
    id: 'l4_004',
    korean: '저출산',
    romanization: 'jeochulsan',
    meaning: 'ອັດຕາການເກີດຕ່ຳ',
    category: 'society',
    tags: ['society', 'news'],
    difficulty: 4,
    examples: [
      {
        korean: '저출산 문제를 해결하기 위한 정책이 필요합니다.',
        romanization: 'Jeochulsan munjereul haegyeolhagi wihan jeongchaegi piryohamnida.',
        meaning: 'ຕ້ອງການນະໂຍບາຍເພື່ອແກ້ໄຂບັນຫາອັດຕາການເກີດຕ່ຳ.'
      }
    ]
  },
  {
    id: 'l4_005',
    korean: '취업률',
    romanization: 'chwieomnyul',
    meaning: 'ອັດຕາການມີວຽກເຮັດງານທຳ',
    category: 'work',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '올해 청년 취업률이 다소 상승했습니다.',
        romanization: 'Olhae cheongnyeon chwieomnyuri daso sangseunghaetseumnida.',
        meaning: 'ປີນີ້ອັດຕາການມີວຽກເຮັດຂອງຊາວໜຸ່ມເພີ່ມຂຶ້ນເລັກນ້ອຍ.'
      }
    ]
  },

  // ====== ສິ່ງແວດລ້ອມ & ທຳມະຊາດ (Environment & Nature) ======
  {
    id: 'l4_006',
    korean: '환경오염',
    romanization: 'hwangyeong-oyeom',
    meaning: 'ມົນລະພິດສິ່ງແວດລ້ອມ',
    category: 'nature',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '플라스틱 쓰레기로 인한 환경오염이 심각해요.',
        romanization: 'Peullaseutik sseuregiro inhan hwangyeong-oyeomi simgakhaeyo.',
        meaning: 'ມົນລະພິດສິ່ງແວດລ້ອມຈາກຂີ້ເຫຍື້ອປຼາສະຕິກຮ້າຍແຮງຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l4_007',
    korean: '기후변화',
    romanization: 'gihubyeonhwa',
    meaning: 'ການປ່ຽນແປງສະພາບດິນຟ້າອາກາດ',
    category: 'nature',
    tags: ['society', 'news'],
    difficulty: 4,
    examples: [
      {
        korean: '기후변화로 인해 지구 온난화가 심해지고 있습니다.',
        romanization: 'Gihubyeonhwaro inhae jigu onnanhwaga simhaejigo itseumnida.',
        meaning: 'ຍ້ອນການປ່ຽນແປງດິນຟ້າອາກາດເຮັດໃຫ້ພາວະໂລກຮ້ອນຮຸນແຮງຂຶ້ນ.'
      }
    ]
  },
  {
    id: 'l4_008',
    korean: '재활용하다',
    romanization: 'jaehwalyonghada',
    meaning: 'ຣີໄຊເຄິນ, ນຳກັບມາໃຊ້ໃໝ່',
    category: 'nature',
    tags: ['daily', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '쓰레기를 종류별로 분리해서 재활용해요.',
        romanization: 'Sseuregireul jongnyubyeollo bullihaeseo jaehwalyonghaeyo.',
        meaning: 'ແຍກຂີ້ເຫຍື້ອຕາມປະເພດເພື່ອເອົາໄປຣີໄຊເຄິນ.'
      }
    ]
  },
  {
    id: 'l4_009',
    korean: '신재생에너지',
    romanization: 'sinjaesaeng-eneoji',
    meaning: 'ພະລັງງານໝູນວຽນ, ພະລັງງານທົດແທນ',
    category: 'technology',
    tags: ['nature', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '태양광과 풍력 같은 신재생에너지 개발이 중요합니다.',
        romanization: 'Taeyanggwang-gwa pungnyeok gateun sinjaesaeng-eneoji gaebari jungyohamnida.',
        meaning: 'ການພັດທະນາພະລັງງານທົດແທນເຊັ່ນ: ແສງອາທິດ ແລະ ພະລັງງານລົມ ແມ່ນສຳຄັນຫຼາຍ.'
      }
    ]
  },

  // ====== ວິທະຍາສາດ & ເຕັກໂນໂລຊີ (Science & Technology) ======
  {
    id: 'l4_010',
    korean: '인공지능',
    romanization: 'ingongjineung',
    meaning: 'ປັນຍາປະດິດ (AI)',
    category: 'technology',
    tags: ['technology', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '인공지능 기술이 일상생활에 널리 활용되고 있어요.',
        romanization: 'Ingongjineung gisuri ilsangsaenghware neolli hwalyongdoego isseoyo.',
        meaning: 'ເຕັກໂນໂລຊີ AI ຖືກນຳມາໃຊ້ໃນຊີວິດປະຈຳວັນຢ່າງກວ້າງຂວາງ.'
      }
    ]
  },
  {
    id: 'l4_011',
    korean: '개인정보보호',
    romanization: 'gaeinjeongbobohu',
    meaning: 'ການປົກປ້ອງຂໍ້ມູນສ່ວນບຸກຄົນ',
    category: 'technology',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '인터넷을 이용할 때는 개인정보보호에 유의해야 합니다.',
        romanization: 'Inteoneseul iyonghal ttaeneun gaeinjeongbobohue yuihaeya hamnida.',
        meaning: 'ເວລາໃຊ້ອິນເຕີເນັດຕ້ອງລະມັດລະວັງເລື່ອງການປົກປ້ອງຂໍ້ມູນສ່ວນຕົວ.'
      }
    ]
  },
  {
    id: 'l4_012',
    korean: '자동화',
    romanization: 'jadonghwa',
    meaning: 'ລະບົບອັດຕະໂນມັດ',
    category: 'technology',
    tags: ['work', 'technology'],
    difficulty: 4,
    examples: [
      {
        korean: '공장 자동화로 인해 생산성이 크게 향상되었어요.',
        romanization: 'Gongjang jadonghwaro inhae saengsanseongi keuge hyangsangdoeeosseoyo.',
        meaning: 'ລະບົບອັດຕະໂນມັດໃນໂຮງງານຊ່ວຍເພີ່ມກຳລັງການຜະລິດຢ່າງຫຼວງຫຼາຍ.'
      }
    ]
  },

  // ====== ວັດທະນະທຳ & ສື່ມວນຊົນ (Culture & Media) ======
  {
    id: 'l4_013',
    korean: '한류',
    romanization: 'hallyu',
    meaning: 'ກະແສຄວາມນິຍົມເກົາຫຼີ (Hallyu / K-Wave)',
    category: 'culture',
    tags: ['culture', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: 'K-pop과 한국 드라마를 중심으로 한류가 확산되고 있습니다.',
        romanization: 'K-pop-gwa hanguk deuramareul jungsim-euro hallyuga hwaksandoego itseumnida.',
        meaning: 'ກະແສຮັນລູກຳລັງແຜ່ຂະຫຍາຍ ໂດຍມີ K-pop ແລະ ຊີຣີເກົາຫຼີເປັນຫຼັກ.'
      }
    ]
  },
  {
    id: 'l4_014',
    korean: '다문화가정',
    romanization: 'damunhwagajeong',
    meaning: 'ຄອບຄົວຫຼາຍວັດທະນະທຳ (ຄອບຄົວແຕ່ງດອງຕ່າງຊາດ)',
    category: 'culture',
    tags: ['society', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '다문화가정을 지원하기 위한 프로그램이 많아졌어요.',
        romanization: 'Damunhwagajeongeul jiwonhagi wihan peurogeuraemi manajyeosseoyo.',
        meaning: 'ມີໂຄງການສະໜັບສະໜູນຄອບຄົວຫຼາຍວັດທະນະທຳເພີ່ມຂຶ້ນຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l4_015',
    korean: '대중매체',
    romanization: 'daejungmaeche',
    meaning: 'ສື່ມວນຊົນ (Mass Media)',
    category: 'media',
    tags: ['media', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '대중매체는 사회 여론 형성에 큰 영향을 미칩니다.',
        romanization: 'Daejungmaecheneun sahoe yeoron hyeongseonge keun yeonghyangeul michimnida.',
        meaning: 'ສື່ມວນຊົນມີອິດທິພົນຢ່າງຫຼວງຫຼາຍຕໍ່ການສ້າງຄວາມເຫັນຂອງສັງຄົມ.'
      }
    ]
  },

  // ====== ກິລິຍາ & ການວິເຄາະຂັ້ນສູງ (Advanced Verbs & Analysis) ======
  {
    id: 'l4_016',
    korean: '강조하다',
    romanization: 'gangjohada',
    meaning: 'ເນັ້ນໜັກ, ຢ້ຳ',
    category: 'verbs',
    tags: ['formal', 'work'],
    difficulty: 4,
    examples: [
      {
        korean: '교수님은 기초의 중요성을 거듭 강조하셨어요.',
        romanization: 'Gyosunimeun gichoui jungyoseongeul geodeup gangjohasyeosseoyo.',
        meaning: 'ອາຈານໄດ້ເນັ້ນໜັກເຖິງຄວາມສຳຄັນຂອງພື້ນຖານຊ້ຳແລ້ວຊ້ຳອີກ.'
      }
    ]
  },
  {
    id: 'l4_017',
    korean: '비교하다',
    romanization: 'bigyohada',
    meaning: 'ປຽບທຽບ',
    category: 'verbs',
    tags: ['academic', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '두 제품의 장단점을 꼼꼼히 비교해 보세요.',
        romanization: 'Du jepumui jangdanjeomeul kkomkkomhi bigyohae boseyo.',
        meaning: 'ລອງປຽບທຽບຂໍ້ດີ ແລະ ຂໍ້ເສຍຂອງສິນຄ້າທັງສອງຢ່າງລະອຽດ.'
      }
    ]
  },
  {
    id: 'l4_018',
    korean: '분석하다',
    romanization: 'bunseokhada',
    meaning: 'ວິເຄາະ, ແຍກແຍະ',
    category: 'verbs',
    tags: ['academic', 'work'],
    difficulty: 4,
    examples: [
      {
        korean: '설문조사 결과를 면밀히 분석했습니다.',
        romanization: 'Seolmunjosa gyeolgwareul myeonmilhi bunseokhaetseumnida.',
        meaning: 'ໄດ້ວິເຄາະຜົນການສຳຫຼວດຢ່າງລະອຽດຖີ່ຖ້ວນ.'
      }
    ]
  },
  {
    id: 'l4_019',
    korean: '예방하다',
    romanization: 'yebanghada',
    meaning: 'ປ້ອງກັນ (ພະຍາດ/ອຸບັດຕິເຫດ)',
    category: 'verbs',
    tags: ['health', 'society'],
    difficulty: 4,
    examples: [
      {
        korean: '손을 자주 씻는 것은 감염병을 예방하는 좋은 방법입니다.',
        romanization: 'Soneul jaju ssitneun geoseun gamyeombeongeul yebanghaneun joeun bangbeobimnida.',
        meaning: 'ການລ້າງມືເລື້ອຍໆເປັນວິທີທີ່ດີໃນການປ້ອງກັນພະຍາດຕິດຕໍ່.'
      }
    ]
  },
  {
    id: 'l4_020',
    korean: '발휘하다',
    romanization: 'balhwihada',
    meaning: 'ສະແດງອອກເຖິງ (ຄວາມສາມາດ/ພະລັງ)',
    category: 'verbs',
    tags: ['work', 'topik4'],
    difficulty: 4,
    examples: [
      {
        korean: '시험에서 자신의 실력을 마음껏 발휘했어요.',
        romanization: 'Siheomeseo jasinui sillyeogeul maeumkkeot balhwihaesseoyo.',
        meaning: 'ສະແດງຄວາມສາມາດຂອງຕົນເອງຢ່າງເຕັມທີ່ໃນຫ້ອງສອບເສັງ.'
      }
    ]
  }
]
