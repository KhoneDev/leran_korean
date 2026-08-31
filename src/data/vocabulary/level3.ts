import type { Word } from '@/types'

/**
 * Level 3 — TOPIK 3 (Intermediate Low / ລະດັບກາງຂັ້ນຕົ້ນ)
 * ການເຮັດວຽກໃນສຳນັກງານ, ການເຊົ່າເຮືອນ, ສາຍພົວພັນສັງຄົມ, ອາລົມ, ແລະ ການສະແດງຄວາມຄິດເຫັນ
 */
export const level3Words: Word[] = [
  // ====== ການເຮັດວຽກ & ສຳນັກງານ (Work & Office) ======
  {
    id: 'l3_001',
    korean: '회사원',
    romanization: 'hoesawon',
    meaning: 'ພະນັກງານບໍລິສັດ',
    category: 'work',
    tags: ['work', 'topik3'],
    difficulty: 3,
    examples: [
      {
        korean: '저는 무역 회사에서 일하는 회사원입니다.',
        romanization: 'Jeoneun muyeok hoesaeseo ilhaneun hoesawonimnida.',
        meaning: 'ຂ້ອຍເປັນພະນັກງານບໍລິສັດເຮັດວຽກຢູ່ບໍລິສັດການຄ້າ.'
      }
    ]
  },
  {
    id: 'l3_002',
    korean: '회의',
    romanization: 'hoeui',
    meaning: 'ການປະຊຸມ',
    category: 'work',
    tags: ['work', 'topik3'],
    difficulty: 3,
    examples: [
      {
        korean: '오후 2시에 중요한 회의가 있어요.',
        romanization: 'Ohu dusie jungyohan hoeuiga isseoyo.',
        meaning: 'ຕອນບ່າຍ 2 ໂມງມີການປະຊຸມສຳຄັນ.'
      }
    ]
  },
  {
    id: 'l3_003',
    korean: '보고서',
    romanization: 'bogoseo',
    meaning: 'ບົດລາຍງານ, ເອກະສານລາຍງານ',
    category: 'work',
    tags: ['work', 'topik3'],
    difficulty: 3,
    examples: [
      {
        korean: '퇴근 전까지 보고서를 작성해야 해요.',
        romanization: 'Toegeun jeonkkaji bogoseoreul jakseonghaeya haeyo.',
        meaning: 'ກ່ອນເລີກວຽກຕ້ອງຂຽນບົດລາຍງານໃຫ້ແລ້ວ.'
      }
    ]
  },
  {
    id: 'l3_004',
    korean: '면접',
    romanization: 'myeonjeop',
    meaning: 'ການສຳພາດ (ວຽກ/ຮຽນ)',
    category: 'work',
    tags: ['work', 'education'],
    difficulty: 3,
    examples: [
      {
        korean: '내일 입사 면접이 있어서 긴장돼요.',
        romanization: 'Naeil ipsa myeonjeobi isseoseo ginjangdwaeyo.',
        meaning: 'ມື້ອື່ນມີສຳພາດເຂົ້າເຮັດວຽກເລີຍຮູ້ສຶກຕື່ນເຕັ້ນ.'
      }
    ]
  },
  {
    id: 'l3_005',
    korean: '월급',
    romanization: 'wolgeup',
    meaning: 'ເງິນເດືອນ',
    category: 'work',
    tags: ['work', 'economy'],
    difficulty: 3,
    examples: [
      {
        korean: '월급날에 부모님께 선물을 사 드렸어요.',
        romanization: 'Wolgeubnare bumonimkke seonmureul sa deuryeosseoyo.',
        meaning: 'ໃນມື້ເງິນເດືອນອອກ ຂ້ອຍຊື້ຂອງຂວັນໃຫ້ພໍ່ແມ່.'
      }
    ]
  },
  {
    id: 'l3_006',
    korean: '승진하다',
    romanization: 'seungjinhada',
    meaning: 'ເລື່ອນຕຳແໜ່ງ',
    category: 'work',
    tags: ['work'],
    difficulty: 3,
    examples: [
      {
        korean: '김 과장님이 이번에 부장으로 승진하셨어요.',
        romanization: 'Gim gwajangnimi ibeone bujangeuro seungjinhasyeosseoyo.',
        meaning: 'ຫົວໜ້າຄິມໄດ້ເລື່ອນຕຳແໜ່ງເປັນຜູ້ຈັດການແລ້ວ.'
      }
    ]
  },
  {
    id: 'l3_007',
    korean: '출근하다',
    romanization: 'chulgeunhada',
    meaning: 'ເຂົ້າວຽກ, ໄປເຮັດວຽກ',
    category: 'work',
    tags: ['work', 'daily'],
    difficulty: 3,
    examples: [
      {
        korean: '매일 아침 8시 반까지 출근해요.',
        romanization: 'Maeil achim yeodeolsi bankkaji chulgeunhaeyo.',
        meaning: 'ທຸກເຊົ້າຕ້ອງໄປເຂົ້າວຽກກ່ອນ 8 ໂມງເຄິ່ງ.'
      }
    ]
  },
  {
    id: 'l3_008',
    korean: '퇴근하다',
    romanization: 'toegeunhada',
    meaning: 'ເລີກວຽກ, ກັບຈາກບ່ອນເຮັດວຽກ',
    category: 'work',
    tags: ['work', 'daily'],
    difficulty: 3,
    examples: [
      {
        korean: '오늘은 일이 많아서 늦게 퇴근했어요.',
        romanization: 'Oneureun iri manhaseo neutge toegeunhaesseoyo.',
        meaning: 'ມື້ນີ້ວຽກຫຼາຍເລີຍເລີກວຽກຊ້າ.'
      }
    ]
  },
  {
    id: 'l3_009',
    korean: '야근하다',
    romanization: 'yageunhada',
    meaning: 'ເຮັດວຽກລ່ວງເວລາ, ເຮັດ OT ກາງຄືນ',
    category: 'work',
    tags: ['work'],
    difficulty: 3,
    examples: [
      {
        korean: '프로젝트 마감 때문에 매일 야근해요.',
        romanization: 'Peurojekteu magam ttaemune maeil yageunhaeyo.',
        meaning: 'ຍ້ອນຕ້ອງສົ່ງໂຄງການໃຫ້ທັນເລີຍຕ້ອງເຮັດ OT ທຸກຄືນ.'
      }
    ]
  },
  {
    id: 'l3_010',
    korean: '휴가',
    romanization: 'hyuga',
    meaning: 'ວັນພັກຜ່ອນປະຈຳປີ / ວັນລາພັກ',
    category: 'work',
    tags: ['work', 'travel'],
    difficulty: 3,
    examples: [
      {
        korean: '다음 주에 여름 휴가를 떠나요.',
        romanization: 'Daeum jue yeoreum hyugareul tteonayo.',
        meaning: 'ອາທິດໜ້າຂ້ອຍຈະໄປພັກຮ້ອນ.'
      }
    ]
  },

  // ====== ທີ່ພັກອາໄສ & ການເຊົ່າເຮືອນ (Housing & Living) ======
  {
    id: 'l3_011',
    korean: '부동산',
    romanization: 'budongsan',
    meaning: 'ນາຍໜ້າອະສັງຫາລິມະຊັບ, ຫ້ອງການຈັດຫາເຮືອນ',
    category: 'places',
    tags: ['society'],
    difficulty: 3,
    examples: [
      {
        korean: '방을 구하려고 부동산에 들렀어요.',
        romanization: 'Bangeul guharyeogo budongsane deulleosseoyo.',
        meaning: 'ຂ້ອຍແວ່ໄປຫ້ອງການນາຍໜ້າເພື່ອຊອກເຊົ່າຫ້ອງ.'
      }
    ]
  },
  {
    id: 'l3_012',
    korean: '계약서',
    romanization: 'gyeyakseo',
    meaning: 'ສັນຍາ, ເອກະສານສັນຍາ',
    category: 'work',
    tags: ['society'],
    difficulty: 3,
    examples: [
      {
        korean: '집 계약서에 서명하기 전에 꼼꼼히 확인하세요.',
        romanization: 'Jip gyeyakseoe seomyeonghagi jeone kkomkkomhi hwaginhaseyo.',
        meaning: 'ກ່ອນເຊັນສັນຍາເຊົ່າເຮືອນ ກະລຸນາກວດເບິ່ງຢ່າງລະອຽດ.'
      }
    ]
  },
  {
    id: 'l3_013',
    korean: '보증금',
    romanization: 'bojeunggeum',
    meaning: 'ເງິນມັດຈຳ (ຄ່າປະກັນຫ້ອງ)',
    category: 'economy',
    tags: ['shopping'],
    difficulty: 3,
    examples: [
      {
        korean: '원룸 보증금이 얼마예요?',
        romanization: 'Wonrum bojeunggeumi eolmayeyo?',
        meaning: 'ເງິນມັດຈຳຫ້ອງພັກ One-room ເທົ່າໃດ?'
      }
    ]
  },
  {
    id: 'l3_014',
    korean: '월세',
    romanization: 'wolse',
    meaning: 'ຄ່າເຊົ່າລາຍເດືອນ',
    category: 'economy',
    tags: ['shopping'],
    difficulty: 3,
    examples: [
      {
        korean: '매달 25일에 월세를 내요.',
        romanization: 'Maedal isiboir-e wolsereul naeyo.',
        meaning: 'ຂ້ອຍຈ່າຍຄ່າເຊົ່າຫ້ອງທຸກໆວັນທີ 25 ຂອງເດືອນ.'
      }
    ]
  },
  {
    id: 'l3_015',
    korean: '이사하다',
    romanization: 'isahada',
    meaning: 'ຍ້າຍເຮືອນ, ຍ້າຍບ່ອນຢູ່',
    category: 'verbs',
    tags: ['daily'],
    difficulty: 3,
    examples: [
      {
        korean: '다음 달에 회사 근처로 이사해요.',
        romanization: 'Daeum dare hoesa geuncheoro isahaeyo.',
        meaning: 'ເດືອນໜ້າຂ້ອຍຈະຍ້າຍໄປຢູ່ໃກ້ບໍລິສັດ.'
      }
    ]
  },

  // ====== ອາລົມ & ຄວາມຮູ້ສຶກຂັ້ນກາງ (Emotions & Psychology) ======
  {
    id: 'l3_016',
    korean: '감동하다',
    romanization: 'gamdonghada',
    meaning: 'ປະທັບໃຈ, ຊາບຊຶ້ງໃຈ',
    category: 'emotions',
    tags: ['emotions'],
    difficulty: 3,
    examples: [
      {
        korean: '영화를 보고 너무 감동해서 눈물이 났어요.',
        romanization: 'Yeonghwareul bogo neomu gamdonghaeseo nunmuri nasseoyo.',
        meaning: 'ເບິ່ງໜັງແລ້ວປະທັບໃຈຫຼາຍຈົນນ້ຳຕາໄຫຼ.'
      }
    ]
  },
  {
    id: 'l3_017',
    korean: '외롭다',
    romanization: 'woeropda',
    meaning: 'ເຫງົາ, ໂດດດ່ຽວ',
    category: 'emotions',
    tags: ['emotions'],
    difficulty: 3,
    examples: [
      {
        korean: '혼자 외국에 사니까 가끔 외로워요.',
        romanization: 'Honja oeguge sanikka gakkeum oerowoyo.',
        meaning: 'ຍ້ອນຢູ່ຕ່າງປະເທດຄົນດຽວ ບາງເທື່ອກໍຮູ້ສຶກເຫງົາ.'
      }
    ]
  },
  {
    id: 'l3_018',
    korean: '답답하다',
    romanization: 'dapdaphada',
    meaning: 'ອຶດອັດໃຈ, ຫາຍໃຈບໍ່ສະດວກ, ຄາໃຈ',
    category: 'emotions',
    tags: ['emotions'],
    difficulty: 3,
    examples: [
      {
        korean: '일이 잘 안 풀려서 마음이 답답해요.',
        romanization: 'Iri jal an pullyeoseo maeumi dapdaphaeyo.',
        meaning: 'ຍ້ອນວຽກບໍ່ລາບລື່ນເລີຍຮູ້ສຶກອຶດອັດໃຈ.'
      }
    ]
  },
  {
    id: 'l3_019',
    korean: '부럽다',
    romanization: 'bureopda',
    meaning: 'ອອນຊອນ, ອິດສາ (ໃນທາງທີ່ດີ)',
    category: 'emotions',
    tags: ['emotions'],
    difficulty: 3,
    examples: [
      {
        korean: '한국어를 잘하는 친구가 정말 부러워요.',
        romanization: 'Hangugeoreul jalhaneun chinguga jeongmal bureowoyo.',
        meaning: 'ຂ້ອຍອອນຊອນໝູ່ທີ່ເວົ້າພາສາເກົາຫຼີເກັ່ງຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l3_020',
    korean: '당황하다',
    romanization: 'danghwanghada',
    meaning: 'ສັບສົນ, ເຮັດຫຍັງບໍ່ຖືກ, ຕົກໃຈ',
    category: 'emotions',
    tags: ['emotions'],
    difficulty: 3,
    examples: [
      {
        korean: '갑자기 질문을 받아서 당황했어요.',
        romanization: 'Gapjagi jilmuneul badaseo danghwanghaesseoyo.',
        meaning: 'ຖືກຖາມກະທັນຫັນເລີຍຕອບບໍ່ຖືກ/ສັບສົນ.'
      }
    ]
  },

  // ====== ລັກສະນະນິໄສ & ບຸກຄະລິກ (Personality & People) ======
  {
    id: 'l3_021',
    korean: '성격',
    romanization: 'seonggyeok',
    meaning: 'ນິໄສ, ບຸກຄະລິກກະພາບ',
    category: 'people',
    tags: ['people'],
    difficulty: 3,
    examples: [
      {
        korean: '그 사람은 성격이 아주 밝고 긍정적이에요.',
        romanization: 'Geu sarameun seonggyeogi aju balgo geungjeongjeogieyo.',
        meaning: 'ຄົນນັ້ນນິໄສສົດໃສ ແລະ ມອງໂລກໃນແງ່ດີຫຼາຍ.'
      }
    ]
  },
  {
    id: 'l3_022',
    korean: '적극적',
    romanization: 'jeokgeukjeok',
    meaning: 'ກະຕືລືລົ້ນ, ກ້າສະແດງອອກ',
    category: 'people',
    tags: ['people', 'work'],
    difficulty: 3,
    examples: [
      {
        korean: '수업 시간에 적극적으로 참여해요.',
        romanization: 'Sueop sigan-e jeokgeukjeogeuro chamyeohaeyo.',
        meaning: 'ເຂົ້າຮ່ວມໃນຫ້ອງຮຽນຢ່າງກະຕືລືລົ້ນ.'
      }
    ]
  },
  {
    id: 'l3_023',
    korean: '소극적',
    romanization: 'sogeukjeok',
    meaning: 'ຂີ້ອາຍ, ມິດງຽບ, ບໍ່ຄ່ອຍສະແດງອອກ',
    category: 'people',
    tags: ['people'],
    difficulty: 3,
    examples: [
      {
        korean: '성격이 소극적이라서 낯을 많이 가려요.',
        romanization: 'Seonggyeogi sogeukjeogiraseo nacheul mani garyeoyo.',
        meaning: 'ນິໄສຂີ້ອາຍເລີຍມັກອາຍຄົນແປກໜ້າ.'
      }
    ]
  },
  {
    id: 'l3_024',
    korean: '꼼꼼하다',
    romanization: 'kkomkkomhada',
    meaning: 'ລະອຽດຮອບຄອບ, ພິຖີພິຖັນ',
    category: 'people',
    tags: ['work', 'people'],
    difficulty: 3,
    examples: [
      {
        korean: '일을 꼼꼼하게 처리하는 편이에요.',
        romanization: 'Ireul kkomkkomhage cheorihaneun pyeon-ieyo.',
        meaning: 'ຂ້ອຍຂ້ອນຂ້າງເຮັດວຽກຢ່າງລະອຽດຮອບຄອບ.'
      }
    ]
  },
  {
    id: 'l3_025',
    korean: '솔직하다',
    romanization: 'soljikhada',
    meaning: 'ຈິງໃຈ, ກົງໄປກົງມາ',
    category: 'people',
    tags: ['relationships'],
    difficulty: 3,
    examples: [
      {
        korean: '솔직하게 마음을 털어놓았어요.',
        romanization: 'Soljikhage maeumeul teoreonoasseoyo.',
        meaning: 'ຂ້ອຍເປີດໃຈບອກຄວາມຮູ້ສຶກຢ່າງຈິງໃຈ.'
      }
    ]
  },

  // ====== ສຸຂະພາບ & ອາການເຈັບປ່ວຍ (Health & Medical) ======
  {
    id: 'l3_026',
    korean: '진료를 받다',
    romanization: 'jinryoreul batda',
    meaning: 'ກວດພະຍາດ, ຮັບການກວດຈາກທ່ານໝໍ',
    category: 'health',
    tags: ['health'],
    difficulty: 3,
    examples: [
      {
        korean: '의사 선생님께 진료를 받았어요.',
        romanization: 'Uisa seonsaengnimkke jinryoreul badasseoyo.',
        meaning: 'ຂ້ອຍໄດ້ຮັບການກວດພະຍາດຈາກທ່ານໝໍແລ້ວ.'
      }
    ]
  },
  {
    id: 'l3_027',
    korean: '처방전',
    romanization: 'cheobangjeon',
    meaning: 'ໃບສັ່ງຢາ',
    category: 'health',
    tags: ['health'],
    difficulty: 3,
    examples: [
      {
        korean: '병원에서 처방전을 받아 약국에 갔어요.',
        romanization: 'Byeongwoneseo cheobangjeoneul bada yakguge gasseoyo.',
        meaning: 'ໄດ້ໃບສັ່ງຢາຈາກໂຮງໝໍແລ້ວໄປຮ້ານຂາຍຢາ.'
      }
    ]
  },
  {
    id: 'l3_028',
    korean: '증상',
    romanization: 'jeungsang',
    meaning: 'ອາການ (ຂອງພະຍາດ)',
    category: 'health',
    tags: ['health'],
    difficulty: 3,
    examples: [
      {
        korean: '어떤 증상이 있으신가요?',
        romanization: 'Eotteon jeungsangi isseusingayo?',
        meaning: 'ທ່ານມີອາການແນວໃດແດ່?'
      }
    ]
  },
  {
    id: 'l3_029',
    korean: '소화가 안 되다',
    romanization: 'sohwaga an doeda',
    meaning: 'ອາຫານບໍ່ຍ່ອຍ, ແໜ້ນທ້ອງ',
    category: 'health',
    tags: ['health'],
    difficulty: 3,
    examples: [
      {
        korean: '과식해서 소화가 잘 안 돼요.',
        romanization: 'Gwasikhaeseo sohwaga jal an dwaeyo.',
        meaning: 'ກິນຫຼາຍເກີນໄປເລີຍອາຫານບໍ່ຍ່ອຍ.'
      }
    ]
  },
  {
    id: 'l3_030',
    korean: '체온',
    romanization: 'cheon',
    meaning: 'ອຸນຫະພູມຮ່າງກາຍ',
    category: 'health',
    tags: ['health'],
    difficulty: 3,
    examples: [
      {
        korean: '열이 나서 체온을 쟀어요.',
        romanization: 'Yeori naseo cheoneul jaesseoyo.',
        meaning: 'ເປັນໄຂ້ເລີຍວັດແທກອຸນຫະພູມຮ່າງກາຍ.'
      }
    ]
  },

  // ====== ປະໂຫຍກ & ການສະແດງຄວາມຄິດເຫັນ (Sentences & Opinions) ======
  {
    id: 'l3_031',
    korean: '제 생각에는',
    romanization: 'je saenggagenneun',
    meaning: 'ຕາມຄວາມຄິດຂອງຂ້ອຍແລ້ວ...',
    category: 'sentences',
    tags: ['formal', 'topik3'],
    difficulty: 3,
    examples: [
      {
        korean: '제 생각에는 이 방법이 더 효과적일 것 같아요.',
        romanization: 'Je saenggagenneun i bangbeobi deo hyogwajeogil geot gatayo.',
        meaning: 'ຕາມຄວາມຄິດຂອງຂ້ອຍ ວິທີນີ້ນ່າຈະມີປະສິດທິພາບກວ່າ.'
      }
    ]
  },
  {
    id: 'l3_032',
    korean: '의견을 말씀해 주세요',
    romanization: 'uigyeoneul malsseumhae juseyo',
    meaning: 'ກະລຸນາບອກຄວາມຄິດເຫັນແດ່',
    category: 'sentences',
    tags: ['work', 'polite'],
    difficulty: 3,
    examples: [
      {
        korean: '이 안건에 대해 자유롭게 의견을 말씀해 주세요.',
        romanization: 'I angeone daehae jayuropge uigyeoneul malsseumhae juseyo.',
        meaning: 'ກະລຸນາບອກຄວາມຄິດເຫັນກ່ຽວກັບວາລະນີ້ຢ່າງອິດສະຫຼະ.'
      }
    ]
  },
  {
    id: 'l3_033',
    korean: '동의합니다',
    romanization: 'donguihamnida',
    meaning: 'ເຫັນດີນຳ / ເຫັນພ້ອມ',
    category: 'sentences',
    tags: ['formal', 'work'],
    difficulty: 3,
    examples: [
      {
        korean: '저도 그 의견에 전적으로 동의합니다.',
        romanization: 'Jeodo geu uigyeone jeonjeogeuro donguihamnida.',
        meaning: 'ຂ້ອຍກໍເຫັນດີນຳຄວາມຄິດເຫັນນັ້ນຢ່າງເຕັມທີ່.'
      }
    ]
  },
  {
    id: 'l3_034',
    korean: '문제가 생겼어요',
    romanization: 'munjega saenggyeosseoyo',
    meaning: 'ເກີດບັນຫາຂຶ້ນແລ້ວ',
    category: 'sentences',
    tags: ['work', 'daily'],
    difficulty: 3,
    examples: [
      {
        korean: '컴퓨터에 갑자기 문제가 생겼어요.',
        romanization: 'Keompyuteoe gapjagi munjega saenggyeosseoyo.',
        meaning: 'ຄອມພິວເຕີເກີດບັນຫາກະທັນຫັນ.'
      }
    ]
  },
  {
    id: 'l3_035',
    korean: '해결 방법을 찾다',
    romanization: 'haegyeol bangbeobeul chatda',
    meaning: 'ຊອກຫາວິທີແກ້ໄຂບັນຫາ',
    category: 'verbs',
    tags: ['work', 'topik3'],
    difficulty: 3,
    examples: [
      {
        korean: '다 함께 문제의 해결 방법을 찾아봅시다.',
        romanization: 'Da hamkke munjeui haegyeol bangbeobeul chajabopsida.',
        meaning: 'ພວກເຮົາທຸກຄົນມາຊ່ວຍກັນຊອກຫາວິທີແກ້ໄຂບັນຫານຳກັນ.'
      }
    ]
  }
]
