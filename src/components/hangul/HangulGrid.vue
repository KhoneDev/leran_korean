<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHangulStore } from '@/stores/useHangulStore'
import { speakSlow, stopSpeech } from '@/utils/speech'
import HangulCard from './HangulCard.vue'

const hangulStore = useHangulStore()
const isReadingAll = ref(false)
const readingIndex = ref(-1)

function setFilter(type: 'all' | 'consonant' | 'single' | 'double' | 'basic' | 'compound') {
  hangulStore.setFilter(type)
}

// แยกสระเป็น 2 กลุ่ม
const basicVowels = computed(() => hangulStore.vowelList.filter((v) => v.vowelSubtype === 'basic'))
const compoundVowels = computed(() => hangulStore.vowelList.filter((v) => v.vowelSubtype === 'compound'))

// แยกพยัญชนะเป็น 2 กลุ่ม
const singleConsonants = computed(() => hangulStore.consonantList.filter((c) => c.consonantSubtype === 'single'))
const doubleConsonants = computed(() => hangulStore.consonantList.filter((c) => c.consonantSubtype === 'double'))

// ອ່ານທັງໝົດ
async function readAll() {
  if (isReadingAll.value) {
    stopSpeech()
    isReadingAll.value = false
    readingIndex.value = -1
    return
  }
  const allChars = [
    ...singleConsonants.value,
    ...doubleConsonants.value,
    ...basicVowels.value,
    ...compoundVowels.value,
  ]
  isReadingAll.value = true
  readingIndex.value = -1
  for (let i = 0; i < allChars.length; i++) {
    if (!isReadingAll.value) break
    const char = allChars[i]
    if (!char) continue
    readingIndex.value = i
    await speakSlow(char.char)
    await new Promise((r) => setTimeout(r, 300))
  }
  isReadingAll.value = false
  readingIndex.value = -1
}
</script>

