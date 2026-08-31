import type { Word } from '@/types'

/**
 * Level 2 — TOPIK 2 (Elementary High / ລະດັບຕົ້ນຂັ້ນສູງ)
 * ຄຳສັບຊີວິດປະຈຳວັນ, ການເດີນທາງ, ຊື້ເຄື່ອງ, ໂຮງໝໍ, ທະນາຄານ, ການເຮັດວຽກ, ອາລົມ ແລະ ປະໂຫຍກສື່ສານ
 */
export const level2Words: Word[] = [
  // ====== ກິລິຍາ (Verbs) ======
  {
    id: 'l2_001',
    korean: '시작하다',
    romanization: 'sijakhada',
    meaning: 'ເລີ່ມຕົ້ນ',
    category: 'verbs',
    tags: ['daily', 'topik2'],
    difficulty: 2,
    usage: 'ໃຊ້ບອກການເລີ່ມຕົ້ນກິດຈະກຳ ຫຼື ເຫດການ',
    examples: [
      {
        korean: '수업이 곧 시작해요.',
        romanization: 'Sueobi got sijakhaeyo.',
        meaning: 'ຫ້ອງຮຽນກຳລັງຈະເລີ່ມຕົ້ນແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_002',
    korean: '끝나다',
    romanization: 'kkeunnada',
    meaning: 'ສິ້ນສຸດ, ແລ້ວ',
    category: 'verbs',
    tags: ['daily', 'topik2'],
    difficulty: 2,
    examples: [
      {
        korean: '영화가 몇 시에 끝나요?',
        romanization: 'Yeonghwaga myeot sie kkeunnayo?',
        meaning: 'ໜັງຈະຈົບຈັກໂມງ?'
      }
    ]
  },
  {
    id: 'l2_003',
    korean: '계속하다',
    romanization: 'gyesokhada',
    meaning: 'ເຮັດຕໍ່ໄປ, ດຳເນີນຕໍ່',
    category: 'verbs',
    tags: ['daily', 'topik2'],
    difficulty: 2,
    examples: [
      {
        korean: '한국어 공부를 계속할 거예요.',
        romanization: 'Hangugeo gongbureul gyesokhal geoyeyo.',
        meaning: 'ຂ້ອຍຈະຮຽນພາສາເກົາຫຼີຕໍ່ໄປ.'
      }
    ]
  },
  {
    id: 'l2_004',
    korean: '바꾸다',
    romanization: 'bakguda',
    meaning: 'ປ່ຽນ, ແລກປ່ຽນ',
    category: 'verbs',
    tags: ['daily', 'shopping'],
    difficulty: 2,
    examples: [
      {
        korean: '옷을 다른 사이즈로 바꾸고 싶어요.',
        romanization: 'Oseul dareun saijeuro bakgugo sipeoyo.',
        meaning: 'ຂ້ອຍຢາກປ່ຽນເສື້ອຜ້າເປັນໄຊສ໌ອື່ນ.'
      }
    ]
  },
  {
    id: 'l2_005',
    korean: '고치다',
    romanization: 'gochida',
    meaning: 'ສ້ອມແປງ, ແກ້ໄຂ',
    category: 'verbs',
    tags: ['daily', 'work'],
    difficulty: 2,
    examples: [
      {
        korean: '스마트폰을 고쳤어요.',
        romanization: 'Seumateuponeul gochyeosseoyo.',
        meaning: 'ຂ້ອຍສ້ອມແປງສະມາດໂຟນແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_006',
    korean: '준비하다',
    romanization: 'junbihada',
    meaning: 'ກຽມພ້ອມ, ກະກຽມ',
    category: 'verbs',
    tags: ['daily', 'work'],
    difficulty: 2,
    examples: [
      {
        korean: '여행 준비를 다 했어요.',
        romanization: 'Yeohaeng junbireul da haesseoyo.',
        meaning: 'ກຽມຕົວໄປທ່ຽວຮຽບຮ້ອຍແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_007',
    korean: '기억하다',
    romanization: 'gieokhada',
    meaning: 'ຈື່, ຈົດຈຳ',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '그 사람 이름을 기억해요?',
        romanization: 'Geu saram ireumeul gieokhaeyo?',
        meaning: 'ເຈົ້າຈື່ຊື່ຂອງລາວໄດ້ບໍ່?'
      }
    ]
  },
  {
    id: 'l2_008',
    korean: '잊어버리다',
    romanization: 'ijeobeorida',
    meaning: 'ລືມໝົດແລ້ວ',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '약속 시간을 잊어버렸어요.',
        romanization: 'Yaksok siganeul ijeobeoryeosseoyo.',
        meaning: 'ຂ້ອຍລືມເວລານັດໝາຍແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_009',
    korean: '설명하다',
    romanization: 'seolmyeonghada',
    meaning: 'ອະທິບາຍ',
    category: 'verbs',
    tags: ['work', 'education'],
    difficulty: 2,
    examples: [
      {
        korean: '선생님께서 문법을 쉽게 설명해 주셨어요.',
        romanization: 'Seonsaengnimkkeseo munbeobeul swipge seolmyeonghae jusyeosseoyo.',
        meaning: 'ອາຈານອະທິບາຍໄວຍາກອນໃຫ້ເຂົ້າໃຈງ່າຍ.'
      }
    ]
  },
  {
    id: 'l2_010',
    korean: '약속하다',
    romanization: 'yaksokhada',
    meaning: 'ນັດໝາຍ, ສັນຍາ',
    category: 'verbs',
    tags: ['daily', 'relationships'],
    difficulty: 2,
    examples: [
      {
        korean: '내일 친구와 만나기로 약속했어요.',
        romanization: 'Naeil chinguwa mannagiro yaksokhaesseoyo.',
        meaning: 'ຂ້ອຍນັດພົບກັບໝູ່ໃນມື້ອື່ນ.'
      }
    ]
  },
  {
    id: 'l2_011',
    korean: '도착하다',
    romanization: 'dochakhada',
    meaning: 'ຮອດ, ມາເຖິງ',
    category: 'verbs',
    tags: ['transport', 'travel'],
    difficulty: 2,
    examples: [
      {
        korean: '공항에 무사히 도착했습니다.',
        romanization: 'Gonghange musahi dochakhaetseumnida.',
        meaning: 'ຮອດສະໜາມບິນຢ່າງປອດໄພແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_012',
    korean: '출발하다',
    romanization: 'chulbalhada',
    meaning: 'ອອກເດີນທາງ',
    category: 'verbs',
    tags: ['transport', 'travel'],
    difficulty: 2,
    examples: [
      {
        korean: '기차가 정시에 출발합니다.',
        romanization: 'Gichaga jeongsie chulbalhamnida.',
        meaning: 'ລົດໄຟອອກເດີນທາງຕົງເວລາ.'
      }
    ]
  },
  {
    id: 'l2_013',
    korean: '갈아타다',
    romanization: 'garatada',
    meaning: 'ປ່ຽນຂີ່ລົດ/ຕໍ່ສາຍລົດ',
    category: 'verbs',
    tags: ['transport'],
    difficulty: 2,
    examples: [
      {
        korean: '서울역에서 1호선으로 갈아타세요.',
        romanization: 'Seoulyeogeseo ilhoseoneuro garataseyo.',
        meaning: 'ກະລຸນາປ່ຽນໄປຂີ່ສາຍ 1 ຢູ່ສະຖານີໂຊລ.'
      }
    ]
  },
  {
    id: 'l2_014',
    korean: '초대하다',
    romanization: 'chodaehada',
    meaning: 'ເຊື້ອເຊີນ, ເຊີນ',
    category: 'verbs',
    tags: ['relationships', 'daily'],
    difficulty: 2,
    examples: [
      {
        korean: '생일 파티에 친구들을 초대했어요.',
        romanization: 'Saengil patie chingudeureul chodaehaesseoyo.',
        meaning: 'ຂ້ອຍເຊີນໝູ່ມາງານວັນເກີດ.'
      }
    ]
  },
  {
    id: 'l2_015',
    korean: '예약하다',
    romanization: 'yeyakhada',
    meaning: 'ຈອງ (ໂຮງແຮມ/ຮ້ານອາຫານ/ປີ້)',
    category: 'verbs',
    tags: ['travel', 'shopping'],
    difficulty: 2,
    examples: [
      {
        korean: '식당에 자리를 예약했어요.',
        romanization: 'Sikdange jarireul yeyakhaesseoyo.',
        meaning: 'ຂ້ອຍຈອງບ່ອນນັ່ງຢູ່ຮ້ານອາຫານແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_016',
    korean: '부탁하다',
    romanization: 'butakhada',
    meaning: 'ຂໍຮ້ອງ, ຝາກຝັງ',
    category: 'verbs',
    tags: ['daily', 'polite'],
    difficulty: 2,
    examples: [
      {
        korean: '도움을 좀 부탁드려도 될까요?',
        romanization: 'Doumeul jom butakdeuryeodo doelkkayo?',
        meaning: 'ຂ້ອຍຂໍຮ້ອງໃຫ້ຊ່ວຍເຫຼືອໜ້ອຍໜຶ່ງໄດ້ບໍ່?'
      }
    ]
  },
  {
    id: 'l2_017',
    korean: '도와주다',
    romanization: 'dowajuda',
    meaning: 'ຊ່ວຍເຫຼືອ',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '짐 드는 것을 도와주셨어요.',
        romanization: 'Jim deuneun geoseul dowajusyeosseoyo.',
        meaning: 'ລາວຊ່ວຍຍົກກະເປົາເຄື່ອງ.'
      }
    ]
  },
  {
    id: 'l2_018',
    korean: '빌리다',
    romanization: 'billida',
    meaning: 'ຢືມ',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '도서관에서 책을 빌렸어요.',
        romanization: 'Doseogwaneseo chaegeul billyeosseoyo.',
        meaning: 'ຂ້ອຍຢືມປຶ້ມຈາກຫໍສະໝຸດ.'
      }
    ]
  },
  {
    id: 'l2_019',
    korean: '돌려주다',
    romanization: 'dollyeojuda',
    meaning: 'ສົ່ງຄືນ, ເອົາໄປຄືນ',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '내일까지 돈을 돌려줄게요.',
        romanization: 'Naeilkkaji doneul dollyeojulgeyo.',
        meaning: 'ຂ້ອຍຈະເອົາເງິນມາຄືນໃຫ້ພາຍໃນມື້ອື່ນ.'
      }
    ]
  },
  {
    id: 'l2_020',
    korean: '청소하다',
    romanization: 'cheongsohada',
    meaning: 'ອະນາໄມ, ທຳຄວາມສະອາດ',
    category: 'verbs',
    tags: ['home', 'daily'],
    difficulty: 2,
    examples: [
      {
        korean: '주말에 방을 깨끗이 청소했어요.',
        romanization: 'Jumare bangeul kkaekkeusi cheongsohaesseoyo.',
        meaning: 'ທ້າຍອາທິດຂ້ອຍທຳຄວາມສະອາດຫ້ອງຢ່າງສະອາດ.'
      }
    ]
  },

  // ====== ຄຸນສັບ (Adjectives) ======
  {
    id: 'l2_021',
    korean: '건강하다',
    romanization: 'geonganghada',
    meaning: 'ສຸຂະພາບແຂງແຮງ',
    category: 'adjectives',
    tags: ['health'],
    difficulty: 2,
    examples: [
      {
        korean: '운동을 해서 몸이 건강해요.',
        romanization: 'Undongeul haeseo momi geonganghaeyo.',
        meaning: 'ອອກກຳລັງກາຍເຮັດໃຫ້ຮ່າງກາຍແຂງແຮງ.'
      }
    ]
  },
  {
    id: 'l2_022',
    korean: '불편하다',
    romanization: 'bulpyeonhada',
    meaning: 'ບໍ່ສະດວກ, ອຶດອັດ',
    category: 'adjectives',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '이 신발은 조금 불편해요.',
        romanization: 'I sinbareun jogeum bulpyeonhaeyo.',
        meaning: 'ເກີບຄູ່ນີ້ໃສ່ບໍ່ຄ່ອຍສະດວກປານໃດ.'
      }
    ]
  },
  {
    id: 'l2_023',
    korean: '안전하다',
    romanization: 'anjeonhada',
    meaning: 'ປອດໄພ',
    category: 'adjectives',
    tags: ['daily', 'travel'],
    difficulty: 2,
    examples: [
      {
        korean: '밤에도 거리가 안전해요.',
        romanization: 'Bamedo georiga anjeonhaeyo.',
        meaning: 'ຕອນກາງຄືນຖະໜົນຫົນທາງກໍຍັງປອດໄພ.'
      }
    ]
  },
  {
    id: 'l2_024',
    korean: '위험하다',
    romanization: 'wiheomhada',
    meaning: 'ອັນຕະລາຍ',
    category: 'adjectives',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '길을 건널 때 스마트폰을 보면 위험해요.',
        romanization: 'Gireul geonneol ttae seumateuponeul bomyeon wiheomhaeyo.',
        meaning: 'ເວລາຂ້າມທາງຖ້າເບິ່ງໂທລະສັບແມ່ນອັນຕະລາຍ.'
      }
    ]
  },
  {
    id: 'l2_025',
    korean: '복잡하다',
    romanization: 'bokjaphada',
    meaning: 'ສັບສົນ, ແອອັດ, ຫຍຸ້ງຍາກ',
    category: 'adjectives',
    tags: ['places', 'transport'],
    difficulty: 2,
    examples: [
      {
        korean: '퇴근 시간에는 지하철이 아주 복잡해요.',
        romanization: 'Toegeun siganeneun jihacheori aju bokjaphaeyo.',
        meaning: 'ເວລາເລີກວຽກລົດໄຟໃຕ້ດິນແອອັດຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l2_026',
    korean: '단순하다',
    romanization: 'dansunhada',
    meaning: 'ລຽບງ່າຍ, ບໍ່ຊັບຊ້ອນ',
    category: 'adjectives',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '이 문제는 생각보다 단순해요.',
        romanization: 'I munjeneun saenggakboda dansunhaeyo.',
        meaning: 'ບັນຫານີ້ງ່າຍດາຍກວ່າທີ່ຄິດ.'
      }
    ]
  },
  {
    id: 'l2_027',
    korean: '조용하다',
    romanization: 'joyonghada',
    meaning: 'ມິດງຽບ, ງຽບສະຫງົບ',
    category: 'adjectives',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '도서관은 항상 조용해요.',
        romanization: 'Doseogwaneun hangsang joyonghaeyo.',
        meaning: 'ຫໍສະໝຸດມິດງຽບສະເໝີ.'
      }
    ]
  },
  {
    id: 'l2_028',
    korean: '시끄럽다',
    romanization: 'sikkeureopda',
    meaning: 'ສຽງດັງ, ໜວກຫູ',
    category: 'adjectives',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '밖이 너무 시끄러워서 잠을 못 잤어요.',
        romanization: 'Bakki neomu sikkeureowoseo jameul mot jasseoyo.',
        meaning: 'ຂ້າງນອກສຽງດັງຫຼາຍຈົນນອນບໍ່ຫຼັບ.'
      }
    ]
  },
  {
    id: 'l2_029',
    korean: '친절하다',
    romanization: 'chinjeolhada',
    meaning: 'ໃຈດີ, ສຸພາບ, ມີໄມຕີຈິດ',
    category: 'adjectives',
    tags: ['people'],
    difficulty: 2,
    examples: [
      {
        korean: '가게 직원이 아주 친절해요.',
        romanization: 'Gage jigwoni aju chinjeolhaeyo.',
        meaning: 'ພະນັກງານຮ້ານໃຈດີຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l2_030',
    korean: '유명하다',
    romanization: 'yumyeonghada',
    meaning: 'ມີຊື່ສຽງ, ໂດ່ງດັງ',
    category: 'adjectives',
    tags: ['culture', 'travel'],
    difficulty: 2,
    examples: [
      {
        korean: '이 식당은 김치찌개로 유명해요.',
        romanization: 'I sikdangeun gimchijjigaero yumyeonghaeyo.',
        meaning: 'ຮ້ານອາຫານນີ້ມີຊື່ສຽງເລື່ອງແກງກິມຈິ.'
      }
    ]
  },

  // ====== ການເດີນທາງ & ຄົມມະນາຄົມ (Transport & Travel) ======
  {
    id: 'l2_031',
    korean: '비행기',
    romanization: 'bihaenggi',
    meaning: 'ຍົນ, ເຮືອບິນ',
    category: 'transport',
    tags: ['travel'],
    difficulty: 2,
    examples: [
      {
        korean: '비행기 표를 예매했어요.',
        romanization: 'Bihaenggi pyoreul yemaehaesseoyo.',
        meaning: 'ຂ້ອຍຈອງປີ້ຍົນແລ້ວ.'
      }
    ]
  },
  {
    id: 'l2_032',
    korean: '지하철역',
    romanization: 'jihacheolyeok',
    meaning: 'ສະຖານີລົດໄຟໃຕ້ດິນ',
    category: 'transport',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '지하철역 3번 출구에서 만나요.',
        romanization: 'Jihacheolyeok sambeon chulgueseo mannayo.',
        meaning: 'ພົບກັນຢູ່ທາງອອກ 3 ຂອງສະຖານີລົດໄຟໃຕ້ດິນ.'
      }
    ]
  },
  {
    id: 'l2_033',
    korean: '교통카드',
    romanization: 'gyotongkadeu',
    meaning: 'ບັດໂດຍສານ (T-money)',
    category: 'transport',
    tags: ['travel'],
    difficulty: 2,
    examples: [
      {
        korean: '편의점에서 교통카드를 충전했어요.',
        romanization: 'Pyeonuijeomeseo gyotongkadeureul chungjeonhaesseoyo.',
        meaning: 'ຂ້ອຍເຕີມເງິນບັດໂດຍສານຢູ່ຮ້ານສະດວກຊື້.'
      }
    ]
  },
  {
    id: 'l2_034',
    korean: '정류장',
    romanization: 'jeongnyujang',
    meaning: 'ປ້າຍລົດເມ',
    category: 'transport',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '버스 정류장이 어디에 있어요?',
        romanization: 'Beoseu jeongnyujangi eodie isseoyo?',
        meaning: 'ປ້າຍລົດເມຢູ່ໃສ?'
      }
    ]
  },
  {
    id: 'l2_035',
    korean: '요금',
    romanization: 'yogeum',
    meaning: 'ຄ່າທຳນຽມ, ຄ່າໂດຍສານ',
    category: 'transport',
    tags: ['shopping'],
    difficulty: 2,
    examples: [
      {
        korean: '택시 요금이 얼마 나왔어요?',
        romanization: 'Taeksi yogeumi eolma nawasseoyo?',
        meaning: 'ຄ່າແທັກຊີເທົ່າໃດ?'
      }
    ]
  },

  // ====== ສະຖານທີ່ & ການບໍລິການ (Places & Services) ======
  {
    id: 'l2_036',
    korean: '은행',
    romanization: 'eunhaeng',
    meaning: 'ທະນາຄານ',
    category: 'places',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '은행에서 돈을 찾았어요.',
        romanization: 'Eunhaeng-eseo doneul chajasseoyo.',
        meaning: 'ຂ້ອຍຖອນເງິນຢູ່ທະນາຄານ.'
      }
    ]
  },
  {
    id: 'l2_037',
    korean: '우체국',
    romanization: 'ucheguk',
    meaning: 'ໄປສະນີ',
    category: 'places',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '우체국에서 소포를 보냈어요.',
        romanization: 'Uchegugeseo soporeul bonaesseoyo.',
        meaning: 'ຂ້ອຍສົ່ງພັດສະດຸຢູ່ໄປສະນີ.'
      }
    ]
  },
  {
    id: 'l2_038',
    korean: '약국',
    romanization: 'yakguk',
    meaning: 'ຮ້ານຂາຍຢາ',
    category: 'health',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '약국에서 감기약을 샀어요.',
        romanization: 'Yakgugeseo gamgiyageul sasseoyo.',
        meaning: 'ຂ້ອຍຊື້ຢາແກ້ຫວັດຢູ່ຮ້ານຂາຍຢາ.'
      }
    ]
  },
  {
    id: 'l2_039',
    korean: '병원',
    romanization: 'byeongwon',
    meaning: 'ໂຮງໝໍ',
    category: 'health',
    tags: ['places'],
    difficulty: 2,
    examples: [
      {
        korean: '배가 아파서 병원에 갔어요.',
        romanization: 'Baega apaseo byeongwone gasseoyo.',
        meaning: 'ເຈັບທ້ອງເລີຍໄປໂຮງໝໍ.'
      }
    ]
  },
  {
    id: 'l2_040',
    korean: '미용실',
    romanization: 'miyongsil',
    meaning: 'ຮ້ານຕັດຜົມ, ຮ້ານເສີມສວຍ',
    category: 'places',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '미용실에서 머리를 잘랐어요.',
        romanization: 'Miyongsireseo meorireul jallasseoyo.',
        meaning: 'ຂ້ອຍຕັດຜົມຢູ່ຮ້ານຕັດຜົມ.'
      }
    ]
  },

  // ====== ອາຫານ & ຊື້ເຄື່ອງ (Food & Shopping) ======
  {
    id: 'l2_041',
    korean: '메뉴판',
    romanization: 'menyupan',
    meaning: 'ລາຍການອາຫານ, ເມນູ',
    category: 'food',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '메뉴판 좀 보여주세요.',
        romanization: 'Menyupan jom boyeojuseyo.',
        meaning: 'ຂໍເບິ່ງເມນູແດ່.'
      }
    ]
  },
  {
    id: 'l2_042',
    korean: '주문하다',
    romanization: 'jumunhada',
    meaning: 'ສັ່ງອາຫານ / ສັ່ງຊື້',
    category: 'food',
    tags: ['shopping'],
    difficulty: 2,
    examples: [
      {
        korean: '비빔밥 하나 주문할게요.',
        romanization: 'Bibimbap hana jumunhalgeyo.',
        meaning: 'ຂໍສັ່ງບິບິມບັບ 1 ທີ່.'
      }
    ]
  },
  {
    id: 'l2_043',
    korean: '계산하다',
    romanization: 'gyesanhada',
    meaning: 'ຄິດໄລ່ເງິນ, ຈ່າຍເງິນ',
    category: 'shopping',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '카드로 계산해도 돼요?',
        romanization: 'Kadeuro gyesanhaedo dwaeyo?',
        meaning: 'ຈ່າຍດ້ວຍບັດໄດ້ບໍ່?'
      }
    ]
  },
  {
    id: 'l2_044',
    korean: '영수증',
    romanization: 'yeongsujeung',
    meaning: 'ໃບຮັບເງິນ, ບິນ',
    category: 'shopping',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '영수증은 버려주세요.',
        romanization: 'Yeongsujeungeun beoryeojuseyo.',
        meaning: 'ບິນບໍ່ເອົາເດີ້ (ຖິ້ມເລີຍ).'
      }
    ]
  },
  {
    id: 'l2_045',
    korean: '할인',
    romanization: 'harin',
    meaning: 'ສ່ວນຫຼຸດ',
    category: 'shopping',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '학생 할인이 돼요?',
        romanization: 'Haksaeng harini dwaeyo?',
        meaning: 'ມີສ່ວນຫຼຸດສຳລັບນັກຮຽນບໍ່?'
      }
    ]
  },
  {
    id: 'l2_046',
    korean: '환불하다',
    romanization: 'hwanbulhada',
    meaning: 'ຂໍເງິນຄືນ',
    category: 'shopping',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '영수증이 있으면 환불이 가능해요.',
        romanization: 'Yeongsujeungi isseumyeon hwanburi ganeunghaeyo.',
        meaning: 'ຖ້າມີໃບຮັບເງິນສາມາດຂໍເງິນຄືນໄດ້.'
      }
    ]
  },

  // ====== ດິນຟ້າອາກາດ & ລະດູການ (Weather & Seasons) ======
  {
    id: 'l2_047',
    korean: '날씨',
    romanization: 'nalssi',
    meaning: 'ດິນຟ້າອາກາດ',
    category: 'time',
    tags: ['daily'],
    difficulty: 2,
    examples: [
      {
        korean: '오늘 날씨가 정말 맑아요.',
        romanization: 'Oneul nalssiga jeongmal malgayo.',
        meaning: 'ມື້ນີ້ອາກາດແຈ່ມໃສຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l2_048',
    korean: '바람',
    romanization: 'baram',
    meaning: 'ລົມ',
    category: 'time',
    tags: ['nature'],
    difficulty: 2,
    examples: [
      {
        korean: '바람이 시원하게 불어요.',
        romanization: 'Barami siwonhage bureoyo.',
        meaning: 'ລົມພັດເຢັນສະບາຍດີ.'
      }
    ]
  },
  {
    id: 'l2_049',
    korean: '따뜻하다',
    romanization: 'ttatteuthada',
    meaning: 'ອົບອຸ່ນ',
    category: 'adjectives',
    tags: ['nature'],
    difficulty: 2,
    examples: [
      {
        korean: '봄이 되어서 날씨가 따뜻해요.',
        romanization: 'Bomi doeeoseo nalssiga ttatteuthaeyo.',
        meaning: 'ຮອດລະດູໃບໄມ້ປົ່ງແລ້ວອາກາດເລີຍອົບອຸ່ນ.'
      }
    ]
  },
  {
    id: 'l2_050',
    korean: '시원하다',
    romanization: 'siwonhada',
    meaning: 'ເຢັນສະບາຍ, ສົດຊື່ນ',
    category: 'adjectives',
    tags: ['nature', 'food'],
    difficulty: 2,
    examples: [
      {
        korean: '시원한 물 한 잔 주세요.',
        romanization: 'Siwonhan mul han jan juseyo.',
        meaning: 'ຂໍນ້ຳເຢັນໆ ຈອກໜຶ່ງ.'
      }
    ]
  },

  // ====== ປະໂຫຍກສື່ສານຂັ້ນພື້ນຖານ-ກາງ (Sentences & Expressions) ======
  {
    id: 'l2_051',
    korean: '잘 부탁드립니다',
    romanization: 'jal butakdeurimnida',
    meaning: 'ຂໍຝາກເນື້ອຝາກຕົວນຳແດ່ເດີ້',
    category: 'sentences',
    tags: ['polite', 'daily'],
    difficulty: 2,
    usage: 'ໃຊ້ເວລາກ່າວທັກທາຍຄັ້ງທຳອິດ ຫຼື ເລີ່ມວຽກໃໝ່',
    examples: [
      {
        korean: '처음 뵙겠습니다. 잘 부탁드립니다.',
        romanization: 'Cheoeum boepgesseumnida. Jal butakdeurimnida.',
        meaning: 'ຍິນດີທີ່ໄດ້ພົບກັນຄັ້ງທຳອິດ. ຂໍຝາກເນື້ອຝາກຕົວນຳເດີ້.'
      }
    ]
  },
  {
    id: 'l2_052',
    korean: '잘 먹겠습니다',
    romanization: 'jal meokgesseumnida',
    meaning: 'ຈະກິນໃຫ້ແຊບໆເດີ້ (ກ່າວກ່ອນກິນອາຫານ)',
    category: 'sentences',
    tags: ['culture', 'food'],
    difficulty: 2,
    examples: [
      {
        korean: '맛있는 음식 감사합니다. 잘 먹겠습니다!',
        romanization: 'Masinneun eumsik gamsahamnida. Jal meokgesseumnida!',
        meaning: 'ຂອບໃຈສຳລັບອາຫານແຊບໆ. ຈະກິນໃຫ້ແຊບໆເດີ້!'
      }
    ]
  },
  {
    id: 'l2_053',
    korean: '잘 먹었습니다',
    romanization: 'jal meogeosseumnida',
    meaning: 'ກິນອີ່ມແລ້ວ, ແຊບຫຼາຍ (ກ່າວຫຼັງກິນອາຫານ)',
    category: 'sentences',
    tags: ['culture', 'food'],
    difficulty: 2,
    examples: [
      {
        korean: '정말 맛있었어요. 잘 먹었습니다.',
        romanization: 'Jeongmal masisseosseoyo. Jal meogeosseumnida.',
        meaning: 'ແຊບແທ້ໆ. ກິນອີ່ມແລ້ວ ຂອບໃຈຫຼາຍໆ.'
      }
    ]
  },
  {
    id: 'l2_054',
    korean: '수고하셨습니다',
    romanization: 'sugohasyeosseumnida',
    meaning: 'ເມື່ອຍຫຼາຍແລ້ວ / ເຮັດວຽກໄດ້ດີຫຼາຍ (ກ່າວຕອນເລີກວຽກ)',
    category: 'sentences',
    tags: ['work', 'polite'],
    difficulty: 2,
    examples: [
      {
        korean: '오늘 하루도 수고하셨습니다!',
        romanization: 'Oneul harudo sugohasyeosseumnida!',
        meaning: 'ມື້ນີ້ທຸກຄົນເມື່ອຍຫຼາຍແລ້ວ ເຮັດວຽກໄດ້ດີຫຼາຍ!'
      }
    ]
  },
  {
    id: 'l2_055',
    korean: '실례합니다',
    romanization: 'sillyehamnida',
    meaning: 'ຂໍໂທດເດີ້ / ຂໍອະນຸຍາດ',
    category: 'sentences',
    tags: ['polite', 'daily'],
    difficulty: 2,
    examples: [
      {
        korean: '실례합니다, 길 좀 여쭤봐도 될까요?',
        romanization: 'Sillyehamnida, gil jom yeojjwobwado doelkkayo?',
        meaning: 'ຂໍໂທດເດີ້, ຂໍຖາມທາງແດ່ໄດ້ບໍ່?'
      }
    ]
  },
  {
    id: 'l2_056',
    korean: '얼마나 걸려요?',
    romanization: 'eolmana geollyeoyo?',
    meaning: 'ໃຊ້ເວລາປະມານດົນປານໃດ?',
    category: 'sentences',
    tags: ['transport', 'daily'],
    difficulty: 2,
    examples: [
      {
        korean: '여기서 명동까지 얼마나 걸려요?',
        romanization: 'Yeogiseo Myeongdongkkaji eolmana geollyeoyo?',
        meaning: 'ຈາກນີ້ໄປມຽງດົງໃຊ້ເວລາດົນປານໃດ?'
      }
    ]
  },
  {
    id: 'l2_057',
    korean: '사진 좀 찍어 주시겠어요?',
    romanization: 'sajin jom jjigeo jusigesseoyo?',
    meaning: 'ຊ່ວຍຖ່າຍຮູບໃຫ້ແດ່ໄດ້ບໍ່?',
    category: 'sentences',
    tags: ['travel', 'polite'],
    difficulty: 2,
    examples: [
      {
        korean: '저기요, 사진 좀 찍어 주시겠어요?',
        romanization: 'Jeogiyo, sajin jom jjigeo jusigesseoyo?',
        meaning: 'ຂໍໂທດເດີ້, ຊ່ວຍຖ່າຍຮູບໃຫ້ພວກເຮົາແດ່ໄດ້ບໍ່?'
      }
    ]
  },
  {
    id: 'l2_058',
    korean: '어떻게 가요?',
    romanization: 'eotteoke gayo?',
    meaning: 'ໄປແນວໃດ?',
    category: 'sentences',
    tags: ['transport', 'travel'],
    difficulty: 2,
    examples: [
      {
        korean: '서울타워에 어떻게 가요?',
        romanization: 'Seoultawoe eotteoke gayo?',
        meaning: 'ໄປຫໍຄອຍໂຊລແນວໃດ?'
      }
    ]
  },
  {
    id: 'l2_059',
    korean: '다시 말씀해 주세요',
    romanization: 'dasi malsseumhae juseyo',
    meaning: 'ກະລຸນາເວົ້າອີກເທື່ອໜຶ່ງ',
    category: 'sentences',
    tags: ['daily', 'polite'],
    difficulty: 2,
    examples: [
      {
        korean: '잘 못 들었어요. 다시 말씀해 주세요.',
        romanization: 'Jal mot deureosseoyo. Dasi malsseumhae juseyo.',
        meaning: 'ຂ້ອຍຟັງບໍ່ທັນ. ກະລຸນາເວົ້າອີກເທື່ອໜຶ່ງແດ່.'
      }
    ]
  },
  {
    id: 'l2_060',
    korean: '천천히 말해 주세요',
    romanization: 'cheoncheonhi malhae juseyo',
    meaning: 'ກະລຸນາເວົ້າຊ້າໆ ແດ່',
    category: 'sentences',
    tags: ['daily', 'polite'],
    difficulty: 2,
    examples: [
      {
        korean: '한국어를 잘 못해요. 천천히 말해 주세요.',
        romanization: 'Hangugeoreul jal mothaeyo. Cheoncheonhi malhae juseyo.',
        meaning: 'ຂ້ອຍຍັງບໍ່ເກັ່ງພາສາເກົາຫຼີ. ກະລຸນາເວົ້າຊ້າໆແດ່ເດີ້.'
      }
    ]
  }
]
