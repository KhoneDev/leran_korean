/**
 * Korean Syllable Combination Table Data
 * ตารางผสมพยัญชนะ + สระ สร้างอัตโนมัติด้วย Unicode
 * พร้อมคำอ่านภาษาอังกฤษ (Revised Romanization)
 */

// Korean consonants with romanization
const consonants = [
  { char: 'ㄱ', code: 0x1100, name: '기역', roman: 'g' },
  { char: 'ㄴ', code: 0x1102, name: '니은', roman: 'n' },
  { char: 'ㄷ', code: 0x1103, name: '디귿', roman: 'd' },
  { char: 'ㄹ', code: 0x1105, name: '리을', roman: 'r' },
  { char: 'ㅁ', code: 0x1106, name: '미음', roman: 'm' },
  { char: 'ㅂ', code: 0x1107, name: '비읍', roman: 'b' },
  { char: 'ㅅ', code: 0x1109, name: '시옷', roman: 's' },
  { char: 'ㅇ', code: 0x110B, name: '이응', roman: '' },
  { char: 'ㅈ', code: 0x110C, name: '지읒', roman: 'j' },
  { char: 'ㅊ', code: 0x110E, name: '치읓', roman: 'ch' },
  { char: 'ㅋ', code: 0x110F, name: '키읔', roman: 'k' },
  { char: 'ㅌ', code: 0x1110, name: '티읕', roman: 't' },
  { char: 'ㅍ', code: 0x1111, name: '피읍', roman: 'p' },
  { char: 'ㅎ', code: 0x1112, name: '히읗', roman: 'h' },
  { char: 'ㄲ', code: 0x1101, name: '쌍기역', roman: 'kk' },
  { char: 'ㄸ', code: 0x1104, name: '쌍디귿', roman: 'tt' },
  { char: 'ㅃ', code: 0x1108, name: '쌍비읍', roman: 'pp' },
  { char: 'ㅆ', code: 0x110A, name: '쌍시옷', roman: 'ss' },
  { char: 'ㅉ', code: 0x110D, name: '쌍지읒', roman: 'jj' },
]

// Basic vowels with romanization
const basicVowels = [
  { char: 'ㅏ', code: 0x1161, roman: 'a' },
  { char: 'ㅑ', code: 0x1162, roman: 'ya' },
  { char: 'ㅓ', code: 0x1163, roman: 'eo' },
  { char: 'ㅕ', code: 0x1164, roman: 'yeo' },
  { char: 'ㅗ', code: 0x1165, roman: 'o' },
  { char: 'ㅛ', code: 0x1166, roman: 'yo' },
  { char: 'ㅜ', code: 0x1167, roman: 'u' },
  { char: 'ㅠ', code: 0x1168, roman: 'yu' },
  { char: 'ㅡ', code: 0x1169, roman: 'eu' },
  { char: 'ㅣ', code: 0x116A, roman: 'i' },
]

// Compound vowels with romanization
const compoundVowels = [
  { char: 'ㅐ', code: 0x116B, roman: 'ae' },
  { char: 'ㅒ', code: 0x116C, roman: 'yae' },
  { char: 'ㅔ', code: 0x116D, roman: 'e' },
  { char: 'ㅖ', code: 0x116E, roman: 'ye' },
  { char: 'ㅘ', code: 0x116F, roman: 'wa' },
  { char: 'ㅙ', code: 0x1170, roman: 'wae' },
  { char: 'ㅚ', code: 0x1171, roman: 'oe' },
  { char: 'ㅝ', code: 0x1172, roman: 'wo' },
  { char: 'ㅞ', code: 0x1173, roman: 'we' },
  { char: 'ㅟ', code: 0x1174, roman: 'wi' },
  { char: 'ㅢ', code: 0x1175, roman: 'ui' },
]

/**
 * สร้างตารางผสมจากพยัญชนะ + สระ พร้อมคำอ่าน
 */
function buildCombinationTable(
  consonantsList: typeof consonants,
  vowelsList: typeof basicVowels,
) {
  const BASE = 0xAC00
  return consonantsList.map((con) => ({
    consonant: con.char,
    consonantName: con.name,
    consonantRoman: con.roman,
    combinations: vowelsList.map((vow) => {
      const code = BASE + (con.code - 0x1100) * 588 + (vow.code - 0x1161) * 28
      // ㅇ ต้นคำไม่ออกเสียง → คำอ่านเริ่มด้วยสระ
      const roman = con.roman + vow.roman
      return {
        char: String.fromCharCode(code),
        vowel: vow.char,
        roman,
      }
    }),
  }))
}

export type CombinationRow = ReturnType<typeof buildCombinationTable>[number]

export const basicCombinations = buildCombinationTable(consonants, basicVowels)
export const compoundCombinations = buildCombinationTable(consonants, compoundVowels)

export { consonants, basicVowels, compoundVowels }