<template>
  <div class="w-full">
    <!-- Read All Button -->
    <div class="flex items-center gap-3 mb-4">
      <button
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95"
        :class="
          isReadingAll
            ? 'bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-200'
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md shadow-blue-200'
        "
        @click="readAll"
      >
        <span v-if="isReadingAll">⏹️ ຢຸດ</span>
        <span v-else>🔊 ອ່ານທັງໝົດ</span>
      </button>
      <span v-if="isReadingAll" class="text-sm text-blue-600 animate-pulse font-medium">
        ກຳລັງອ່ານ... ({{ readingIndex + 1 }}/{{
          singleConsonants.length +
          doubleConsonants.length +
          basicVowels.length +
          compoundVowels.length
        }})
      </span>
    </div>

    <!-- Filter Tabs in Lao -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button
        class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all duration-200"
        :class="
          hangulStore.filterType === 'all'
            ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
        "
        @click="setFilter('all')"
      >
        ທັງໝົດ
      </button>
      <button
        class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all duration-200"
        :class="
          hangulStore.filterType === 'consonant'
            ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
        "
        @click="setFilter('consonant')"
      >
        ພະຍັນຊະນະ ({{ hangulStore.consonantList.length }})
      </button>
      <button
        class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all duration-200"
        :class="
          hangulStore.filterType === 'basic'
            ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'
        "
        @click="setFilter('basic')"
      >
        ສະຫຼະພື້ນຖານ ({{ basicVowels.length }})
      </button>
      <button
        class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all duration-200"
        :class="
          hangulStore.filterType === 'compound'
            ? 'bg-purple-500 text-white border-purple-500 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
        "
        @click="setFilter('compound')"
      >
        ສະຫຼະປະສົມ ({{ compoundVowels.length }})
      </button>
    </div>

    <!-- Progress Section -->
    <div class="mb-5">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-sm text-slate-500">
          ຄວາມຄືບໜ້າ:
          <span class="font-semibold text-slate-700"
            >{{ hangulStore.progress.done }}/{{ hangulStore.progress.total }}</span
          >
        </span>
        <span class="text-sm font-bold text-blue-500">{{ hangulStore.progress.percent }}%</span>
      </div>
      <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-500 ease-out"
          :style="{ width: hangulStore.progress.percent + '%' }"
        ></div>
      </div>
    </div>

    <!-- ====== ສະແດງຕາມ filter ====== -->
    <!-- ທັງໝົດ -->
    <div v-if="hangulStore.filterType === 'all'">
      <!-- ພະຍັນຊະນະດ່ຽວ -->
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-blue-500"></span> ພະຍັນຊະນະດ່ຽວ (단자음) —
          {{ singleConsonants.length }} ຕົວ
        </h3>
        <div
          class="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 gap-2 sm:gap-2.5"
        >
          <HangulCard
            v-for="char in singleConsonants"
            :key="char.char"
            :char="char"
            :compact="true"
          />
        </div>
      </div>

      <!-- ພະຍັນຊະນະຄູ່ -->
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-orange-500"></span> ພະຍັນຊະນະຄູ່ (쌍자음) —
          {{ doubleConsonants.length }} ຕົວ
        </h3>
        <div
          class="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-2.5"
        >
          <HangulCard
            v-for="char in doubleConsonants"
            :key="char.char"
            :char="char"
            :compact="true"
          />
        </div>
      </div>

      <!-- ສະຫຼະພື້ນຖານ -->
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span> ສະຫຼະພື້ນຖານ (기본 모음) —
          {{ basicVowels.length }} ຕົວ
        </h3>
        <div
          class="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-2.5"
        >
          <HangulCard v-for="char in basicVowels" :key="char.char" :char="char" :compact="true" />
        </div>
      </div>

      <!-- ສະຫຼະປະສົມ -->
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-purple-500"></span> ສະຫຼະປະສົມ (복합 모음) —
          {{ compoundVowels.length }} ຕົວ
        </h3>
        <div
          class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-2.5"
        >
          <HangulCard
            v-for="char in compoundVowels"
            :key="char.char"
            :char="char"
            :compact="true"
          />
        </div>
      </div>
    </div>

    <!-- ====== Filter: ພະຍັນຊະນະ ====== -->
    <div v-if="hangulStore.filterType === 'consonant'">
      <div class="mb-4">
        <h3 class="text-sm font-bold text-blue-600 mb-3">ພະຍັນຊະນະດ່ຽວ (단자음)</h3>
        <div class="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-7 gap-2 sm:gap-2.5">
          <HangulCard
            v-for="char in singleConsonants"
            :key="char.char"
            :char="char"
            :compact="true"
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-bold text-orange-600 mb-3">ພະຍັນຊະນະຄູ່ (쌍자음)</h3>
        <div class="grid grid-cols-5 sm:grid-cols-5 gap-2 sm:gap-2.5">
          <HangulCard
            v-for="char in doubleConsonants"
            :key="char.char"
            :char="char"
            :compact="true"
          />
        </div>
      </div>
    </div>

    <!-- ====== Filter: ສະຫຼະພື້ນຖານ ====== -->
    <div v-if="hangulStore.filterType === 'basic'">
      <div class="mb-2">
        <h3 class="text-sm font-bold text-emerald-600 mb-3">
          ສະຫຼະພື້ນຖານ (기본 모음) — {{ basicVowels.length }} ຕົວ
        </h3>
        <p class="text-xs text-slate-400 mb-3">ສະຫຼະ 10 ຕົວທຳອິດທີ່ຕ້ອງຮຽນຮູ້ກ່ອນ</p>
      </div>
      <div class="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-2 sm:gap-2.5">
        <HangulCard v-for="char in basicVowels" :key="char.char" :char="char" :compact="true" />
      </div>
    </div>

    <!-- ====== Filter: ສະຫຼະປະສົມ ====== -->
    <div v-if="hangulStore.filterType === 'compound'">
      <div class="mb-2">
        <h3 class="text-sm font-bold text-purple-600 mb-3">
          ສະຫຼະປະສົມ (복합 모음) — {{ compoundVowels.length }} ຕົວ
        </h3>
        <p class="text-xs text-slate-400 mb-3">ສະຫຼະທີ່ເກີດຈາກການປະສົມ 2 ສະຫຼະເຂົ້າກັນ</p>
      </div>
      <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2 sm:gap-2.5">
        <HangulCard v-for="char in compoundVowels" :key="char.char" :char="char" :compact="true" />
      </div>
    </div>
  </div>
</template>
