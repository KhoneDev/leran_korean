import type { Word } from '@/types'

/**
 * Level 6 — TOPIK 6 (Proficient & Native Mastery / ລະດັບຊ່ຽວຊານຂັ້ນສູງສຸດ)
 * ສຳນວນສຸພາສິດ 4 ຕົວອັກສອນ (사자성어), ວັນນະຄະດີຂັ້ນສູງ, ປັດຊະຍາ, ແລະ ສັບສະເພາະທາງການທູດ & ກົດໝາຍ
 */
export const level6Words: Word[] = [
  // ====== ສຳນວນສຸພາສິດ 4 ຕົວອັກສອນ (사자성어 / 4-Character Idioms) ======
  {
    id: 'l6_001',
    korean: '일석이조',
    romanization: 'ilseok-ijo',
    meaning: 'ຍິງນົກນັດດຽວໄດ້ນົກສອງໂຕ (ເຮັດສິ່ງດຽວໄດ້ປະໂຫຍດສອງຢ່າງ)',
    category: 'idioms',
    tags: ['idioms', 'topik6'],
    difficulty: 6,
    usage: '一石二鳥: ຫີນກ້ອນດຽວໄດ້ນົກສອງໂຕ',
    examples: [
      {
        korean: '자전거로 출퇴근하면 건강도 챙기고 교통비도 아끼니 일석이조예요.',
        romanization: 'Jajeongeoro chultoegeunhamyeon geongangdo chaenggigo gyotongbido akkini ilseok-ijoyeyo.',
        meaning: 'ຖ້າຂີ່ລົດຖີບໄປວຽກ ໄດ້ທັງສຸຂະພາບ ແລະ ປະຢັດຄ່າເດີນທາງ ຖືວ່າເປັນການຍິງນົກນັດດຽວໄດ້ນົກສອງໂຕ.'
      }
    ]
  },
  {
    id: 'l6_002',
    korean: '역지사지',
    romanization: 'yeokjisaji',
    meaning: 'ເອົາໃຈເຂົາມາໃສ່ໃຈເຮົາ (ຄິດໃນມຸມມອງຂອງຄົນອື່ນ)',
    category: 'idioms',
    tags: ['idioms', 'topik6'],
    difficulty: 6,
    usage: '易地思之: ປ່ຽນບ່ອນແລ້ວຄິດເບິ່ງ',
    examples: [
      {
        korean: '갈등을 해결하려면 상대방의 입장에서 역지사지하는 자세가 필요합니다.',
        romanization: 'Galdeungeul haegyeolharyeomyeon sangdaebangui ipjangeseo yeokjisajihaneun jasega piryohamnida.',
        meaning: 'ຖ້າຢາກແກ້ໄຂຄວາມຂັດແຍ່ງ ຕ້ອງມີທັດສະນະເອົາໃຈເຂົາມາໃສ່ໃຈເຮົາ.'
      }
    ]
  },
  {
    id: 'l6_003',
    korean: '작심삼일',
    romanization: 'jaksimsamil',
    meaning: 'ຕັ້ງໃຈໄດ້ແຕ່ 3 ມື້ (ຄວາມຕັ້ງໃຈທີ່ບໍ່ຍືນຍາວ)',
    category: 'idioms',
    tags: ['idioms', 'topik6'],
    difficulty: 6,
    usage: '作心三日: ຕັ້ງໃຈໄດ້ພຽງສາມມື້',
    examples: [
      {
        korean: '새해 결심이 작심삼일로 끝나지 않도록 매일 실천해야 해요.',
        romanization: 'Saehae gyeolsimi jaksimsamillo kkeunnaji antorok maeil silcheonhaeya haeyo.',
        meaning: 'ຕ້ອງລົງມືເຮັດທຸກມື້ ເພື່ອບໍ່ໃຫ້ຄວາມຕັ້ງໃຈປີໃໝ່ຈົບລົງພາຍໃນສາມມື້.'
      }
    ]
  },
  {
    id: 'l6_004',
    korean: '동문서답',
    romanization: 'dongmunseodap',
    meaning: 'ຖາມຢ່າງຕອບຢ່າງ (ຕອບບໍ່ຕົງຄຳຖາມ)',
    category: 'idioms',
    tags: ['idioms', 'topik6'],
    difficulty: 6,
    usage: '東問西答: ຖາມທິດຕາເວັນອອກແຕ່ຕອບທິດຕາເວັນຕົກ',
    examples: [
      {
        korean: '질문과 전혀 상관없는 동문서답을 하면 감점을 받습니다.',
        romanization: 'Jilmun-gwa jeonhyeo sang-gwan-eomneun dongmunseodabeul hamyeon gamjeomeul batseumnida.',
        meaning: 'ຖ້າຕອບບໍ່ຕົງຄຳຖາມຈະຖືກຕັດຄະແນນ.'
      }
    ]
  },
  {
    id: 'l6_005',
    korean: '고진감래',
    romanization: 'gojingamrae',
    meaning: 'ລຳບາກກ່ອນສະບາຍຕາມຫຼັງ (ໝົດທຸກກໍມີສຸກ)',
    category: 'idioms',
    tags: ['idioms', 'topik6'],
    difficulty: 6,
    usage: '苦盡甘來: ຄວາມຂົມຂື່ນໝົດໄປ ຄວາມຫວານຊື່ນກໍມາເຖິງ',
    examples: [
      {
        korean: '열심히 노력한 끝에 마침내 합격했으니 고진감래라 할 수 있습니다.',
        romanization: 'Yeolsimhi noryeokhan kkeute machimnae hapgyeokhaesseuni gojingamraera hal su itseumnida.',
        meaning: 'ຫຼັງຈາກພະຍາຍາມຢ່າງໜັກຈົນສອບເສັງຕິດໃນທີ່ສຸດ ເອີ້ນໄດ້ວ່າໝົດທຸກແລ້ວມີສຸກ.'
      }
    ]
  },

  // ====== ແນວຄິດວັດທະນະທຳ & ປັດຊະຍາເກົາຫຼີ (Korean Cultural & Philosophical Concepts) ======
  {
    id: 'l6_006',
    korean: '눈치',
    romanization: 'nunchi',
    meaning: 'ໄຫວພລິບ, ຄວາມຊ່າງສັງເກດອາລົມ ແລະ ສະຖານະການ',
    category: 'culture',
    tags: ['culture', 'topik6'],
    difficulty: 6,
    usage: 'ຄວາມສາມາດໃນການອ່ານບັນຍາກາດ ແລະ ຄວາມຮູ້ສຶກຂອງຄົນອື່ນໂດຍບໍ່ຕ້ອງເວົ້າ',
    examples: [
      {
        korean: '한국 사회에서는 눈치가 빠르면 대인관계에 큰 도움이 됩니다.',
        romanization: 'Hanguk sahoe-eseoneun nunchiga ppareumyeon daeingwangyee keun doumi doemnida.',
        meaning: 'ໃນສັງຄົມເກົາຫຼີ ຖ້າມີໄຫວພລິບດີຈະຊ່ວຍໃນການສ້າງສາຍພົວພັນໄດ້ຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l6_007',
    korean: '정',
    romanization: 'jeong',
    meaning: 'ຄວາມຜູກພັນ, ຄວາມຮັກໄຄ່, ຄວາມມີນ້ຳໃຈອັນເລິກເຊິ່ງ',
    category: 'culture',
    tags: ['culture', 'emotions'],
    difficulty: 6,
    usage: 'ຄວາມຮູ້ສຶກຜູກພັນທີ່ຝັງເລິກໃນຈິດໃຈຂອງຄົນເກົາຫຼີ',
    examples: [
      {
        korean: '오랫동안 이웃으로 지내며 서로 깊은 정이 들었어요.',
        romanization: 'Oraettong-an i-useuro jinaemyeo seoro gipeun jeongi deureosseoyo.',
        meaning: 'ຍ້ອນຢູ່ເປັນເພື່ອນບ້ານກັນມາດົນ ຈຶ່ງເກີດຄວາມຜູກພັນອັນເລິກເຊິ່ງ.'
      }
    ]
  },
  {
    id: 'l6_008',
    korean: '한',
    romanization: 'han',
    meaning: 'ຄວາມເຈັບປວດຄຽດແຄ້ນທີ່ຝັງເລິກ / ຄວາມໂສກເສົ້າອັນເລິກເຊິ່ງ',
    category: 'culture',
    tags: ['culture', 'literary'],
    difficulty: 6,
    usage: 'ຄວາມຮູ້ສຶກໂສກເສົ້າ ແລະ ຄຽດແຄ້ນທີ່ສະທ້ອນຜ່ານປະຫວັດສາດ ແລະ ວັນນະຄະດີເກົາຫຼີ',
    examples: [
      {
        korean: '한국의 전통 판소리에는 민중의 한이 깃들어 있습니다.',
        romanization: 'Hangugui jeontong pansorieneun minjungui hani gitdeoreo itseumnida.',
        meaning: 'ໃນເພງພື້ນເມືອງພັນໂຊຣີຂອງເກົາຫຼີ ມີຄວາມຮູ້ສຶກອັນເຈັບປວດຂອງປະຊາຊົນຝັງຢູ່.'
      }
    ]
  },

  // ====== ວັນນະຄະດີ & ສິລະປະການປະພັນ (Literary & Rhetoric) ======
  {
    id: 'l6_009',
    korean: '은유',
    romanization: 'eunyu',
    meaning: 'ອຸປະໄມ (Metaphor / ການປຽບທຽບໂດຍກົງ)',
    category: 'literary',
    tags: ['literary', 'academic'],
    difficulty: 6,
    examples: [
      {
        korean: '시인은 인생을 험난한 바다에 은유하여 표현했습니다.',
        romanization: 'Siineun insaeongeul heomnanhan badae eun-yuhayeo pyohyeonhaetseumnida.',
        meaning: 'ນັກກະວີໄດ້ປຽບທຽບຊີວິດມະນຸດຄືກັບທະເລທີ່ປັ່ນປ່ວນ.'
      }
    ]
  },
  {
    id: 'l6_010',
    korean: '풍자',
    romanization: 'pungja',
    meaning: 'ການສຽດສີ, ການລໍ້ລຽນສັງຄົມ (Satire)',
    category: 'literary',
    tags: ['literary', 'culture'],
    difficulty: 6,
    examples: [
      {
        korean: '이 소설은 부패한 지배층을 날카롭게 풍자하고 있습니다.',
        romanization: 'I soseoreun bupaehan jibaecheungeul nalkaropge pungjahago itseumnida.',
        meaning: 'ນະວະນິຍາຍເລື່ອງນີ້ສຽດສີຊົນຊັ້ນປົກຄອງທີ່ສໍ້ລາດບັງຫຼວງຢ່າງເຈັບແສບ.'
      }
    ]
  },
  {
    id: 'l6_011',
    korean: '여운',
    romanization: 'yeoun',
    meaning: 'ຄວາມຮູ້ສຶກຊາບຊຶ້ງທີ່ຍັງຄົງຄ້າງຢູ່ໃນໃຈ',
    category: 'literary',
    tags: ['literary', 'emotions'],
    difficulty: 6,
    examples: [
      {
        korean: '영화의 마지막 장면은 관객들에게 깊은 여운을 남겼습니다.',
        romanization: 'Yeonghwaui majimak jangmyeoneun gwangwaekdeurege gipeun yeouneul namgyeotseumnida.',
        meaning: 'ສາກສຸດທ້າຍຂອງໜັງໄດ້ປະຄວາມຮູ້ສຶກຊາບຊຶ້ງອັນເລິກເຊິ່ງໄວ້ໃນໃຈຂອງຜູ້ຊົມ.'
      }
    ]
  },

  // ====== ພາສາທາງການທູດ & ກົດໝາຍສາກົນ (Diplomatic & Legal Terminology) ======
  {
    id: 'l6_012',
    korean: '상호주의',
    romanization: 'sanghojuui',
    meaning: 'ຫຼັກການຕ່າງຕອບແທນ (Reciprocity)',
    category: 'formal',
    tags: ['politics', 'topik6'],
    difficulty: 6,
    examples: [
      {
        korean: '국제 외교 관례에서는 상호주의 원칙이 철저히 적용됩니다.',
        romanization: 'Gukje oegyo gwanrye-eseoneun sanghojuui wonchigi cheoljeohi jeok-yongdoemnida.',
        meaning: 'ໃນທຳນຽມການທູດສາກົນ ຫຼັກການຕ່າງຕອບແທນຈະຖືກນຳໃຊ້ຢ່າງເຄັ່ງຄັດ.'
      }
    ]
  },
  {
    id: 'l6_013',
    korean: '보편타당성',
    romanization: 'bopyeontadangseong',
    meaning: 'ຄວາມຖືກຕ້ອງຊອບທຳທີ່ເປັນສາກົນ (Universal Validity)',
    category: 'formal',
    tags: ['academic', 'topik6'],
    difficulty: 6,
    examples: [
      {
        korean: '인권의 가치는 시대와 장소를 초월하는 보편타당성을 지닙니다.',
        romanization: 'Ingwonui gachineun sidaewa jangsoreul chowolhaneun bopyeontadangseongeul jinimnida.',
        meaning: 'ຄຸນຄ່າຂອງສິດທິມະນຸດມີຄວາມຖືກຕ້ອງເປັນສາກົນເໜືອກວ່າການເວລາ ແລະ ສະຖານທີ່.'
      }
    ]
  },
  {
    id: 'l6_014',
    korean: '불가역적',
    romanization: 'bulgayeokjeok',
    meaning: 'ທີ່ບໍ່ສາມາດຫວນຄືນສູ່ສະພາບເດີມໄດ້ (Irreversible)',
    category: 'formal',
    tags: ['politics', 'topik6'],
    difficulty: 6,
    examples: [
      {
        korean: '평화 협정은 되돌릴 수 없는 불가역적인 조치로 이어져야 합니다.',
        romanization: 'Pyeonghwa hyeopjeongeun doedollil su eomneun bulgayeokjeogin jochiro ieojyeoya hamnida.',
        meaning: 'ສົນທິສັນຍາສັນຕິພາບຕ້ອງນຳໄປສູ່ມາດຕະການທີ່ບໍ່ສາມາດຫວນຄືນໄດ້.'
      }
    ]
  },
  {
    id: 'l6_015',
    korean: '귀추가 주목되다',
    romanization: 'gwichuga jumokdoeda',
    meaning: 'ເປັນທີ່ຈັບຕາເບິ່ງວ່າຈະລົງເອງແນວໃດ',
    category: 'idioms',
    tags: ['news', 'formal'],
    difficulty: 6,
    examples: [
      {
        korean: '이번 정상회담의 결과에 국제사회의 귀추가 주목되고 있습니다.',
        romanization: 'Ibeon jeongsanghoedamui gyeolgwae gukjesahoeui gwichuga jumokdoego itseumnida.',
        meaning: 'ຜົນຂອງກອງປະຊຸມສຸດຍອດຄັ້ງນີ້ ກຳລັງເປັນທີ່ຈັບຕາມອງຂອງປະຊາຄົມສາກົນ.'
      }
    ]
  }
]
