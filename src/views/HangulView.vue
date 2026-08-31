<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useHangulStore } from '@/stores/useHangulStore'
import { useUserStore } from '@/stores/useUserStore'
import { getWordsByLevel, getCategoriesByLevel } from '@/data/vocabulary'
import { levelConfigs } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'
import HangulGrid from '@/components/hangul/HangulGrid.vue'
import HangulTrainer from '@/components/hangul/HangulTrainer.vue'
import CombinationTable from '@/components/hangul/CombinationTable.vue'
import { speakNormal, speakSlow } from '@/utils/speech'
import WordCard from '@/components/vocabulary/WordCard.vue'

const hangulStore = useHangulStore()
const userStore = useUserStore()
const activeTab = ref<'overview' | 'trainer' | 'combinations' | 'words'>('overview')
const selectedCategory = ref<string>('all')

const tabs = [
  { key: 'overview' as const, icon: '📋', label: 'ພາບລວມ' },
  { key: 'trainer' as const, icon: '🎯', label: 'ຝຶກເທື່ອລະຕົວ' },
  { key: 'combinations' as const, icon: '🔤', label: 'ການປະສົມ' },
  { key: 'words' as const, icon: '📝', label: 'ຄຳສັບ' },
]

// แยกสถิติ
const singleConsonants = computed(() => hangulStore.consonantList.filter((c) => c.consonantSubtype === 'single'))
const doubleConsonants = computed(() => hangulStore.consonantList.filter((c) => c.consonantSubtype === 'double'))
const basicVowels = computed(() => hangulStore.vowelList.filter((v) => v.vowelSubtype === 'basic'))
const compoundVowels = computed(() => hangulStore.vowelList.filter((v) => v.vowelSubtype === 'compound'))

// ระดับที่เลือกดูคำศัพท์ — sync กับ store
const viewLevel = ref<ProficiencyLevel>(userStore.progress.currentLevel)
const allLevels: ProficiencyLevel[] = [1, 2, 3, 4, 5, 6]
const levelDropdownOpen = ref(false)

watch(() => userStore.progress.currentLevel, (newLevel) => {
  viewLevel.value = newLevel
})

// คำศัพท์ตาม level ที่เลือก
const currentLevelWords = computed(() => getWordsByLevel(viewLevel.value))
const currentLevelCategories = computed(() => getCategoriesByLevel(viewLevel.value))

const filteredWords = computed(() => {
  if (selectedCategory.value === 'all') return currentLevelWords.value
  return currentLevelWords.value.filter((w) => w.category === selectedCategory.value)
})

function isLearned(wordId: string) {
  return userStore.progress.learnedWords.includes(wordId)
}

