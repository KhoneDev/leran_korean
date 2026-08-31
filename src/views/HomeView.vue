<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { useHangulStore } from '@/stores/useHangulStore'
import { levelConfigs, getNextLevel } from '@/data/levels'
import { getWordsByLevel } from '@/data/vocabulary'
import { speakNormal } from '@/utils/speech'

const userStore = useUserStore()
const hangulStore = useHangulStore()

const currentConfig = computed(() => levelConfigs[userStore.progress.currentLevel])
const nextLevel = computed(() => getNextLevel(userStore.progress.currentLevel))

// Words for current level
const currentLevelWords = computed(() => getWordsByLevel(userStore.progress.currentLevel))

// Word of the day (deterministic based on day of year)
const wordOfTheDayIndex = computed(() => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24)
  const words = currentLevelWords.value
  return words.length > 0 ? dayOfYear % words.length : 0
})

const wordOfTheDay = computed(() => {
  const words = currentLevelWords.value
  return words[wordOfTheDayIndex.value] || words[0] || null
})

const isPlayingAudio = ref(false)

async function playWordAudio(text: string) {
  if (isPlayingAudio.value) return
  isPlayingAudio.value = true
  try {
    await speakNormal(text)
  } finally {
    isPlayingAudio.value = false
  }
}

