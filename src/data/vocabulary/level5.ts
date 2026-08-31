import type { Word } from '@/types'

/**
 * Level 5 — TOPIK 5 (Advanced Low / ລະດັບສູງຂັ້ນຕົ້ນ)
 * ການເມືອງ & ກົດໝາຍ, ເສດຖະສາດ & ການເງິນ, ວິຊາການ & ບົດຄວາມວິໄຈ, ປັດຊະຍາ ແລະ ທຸລະກິດສາກົນ
 */
export const level5Words: Word[] = [
  // ====== ການເມືອງ, ກົດໝາຍ & ສິດທິ (Politics, Law & Rights) ======
  {
    id: 'l5_001',
    korean: '민주주의',
    romanization: 'minjujuui',
    meaning: 'ປະຊາທິປະໄຕ',
    category: 'politics',
    tags: ['politics', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '민주주의 사회에서는 시민의 참여가 핵심입니다.',
        romanization: 'Minjujuui sahoe-eseoneun siminui chamyeoga haeksimimnida.',
        meaning: 'ໃນສັງຄົມປະຊາທິປະໄຕ ການມີສ່ວນຮ່ວມຂອງພົນລະເມືອງແມ່ນຫົວໃຈຫຼັກ.'
      }
    ]
  },
  {
    id: 'l5_002',
    korean: '헌법',
    romanization: 'heonbeop',
    meaning: 'ລັດຖະທຳມະນູນ',
    category: 'politics',
    tags: ['politics', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '헌법은 국가의 기본 법률이자 최고의 규범입니다.',
        romanization: 'Heonbeobeun gukkaui gibon beomnyurija choegoui gyubeomimnida.',
        meaning: 'ລັດຖະທຳມະນູນເປັນກົດໝາຍພື້ນຖານ ແລະ ເປັນມາດຕະຖານສູງສຸດຂອງຊາດ.'
      }
    ]
  },
  {
    id: 'l5_003',
    korean: '인권',
    romanization: 'ingwon',
    meaning: 'ສິດທິມະນຸດ',
    category: 'politics',
    tags: ['society', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '모든 인간은 태어날 때부터 자유롭고 평등한 인권을 가집니다.',
        romanization: 'Modeun inganeun tae-eonal ttaebuteo jayuropgo pyeongdeunghan ingwoneul gajimnida.',
        meaning: 'ມະນຸດທຸກຄົນເກີດມາມີສິດທິມະນຸດທີ່ເສລີ ແລະ ສະເໝີພາບກັນ.'
      }
    ]
  },
  {
    id: 'l5_004',
    korean: '외교관계',
    romanization: 'oegyogwangye',
    meaning: 'ການພົວພັນທາງການທູດ',
    category: 'politics',
    tags: ['politics', 'news'],
    difficulty: 5,
    examples: [
      {
        korean: '양국은 공식적인 외교관계를 수립하기로 합의했습니다.',
        romanization: 'Yanggugeun gongsikjeogin oegyogwangyereul suriphagiro habuihaetseumnida.',
        meaning: 'ສອງປະເທດໄດ້ຕົກລົງສ້າງຕັ້ງການພົວພັນທາງການທູດຢ່າງເປັນທາງການ.'
      }
    ]
  },
  {
    id: 'l5_005',
    korean: '재판',
    romanization: 'jaepan',
    meaning: 'ການພິພາກສາຄະດີ, ການໄຕ່ສວນໃນສານ',
    category: 'politics',
    tags: ['society', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '법원에서 공정한 재판을 받을 권리가 보장되어야 합니다.',
        romanization: 'Beobwoneseo gongjeonghan jaepaneul badeul gwolliga bojangdoeeoya hamnida.',
        meaning: 'ສິດທິໃນການໄດ້ຮັບການພິພາກສາຢ່າງຍຸຕິທຳໃນສານຕ້ອງໄດ້ຮັບການຄຸ້ມຄອງ.'
      }
    ]
  },

  // ====== ເສດຖະສາດ, ການເງິນ & ທຸລະກິດ (Economics & Business) ======
  {
    id: 'l5_006',
    korean: '금리인상',
    romanization: 'geumri-insang',
    meaning: 'ການຂຶ້ນອັດຕາດອກເບ້ຍ',
    category: 'economy',
    tags: ['economy', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '중앙은행의 금리인상 발표 이후 주식시장이 출렁였습니다.',
        romanization: 'Jung-angeunhaengui geumri-insang balpyo ihu jusiksijangi chulleong-yeosseoyo.',
        meaning: 'ຫຼັງຈາກທະນາຄານກາງປະກາດຂຶ້ນດອກເບ້ຍ ຕະຫຼາດຮຸ້ນກໍມີຄວາມຜັນຜວນ.'
      }
    ]
  },
  {
    id: 'l5_007',
    korean: '환율변동',
    romanization: 'hwanyulbyeondong',
    meaning: 'ຄວາມຜັນຜວນຂອງອັດຕາແລກປ່ຽນເງິນຕາ',
    category: 'economy',
    tags: ['economy', 'business'],
    difficulty: 5,
    examples: [
      {
        korean: '환율변동에 대비하여 수출 기업들이 대책을 마련하고 있습니다.',
        romanization: 'Hwanyulbyeondong-e daebihayeo suchul gieopdeuri daechaegeul maryeonhago itseumnida.',
        meaning: 'ບັນດາບໍລິສັດສົ່ງອອກກຳລັງກຽມມາດຕະການຮັບມືກັບຄວາມຜັນຜວນຂອງອັດຕາແລກປ່ຽນ.'
      }
    ]
  },
  {
    id: 'l5_008',
    korean: '투자유치',
    romanization: 'tujayuchi',
    meaning: 'ການດຶງດູດການລົງທຶນ',
    category: 'business',
    tags: ['economy', 'business'],
    difficulty: 5,
    examples: [
      {
        korean: '스타트업이 대규모 해외 투자유치에 성공했습니다.',
        romanization: 'Seutateueobi daegyumo haeoe tujayuchie seonggonghaetseumnida.',
        meaning: 'ທຸລະກິດ Startup ປະສົບຜົນສຳເລັດໃນການດຶງດູດການລົງທຶນຂະໜາດໃຫຍ່ຈາກຕ່າງປະເທດ.'
      }
    ]
  },
  {
    id: 'l5_009',
    korean: '구조조정',
    romanization: 'gujojojeong',
    meaning: 'ການປັບໂຄງສ້າງອົງກອນ / ການປັບປຸງໂຄງສ້າງເສດຖະກິດ',
    category: 'business',
    tags: ['work', 'economy'],
    difficulty: 5,
    examples: [
      {
        korean: '회사는 경영 위기를 극복하기 위해 대대적인 구조조정을 단행했습니다.',
        romanization: 'Hoesaneun gyeong-yeong wigireul geukbokhagi wihae daedaejeogin gujojojeongeul danhaenghaetseumnida.',
        meaning: 'ບໍລິສັດໄດ້ດຳເນີນການປັບໂຄງສ້າງຄັ້ງໃຫຍ່ເພື່ອຜ່ານຜ່າວິກິດການບໍລິຫານ.'
      }
    ]
  },

  // ====== ວິຊາການ, ວິໄຈ & ປັດຊະຍາ (Academic, Research & Philosophy) ======
  {
    id: 'l5_010',
    korean: '가설검증',
    romanization: 'gaseolgeomjeung',
    meaning: 'ການທົດສອບສົມມຸດຕິຖານ',
    category: 'academic',
    tags: ['academic', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '실험 데이터를 바탕으로 연구 가설을 검증했습니다.',
        romanization: 'Silheom deiteoreul batangeuro yeon-gu gaseoreul geomjeunghaetseumnida.',
        meaning: 'ໄດ້ທົດສອບສົມມຸດຕິຖານການວິໄຈໂດຍອີງໃສ່ຂໍ້ມູນການທົດລອງ.'
      }
    ]
  },
  {
    id: 'l5_011',
    korean: '학술논문',
    romanization: 'haksullonmun',
    meaning: 'ບົດຄວາມວິຊາການ, ວິທະຍານິພົນ',
    category: 'academic',
    tags: ['education', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '저명한 국제 학술지에 논문이 게재되었습니다.',
        romanization: 'Jeomyeonghan gukje haksuljie nonmuni gejaedoeeotseumnida.',
        meaning: 'ບົດຄວາມວິຊາການໄດ້ຮັບການຕີພິມໃນວາລະສານວິຊາການລະດັບສາກົນທີ່ມີຊື່ສຽງ.'
      }
    ]
  },
  {
    id: 'l5_012',
    korean: '객관성',
    romanization: 'gaekgwanseong',
    meaning: 'ຄວາມພາວະວິໄສ (Objectivity / ຄວາມເປັນກາງ)',
    category: 'academic',
    tags: ['academic', 'formal'],
    difficulty: 5,
    examples: [
      {
        korean: '연구 결과의 신뢰도를 높이기 위해 객관성을 유지해야 합니다.',
        romanization: 'Yeon-gu gyeolgwani sinroedoreul nopigi wihae gaekgwanseongeul yujihaeya hamnida.',
        meaning: 'ຕ້ອງຮັກສາຄວາມເປັນກາງເພື່ອເພີ່ມຄວາມໜ້າເຊື່ອຖືຂອງຜົນການວິໄຈ.'
      }
    ]
  },
  {
    id: 'l5_013',
    korean: '주관적',
    romanization: 'jugwanjeok',
    meaning: 'ຕາມຄວາມຮູ້ສຶກສ່ວນຕົວ (Subjective)',
    category: 'academic',
    tags: ['academic'],
    difficulty: 5,
    examples: [
      {
        korean: '개인의 주관적인 감정에 치우치지 않고 판단해야 해요.',
        romanization: 'Gaeinui jugwanjeogin gamjeonge chiuchiji anko pandanhaeya haeyo.',
        meaning: 'ຕ້ອງຕັດສິນໂດຍບໍ່ເອື່ອຍອີງໃສ່ຄວາມຮູ້ສຶກສ່ວນຕົວ.'
      }
    ]
  },

  // ====== ຄຳເຊື່ອມ & ຄຳວິເສດຂັ້ນສູງ (Advanced Discourse & Connectors) ======
  {
    id: 'l5_014',
    korean: '불가피하다',
    romanization: 'bulgapihada',
    meaning: 'ຫຼີກລ່ຽງບໍ່ໄດ້, ຈຳເປັນຕ້ອງເກີດຂຶ້ນ',
    category: 'adjectives',
    tags: ['formal', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '예산 삭감에 따른 사업 축소가 불가피합니다.',
        romanization: 'Yesan sakkame ttareun sa-eop chuksoga bulgapihamnida.',
        meaning: 'ການຫຼຸດຂະໜາດໂຄງການຍ້ອນການຕັດງົບປະມານແມ່ນຫຼີກລ່ຽງບໍ່ໄດ້.'
      }
    ]
  },
  {
    id: 'l5_015',
    korean: '도모하다',
    romanization: 'domohada',
    meaning: 'ມຸ່ງຫວັງ, ວາງແຜນເພື່ອໃຫ້ບັນລຸ',
    category: 'verbs',
    tags: ['formal', 'topik5'],
    difficulty: 5,
    examples: [
      {
        korean: '양국 간의 협력을 강화하고 공동 번영을 도모하기로 했습니다.',
        romanization: 'Yangguk ganui hyeobryeogeul ganghwahago gongdong beon-yeongeul domohagiro haetseumnida.',
        meaning: 'ໄດ້ຕົກລົງເພີ່ມທະວີການຮ່ວມມື ແລະ ສົ່ງເສີມຄວາມຈະເລີນຮຸ່ງເຮືອງຮ່ວມກັນ.'
      }
    ]
  }
]