function toggleLearned(wordId: string) {
  if (isLearned(wordId)) {
    userStore.unlearnWord(wordId)
  } else {
    userStore.learnWord(wordId)
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    <!-- Page Header -->
    <div class="text-center mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
        🇰🇷 ຮຽນ 한글 <span class="text-slate-400 font-normal">(Hangul)</span>
      </h1>
      <p class="text-sm sm:text-base text-slate-500">
        ພະຍັນຊະນະ 14 ຕົວ + ສະຫຼະ 21 ຕົວ = ຕົວອັກສອນເກົາຫຼີທັງໝົດ
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 mb-6 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200"
        :class="
          activeTab === tab.key
            ? 'bg-blue-500 text-white shadow-md shadow-blue-200'
            : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-500'
        "
        @click="activeTab = tab.key"
      >
        <span>{{ tab.icon }}</span> <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div>
      <!-- ====== Overview Tab ====== -->
      <div v-if="activeTab === 'overview'">
        <!-- Stats Cards - แยก 4 กลุ่ม -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div
            class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
              {{ singleConsonants.length }}
            </div>
            <div class="text-xs text-slate-500 font-medium">ພະຍັນຊະນະດ່ຽວ</div>
            <div class="text-[10px] text-slate-400 mt-0.5">단자음</div>
          </div>
          <div
            class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
              {{ doubleConsonants.length }}
            </div>
            <div class="text-xs text-slate-500 font-medium">ພະຍັນຊະນະຄູ່</div>
            <div class="text-[10px] text-slate-400 mt-0.5">쌍자음</div>
          </div>
          <div
            class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1">
              {{ basicVowels.length }}
            </div>
            <div class="text-xs text-slate-500 font-medium">ສະຫຼະພື້ນຖານ</div>
            <div class="text-[10px] text-slate-400 mt-0.5">기본 모음</div>
          </div>
          <div
            class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-md transition-shadow"
          >
            <div class="text-2xl sm:text-3xl font-bold text-purple-500 mb-1">
              {{ compoundVowels.length }}
            </div>
            <div class="text-xs text-slate-500 font-medium">ສະຫຼະປະສົມ</div>
            <div class="text-[10px] text-slate-400 mt-0.5">복합 모음</div>
          </div>
        </div>

        <!-- Grid Section -->
        <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-slate-800 mb-4">📊 ຕາຕະລາງຕົວອັກສອນທັງໝົດ</h2>
          <HangulGrid />
        </div>
      </div>

      <!-- ====== Trainer Tab ====== -->
      <div v-if="activeTab === 'trainer'">
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <HangulTrainer />
        </div>
      </div>

      <!-- ====== Combinations Tab ====== -->
      <div v-if="activeTab === 'combinations'">
        <div class="mb-6">
          <h2 class="text-lg font-bold text-slate-800 mb-1">🔤 ການປະສົມພະຍັນຊະນະ + ສະຫຼະ</h2>
          <p class="text-sm text-slate-500">ຕາຕະລາງປະສົມຕົວອັກສອນເກົາຫຼີທັງໝົດ — ຄລິກເພື່ອຟັງສຽງ</p>
        </div>
        <CombinationTable />
      </div>

      <!-- ====== Words Tab ====== -->
      <div v-if="activeTab === 'words'">
        <!-- Level Dropdown -->
        <div class="mb-5">
          <div class="relative inline-block">
            <button
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-200 shadow-sm text-sm font-semibold text-slate-700"
              @click="levelDropdownOpen = !levelDropdownOpen"
            >
              <span>{{ levelConfigs[viewLevel].icon }}</span>
              <span>Level {{ viewLevel }} — {{ levelConfigs[viewLevel].nameKr }}</span>
              <svg class="w-4 h-4 text-slate-400 transition-transform" :class="{ 'rotate-180': levelDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              v-if="levelDropdownOpen"
              class="absolute left-0 top-full mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1"
            >
              <button
                v-for="lvl in allLevels"
                :key="lvl"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                :class="viewLevel === lvl
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'"
                @click="viewLevel = lvl; userStore.setCurrentLevel(lvl); levelDropdownOpen = false"
              >
                <span class="text-lg">{{ levelConfigs[lvl].icon }}</span>
                <div class="text-left">
                  <div class="font-semibold">Level {{ lvl }}</div>
                  <div class="text-xs text-slate-400">{{ levelConfigs[lvl].nameKr }} — {{ levelConfigs[lvl].name }}</div>
                </div>
                <span v-if="viewLevel === lvl" class="ml-auto text-blue-500">✓</span>
              </button>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex items-center gap-3 mb-2">
            <h2 class="text-lg font-bold text-slate-800">
              📝 ຄຳສັບ Level {{ viewLevel }}
            </h2>
            <span class="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full"
              >{{ currentLevelWords.length }} ຄຳ</span
            >
          </div>
          <p class="text-sm text-slate-500">ຄລິກ 🔊 ເພື່ອຟັງສຽງ • ຄລິກ ✅ ເພື່ອບັນທຶກວ່າຈື່ໄດ້</p>
        </div>

        <div class="flex flex-wrap gap-2 mb-5">
          <button
            class="px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200"
            :class="
              selectedCategory === 'all'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
            "
            @click="selectedCategory = 'all'"
          >
            ທັງໝົດ ({{ currentLevelWords.length }})
          </button>
          <button
            v-for="cat in currentLevelCategories"
            :key="cat"
            class="px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200"
            :class="
              selectedCategory === cat
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
            "
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <WordCard
            v-for="word in filteredWords"
            :key="word.id"
            :word="word"
            :is-learned="isLearned(word.id)"
            @toggle-learned="toggleLearned"
          />
        </div>

        <div v-if="filteredWords.length === 0" class="text-center py-12 text-slate-400">
          <div class="text-4xl mb-3">📭</div>
          <p class="text-lg">ບໍ່ມີຄຳສັບໃນໝວດນີ້</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
