<script setup lang="ts">
import { ref, computed } from 'vue'
import { speakSlow } from '@/utils/speech'
import { basicCombinations, compoundCombinations, type CombinationRow } from '@/data/combinations'

const activeTab = ref<'basic' | 'compound'>('basic')

const tableData = computed<CombinationRow[]>(() =>
  activeTab.value === 'basic' ? basicCombinations : compoundCombinations,
)

const vowelHeaders = computed(() =>
  tableData.value[0]?.combinations.map((c) => c.vowel) ?? [],
)

const isSpeaking = ref(false)
const speakingChar = ref('')

async function speakChar(char: string) {
  isSpeaking.value = true
  speakingChar.value = char
  try {
    await speakSlow(char)
  } finally {
    isSpeaking.value = false
    speakingChar.value = ''
  }
}

const rowColors = [
  'text-red-400', 'text-emerald-400', 'text-amber-400', 'text-teal-400',
  'text-sky-400', 'text-rose-400', 'text-pink-400', 'text-indigo-300',
  'text-violet-400', 'text-cyan-500', 'text-emerald-400', 'text-orange-400',
  'text-amber-400', 'text-yellow-500', 'text-rose-500', 'text-sky-500',
  'text-blue-400', 'text-purple-400', 'text-pink-300',
]
</script>

<template>
  <div class="combination-table">
    <!-- Tab Buttons -->
    <div class="flex items-center gap-2 mb-4">
      <button
        class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
        :class="activeTab === 'basic'
          ? 'bg-emerald-500 text-white shadow-md'
          : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'"
        @click="activeTab = 'basic'"
      >
        ㅏ ~ ㅣ
      </button>
      <button
        class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
        :class="activeTab === 'compound'
          ? 'bg-emerald-500 text-white shadow-md'
          : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'"
        @click="activeTab = 'compound'"
      >
        ㅐ ~ ㅢ
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table class="w-full border-collapse text-center">
        <!-- Header -->
        <thead>
          <tr class="bg-slate-50 border-b border-slate-200">
            <th class="sticky left-0 z-10 bg-slate-50 px-2 py-2 text-xs font-bold text-slate-400 w-10">
              #
            </th>
            <th
              v-for="(vowel, vi) in vowelHeaders"
              :key="vi"
              class="px-2 py-2 text-sm font-bold text-slate-500 min-w-[52px]"
            >
              {{ vowel }}
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody>
          <tr
            v-for="(row, ri) in tableData"
            :key="row.consonant"
            class="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
          >
            <!-- Consonant label -->
            <td
              class="sticky left-0 z-10 bg-white hover:bg-slate-50 px-2 py-2 text-sm font-bold border-r border-slate-100"
              :class="rowColors[ri] || 'text-slate-500'"
            >
              {{ row.consonant }}
            </td>

            <!-- Cells with character + romanization -->
            <td
              v-for="(combo, ci) in row.combinations"
              :key="ci"
              class="px-1 py-1.5 cursor-pointer transition-all duration-150 select-none"
              :class="[
                speakingChar === combo.char
                  ? 'bg-blue-100 scale-105'
                  : 'hover:bg-blue-50',
              ]"
              @click="speakChar(combo.char)"
            >
              <div class="flex flex-col items-center">
                <span
                  class="text-base sm:text-lg font-bold leading-tight"
                  :class="speakingChar === combo.char ? 'text-blue-600' : (rowColors[ri] || 'text-slate-700')"
                >{{ combo.char }}</span>
                <span
                  class="text-[9px] sm:text-[10px] leading-none mt-0.5"
                  :class="speakingChar === combo.char ? 'text-blue-400' : 'text-slate-400'"
                >{{ combo.roman }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Legend in Lao -->
    <div class="mt-3 text-xs text-slate-400 text-center">
      💡 ຄລິກຕົວອັກສອນເພື່ອຟັງສຽງ • 
      ຕົວເທິງ = ເກົາຫຼີ, ຕົວລຸ່ມ = ຄຳອ່ານພາສາອັງກິດ
    </div>
  </div>
</template>

<style scoped>
.combination-table { width: 100%; }
.sticky { position: sticky; }
</style>