// 4 Main Learning Features in Lao
const learningPillars = [
  {
    icon: '🇰🇷',
    title: 'ຮຽນ 한글 (Hangul)',
    desc: 'ພະຍັນຊະນະ 14 + ສະຫຼະ 21 ຕົວ ຝຶກປະສົມຄຳ',
    badge: '35 ຕົວອັກສອນ',
    badgeColor: 'bg-blue-100 text-blue-700',
    link: '/hangul',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🃏',
    title: 'ທ່ອງສັບ Flashcard',
    desc: 'ລະບົບທວນຄຳສັບອັດສະລິຍະ SRS',
    badge: 'ລະບົບ SRS',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    link: '/flashcard',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: '📖',
    title: 'ໄວຍາກອນ & ໂຄງສ້າງ',
    desc: 'ສະຫຼຸບໄວຍາກອນເຂົ້າໃຈງ່າຍ ພ້ອມລຽງປະໂຫຍກ',
    badge: 'ໂຄງສ້າງປະໂຫຍກ',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    link: '/grammar',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '🎯',
    title: 'ແບບຝຶກຫັດປະໂຫຍກ (Quiz)',
    desc: 'ທົດສອບຄວາມເຂົ້າໃຈ 4 ຮູບແບບ ມ່ວນແລະຖືກຕ້ອງ',
    badge: '4 ຮູບແບບໂຈດ',
    badgeColor: 'bg-amber-100 text-amber-800',
    link: '/quiz',
    gradient: 'from-amber-500 to-orange-500',
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8">
    <!-- Hero / Welcome Banner -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-5 sm:p-8 shadow-xl shadow-blue-500/15">
      <!-- Decorative background circles -->
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl pointer-events-none"></div>

      <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide text-blue-100">
            <span>✨</span>
            <span>ຮຽນພາສາເກົາຫຼີສຳລັບຄົນລາວ</span>
          </div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            안녕하세요!
          </h1>
          <p class="text-blue-100 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            ເລີ່ມຕົ້ນຮຽນພາສາເກົາຫຼີຕັ້ງແຕ່ສູນ ຈົນຮອດລະດັບ TOPIK 1-6 ຢ່າງເປັນຂັ້ນຕອນ
          </p>
        </div>

        <!-- Quick Level Card -->
        <div class="w-full sm:w-auto bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex sm:flex-col items-center justify-between sm:justify-center gap-3 shrink-0">
          <div class="flex items-center gap-3">
            <span class="text-3xl sm:text-4xl">{{ currentConfig.icon }}</span>
            <div class="text-left sm:text-center">
              <div class="text-xs text-blue-200 uppercase font-semibold">ລະດັບປະຈຸບັນ</div>
              <div class="text-base font-bold text-white leading-tight">Level {{ userStore.progress.currentLevel }}</div>
              <div class="text-[11px] text-blue-200">{{ currentConfig.nameKr }}</div>
            </div>
          </div>
          <RouterLink
            to="/levels"
            class="px-3.5 py-1.5 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition-all shadow-sm active:scale-95 text-center"
          >
            ປ່ຽນລະດັບ
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Quick Stats Bar (Clean & Thumb-friendly) -->
    <div class="grid grid-cols-3 gap-2.5 sm:gap-4">
      <div class="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 text-center shadow-xs hover:border-blue-200 transition-all">
        <div class="text-2xl sm:text-3xl font-extrabold text-blue-600">
          {{ userStore.progress.totalXP }}
        </div>
        <div class="text-xs font-semibold text-slate-500 mt-0.5 flex items-center justify-center gap-1">
          <span>🏆</span> <span>Total XP</span>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 text-center shadow-xs hover:border-emerald-200 transition-all">
        <div class="text-2xl sm:text-3xl font-extrabold text-emerald-600">
          {{ userStore.progress.wordsLearned }}
        </div>
        <div class="text-xs font-semibold text-slate-500 mt-0.5 flex items-center justify-center gap-1">
          <span>📝</span> <span>ຄຳສັບທີ່ຈື່ໄດ້</span>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 text-center shadow-xs hover:border-orange-200 transition-all">
        <div class="text-2xl sm:text-3xl font-extrabold text-orange-500">
          {{ userStore.progress.streak }}
        </div>
        <div class="text-xs font-semibold text-slate-500 mt-0.5 flex items-center justify-center gap-1">
          <span>🔥</span> <span>ມື້ຕໍ່ເນື່ອງ</span>
        </div>
      </div>
    </div>

    <!-- Continue Learning Primary CTA Card -->
    <div class="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            ຄວາມຄືບໜ້າການຮຽນ
          </div>
          <div class="flex items-center gap-2">
            <h2 class="text-lg sm:text-xl font-bold text-slate-800">
              Level {{ userStore.progress.currentLevel }} — {{ currentConfig.nameKr }} ({{ currentConfig.name }})
            </h2>
          </div>
        </div>

        <RouterLink
          to="/flashcard"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all"
        >
          <span>🚀 ເລີ່ມທ່ອງຄຳສັບຕໍ່</span>
          <span>→</span>
        </RouterLink>
      </div>

      <!-- Hangul Progress Mini Bar -->
      <div class="space-y-1.5 pt-2 border-t border-slate-100">
        <div class="flex items-center justify-between text-xs font-semibold">
          <span class="text-slate-600 flex items-center gap-1">
            <span>🇰🇷</span> <span>ຕົວອັກສອນ 한글</span>
          </span>
          <span class="text-blue-600">{{ hangulStore.progress.done }} / {{ hangulStore.progress.total }} ຕົວ ({{ hangulStore.progress.percent }}%)</span>
        </div>
        <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
            :style="{ width: hangulStore.progress.percent + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Word of the Day (ຄຳສັບປະຈຳວັນ) -->
    <div
      v-if="wordOfTheDay"
      class="bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-purple-50/80 rounded-3xl border border-indigo-100/80 p-5 sm:p-6 shadow-sm"
    >
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">🌟</span>
          <span class="text-xs font-bold text-indigo-700 uppercase tracking-wide">ຄຳສັບປະຈຳວັນ</span>
        </div>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
          Lv.{{ userStore.progress.currentLevel }}
        </span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="flex items-baseline gap-3">
            <span class="text-3xl sm:text-4xl font-extrabold text-slate-800">
              {{ wordOfTheDay.korean }}
            </span>
            <span class="text-sm font-semibold text-indigo-600">
              [{{ wordOfTheDay.romanization }}]
            </span>
          </div>
          <div class="text-base sm:text-lg font-bold text-slate-700">
            👉 {{ wordOfTheDay.meaning }}
          </div>
          <div v-if="wordOfTheDay.examples && wordOfTheDay.examples[0]" class="text-xs text-slate-500 italic mt-1">
            💬 "{{ wordOfTheDay.examples[0].korean }}" ({{ wordOfTheDay.examples[0].meaning }})
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <!-- Speech audio button -->
          <button
            class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-indigo-200 text-indigo-700 font-bold text-sm hover:bg-indigo-50 shadow-xs active:scale-95 transition-all"
            @click="playWordAudio(wordOfTheDay.korean)"
            aria-label="ຟັງສຽງອ່ານພາສາເກົາຫຼີ"
          >
            <span>🔊</span>
            <span>ຟັງສຽງອ່ານ</span>
          </button>

          <!-- Toggle learned -->
          <button
            class="flex items-center justify-center p-2.5 rounded-2xl border transition-all text-sm font-bold active:scale-95"
            :class="userStore.progress.learnedWords.includes(wordOfTheDay.id)
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300'"
            @click="userStore.learnWord(wordOfTheDay.id)"
            title="ບັນທຶກວ່າຈື່ໄດ້ແລ້ວ"
          >
            <span>{{ userStore.progress.learnedWords.includes(wordOfTheDay.id) ? '✓ ຈື່ໄດ້ແລ້ວ' : '+ ຈື່ໄດ້' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Core Learning Modules (4 ໝວດໝູ່ການຮຽນຮູ້ຫຼັກ) -->
    <div>
      <div class="flex items-center justify-between mb-3 px-1">
        <h2 class="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <span>📚</span> <span>ໝວດໝູ່ການຮຽນຮູ້</span>
        </h2>
        <span class="text-xs text-slate-400 font-medium">ແຕະເພື່ອເຂົ້າສູ່ບົດຮຽນ</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <RouterLink
          v-for="pillar in learningPillars"
          :key="pillar.link"
          :to="pillar.link"
          class="group bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200 active:scale-[0.98] flex items-center gap-4"
        >
          <div
            class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl sm:text-3xl text-white shadow-sm shrink-0 transition-transform group-hover:scale-105"
            :class="pillar.gradient"
          >
            {{ pillar.icon }}
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-0.5">
              <span class="font-bold text-slate-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors truncate">
                {{ pillar.title }}
              </span>
            </div>
            <p class="text-xs text-slate-500 line-clamp-1">
              {{ pillar.desc }}
            </p>
            <span class="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md mt-1" :class="pillar.badgeColor">
              {{ pillar.badge }}
            </span>
          </div>

          <div class="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all text-lg shrink-0">
            →
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- Next Level Preview Card -->
    <div
      v-if="nextLevel"
      class="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl border border-slate-200/90 p-5 sm:p-6"
    >
      <div class="flex items-center justify-between gap-3 mb-2">
        <div class="flex items-center gap-3">
          <span class="text-3xl">{{ nextLevel.icon }}</span>
          <div>
            <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">ເປົ້າໝາຍຖັດໄປ</div>
            <div class="text-base font-bold text-slate-800">
              Level {{ nextLevel.level }} — {{ nextLevel.nameKr }} ({{ nextLevel.name }})
            </div>
          </div>
        </div>

        <RouterLink
          to="/levels"
          class="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors shadow-xs active:scale-95"
        >
          <span>ເບິ່ງເງື່ອນໄຂ</span>
          <span>→</span>
        </RouterLink>
      </div>
      <p class="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
        {{ nextLevel.description }}
      </p>
    </div>
  </div>
</template>
