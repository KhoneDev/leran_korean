<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { useHangulStore } from '@/stores/useHangulStore'
import { levelConfigs } from '@/data/levels'
import { getWordsByLevel } from '@/data/vocabulary'
import type { ProficiencyLevel } from '@/types'

const userStore = useUserStore()
const hangulStore = useHangulStore()

// Stats in Lao
const stats = computed(() => [
  { label: 'Total XP', value: userStore.progress.totalXP.toLocaleString(), icon: '🏆', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { label: 'ຄຳສັບ', value: userStore.progress.wordsLearned, icon: '📝', color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Streak', value: userStore.progress.streak + ' ມື້', icon: '🔥', color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Level', value: userStore.progress.currentLevel, icon: '📊', color: 'text-purple-500', bg: 'bg-purple-50' },
])

// XP by level (bar chart data)
const xpByLevel = computed(() => {
  const levels: ProficiencyLevel[] = [1, 2, 3, 4, 5, 6]
  const maxXP = Math.max(...levels.map(l => userStore.progress.levelXP[l] ?? 0), 100)
  return levels.map(l => ({
    level: l,
    xp: userStore.progress.levelXP[l] ?? 0,
    percent: Math.min(100, Math.round(((userStore.progress.levelXP[l] ?? 0) / maxXP) * 100)),
    config: levelConfigs[l],
    unlocked: true,
  }))
})

// Words by category (from learned words)
const wordsByCategory = computed(() => {
  const learned = userStore.progress.learnedWords
  const categories: Record<string, { total: number; learned: number }> = {}
  for (let l = 1; l <= userStore.progress.currentLevel; l++) {
    const words = getWordsByLevel(l as ProficiencyLevel)
    for (const word of words) {
      if (!categories[word.category]) {
        categories[word.category] = { total: 0, learned: 0 }
      }
      const cat = categories[word.category]
      if (cat) {
        cat.total++
        if (learned.includes(word.id)) cat.learned++
      }
    }
  }
  const categoryLabels: Record<string, string> = {
    greetings: '👋 ທັກທາຍ', pronouns: '🗣️ ສັບພະນາມ', numbers: '🔢 ຕົວເລກ',
    family: '👨‍👩‍👧 ຄອບຄົວ', food: '🍜 ອາຫານ', body: '🦴 ຮ່າງກາຍ',
    colors: '🎨 ສີ', time: '📅 ວັນເວລາ', animals: '🐕 ສັດ',
    places: '🏠 ສະຖານທີ່', verbs: '🏃 ກິລິຍາ', adjectives: '😊 ຄຸນສັບ',
    conjunctions: '🔗 ເຊື່ອມ', sentences: '💬 ປະໂຫຍກ', emotions: '💖 ອາລົມ',
    work: '💼 ການເຮັດວຽກ', shopping: '🛍️ ຊື້ເຄື່ອງ', transport: '🚗 ການເດີນທາງ',
    health: '🏥 ສຸຂະພາບ', technology: '💻 ເຕັກໂນໂລຊີ', society: '🌐 ສັງຄົມ',
    culture: '🎭 ວັດທະນະທຳ', economy: '📈 ເສດຖະກິດ', business: '🏢 ທຸລະກິດ',
    politics: '🏛️ ການເມືອງ', academic: '🎓 ວິຊາການ', idioms: '📜 ສຳນວນ',
    formal: '👔 ທາງການ', literary: '📚 ວັນນະຄະດີ', nature: '🌿 ທຳມະຊາດ',
    people: '👥 ບຸກຄົນ', media: '📺 ສື່ມວນຊົນ',
  }
  return Object.entries(categories)
    .map(([cat, data]) => ({
      category: cat,
      label: categoryLabels[cat] || cat,
      total: data.total,
      learned: data.learned,
      percent: data.total > 0 ? Math.round((data.learned / data.total) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total)
})

// Hangul progress
const hangulProgress = computed(() => hangulStore.progress)

// Level progress percentage
const levelProgress = computed(() => {
  const current = userStore.progress.currentLevel
  const config = levelConfigs[current]
  const nextConfig = levelConfigs[(current + 1) as ProficiencyLevel]
  if (!nextConfig) return 100
  const xpRange = nextConfig.unlockRequirement.minXP - config.unlockRequirement.minXP
  const xpProgress = userStore.progress.totalXP - config.unlockRequirement.minXP
  return Math.min(100, Math.max(0, Math.round((xpProgress / xpRange) * 100)))
})

// Category colors for bar chart
const categoryColors: Record<string, string> = {
  greetings: 'bg-blue-500', pronouns: 'bg-indigo-500', numbers: 'bg-purple-500',
  family: 'bg-pink-500', food: 'bg-red-500', body: 'bg-orange-500',
  colors: 'bg-yellow-500', time: 'bg-green-500', animals: 'bg-teal-500',
  places: 'bg-cyan-500', verbs: 'bg-blue-600', adjectives: 'bg-violet-500',
  conjunctions: 'bg-slate-500', sentences: 'bg-emerald-500',
  emotions: 'bg-rose-500', work: 'bg-indigo-600', shopping: 'bg-amber-500',
  transport: 'bg-sky-500', health: 'bg-emerald-600', technology: 'bg-cyan-600',
  society: 'bg-blue-700', culture: 'bg-purple-600', economy: 'bg-emerald-700',
  business: 'bg-slate-700', politics: 'bg-red-600', academic: 'bg-indigo-700',
  idioms: 'bg-amber-600', formal: 'bg-stone-600', literary: 'bg-violet-600',
  nature: 'bg-teal-600', people: 'bg-pink-600', media: 'bg-sky-600',
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">📊 Dashboard ສະຖິຕິ</h1>
      <p class="text-sm sm:text-base text-slate-500">ສະຖິຕິການຮຽນພາສາເກົາຫຼີຂອງທ່ານ</p>
    </div>

    <!-- ===== Stats Cards ===== -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 text-center hover:shadow-lg transition-shadow"
      >
        <div class="text-3xl sm:text-4xl mb-2">{{ stat.icon }}</div>
        <div class="text-2xl sm:text-3xl font-bold" :class="stat.color">{{ stat.value }}</div>
        <div class="text-xs sm:text-sm text-slate-500 mt-1">{{ stat.label }}</div>
      </div>
    </div>

    <!-- ===== Level Progress ===== -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-6">
      <h2 class="text-lg font-bold text-slate-800 mb-4">📈 ຄວາມຄືບໜ້າ Level</h2>
      <div class="flex items-center gap-4 mb-3">
        <span class="text-4xl">{{ levelConfigs[userStore.progress.currentLevel]?.icon }}</span>
        <div class="flex-1">
          <div class="flex items-baseline gap-2 mb-1">
            <span class="text-xl font-bold text-slate-800">
              Level {{ userStore.progress.currentLevel }}
            </span>
            <span class="text-sm text-slate-500">
              {{ levelConfigs[userStore.progress.currentLevel]?.nameKr }}
            </span>
          </div>
          <div class="text-sm text-slate-500">
            {{ userStore.progress.totalXP.toLocaleString() }} XP
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-blue-500">{{ levelProgress }}%</div>
        </div>
      </div>
      <div class="h-4 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
          :style="{ width: levelProgress + '%' }"
        />
      </div>
      <div class="flex justify-between text-xs text-slate-400 mt-2">
        <span>Level {{ userStore.progress.currentLevel }}</span>
        <span v-if="userStore.progress.currentLevel < 6">
          Level {{ userStore.progress.currentLevel + 1 }}
        </span>
        <span v-else>MAX</span>
      </div>
    </div>

    <!-- ===== XP by Level (Bar Chart) ===== -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-6">
      <h2 class="text-lg font-bold text-slate-800 mb-4">🏆 XP ຕາມ Level</h2>
      <div class="space-y-3">
        <div v-for="item in xpByLevel" :key="item.level" class="flex items-center gap-3">
          <div class="w-16 sm:w-20 text-right">
            <span
              class="text-sm font-medium"
              :class="item.unlocked ? 'text-slate-700' : 'text-slate-400'"
            >
              {{ item.config.icon }} Lv.{{ item.level }}
            </span>
          </div>
          <div class="flex-1 h-6 sm:h-7 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2"
              :class="
                item.unlocked ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-slate-300'
              "
              :style="{ width: Math.max(item.percent, item.xp > 0 ? 8 : 0) + '%' }"
            >
              <span v-if="item.xp > 0" class="text-[10px] font-bold text-white">{{
                item.xp.toLocaleString()
              }}</span>
            </div>
          </div>
          <div class="w-12 text-right">
            <span class="text-xs text-slate-400">{{ item.xp.toLocaleString() }} XP</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Words Learned by Category ===== -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-6">
      <h2 class="text-lg font-bold text-slate-800 mb-4">📝 ຄຳສັບຕາມໝວດ</h2>
      <div class="space-y-2.5">
        <div v-for="cat in wordsByCategory" :key="cat.category" class="flex items-center gap-3">
          <div class="w-28 sm:w-36 text-sm text-slate-600 truncate">{{ cat.label }}</div>
          <div class="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500 ease-out"
              :class="categoryColors[cat.category] || 'bg-slate-400'"
              :style="{ width: Math.max(cat.percent, cat.learned > 0 ? 5 : 0) + '%' }"
            />
          </div>
          <div class="w-16 text-right text-xs text-slate-500">
            {{ cat.learned }}/{{ cat.total }}
          </div>
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="text-sm font-medium text-slate-600"> ຄຳສັບທັງໝົດທີ່ຮຽນ </span>
        <span class="text-lg font-bold text-blue-500">
          {{ userStore.progress.wordsLearned }} ຄຳ
        </span>
      </div>
    </div>

    <!-- ===== Hangul Progress ===== -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-6">
      <h2 class="text-lg font-bold text-slate-800 mb-4">🇰🇷 ຄວາມຄືບໜ້າ 한글</h2>
      <div class="flex items-center gap-4">
        <div
          class="text-4xl font-bold"
          :class="hangulProgress.percent === 100 ? 'text-emerald-500' : 'text-blue-500'"
        >
          {{ hangulProgress.percent }}%
        </div>
        <div class="flex-1">
          <div class="h-4 bg-slate-100 rounded-full overflow-hidden mb-1">
            <div
              class="h-full rounded-full transition-all duration-700 ease-out"
              :class="
                hangulProgress.percent === 100
                  ? 'bg-gradient-to-r from-emerald-400 to-green-500'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500'
              "
              :style="{ width: hangulProgress.percent + '%' }"
            />
          </div>
          <div class="text-sm text-slate-500">
            {{ hangulProgress.done }}/{{ hangulProgress.total }} ຕົວອັກສອນ
          </div>
        </div>
      </div>
      <!-- Hangul breakdown in Lao -->
      <div class="grid grid-cols-3 gap-3 mt-4">
        <div class="text-center p-3 bg-blue-50 rounded-xl">
          <div class="text-lg font-bold text-blue-600">
            {{ hangulStore.completedChars.filter((c) => /[ㄱ-ㅎ]/.test(c)).length }}
          </div>
          <div class="text-xs text-slate-500">ພະຍັນຊະນະ</div>
        </div>
        <div class="text-center p-3 bg-emerald-50 rounded-xl">
          <div class="text-lg font-bold text-emerald-600">
            {{ hangulStore.completedChars.filter((c) => /[ㅏ-ㅣ]/.test(c)).length }}
          </div>
          <div class="text-xs text-slate-500">ສະຫຼະ</div>
        </div>
        <div class="text-center p-3 bg-purple-50 rounded-xl">
          <div class="text-lg font-bold text-purple-600">
            {{ hangulStore.completedChars.filter((c) => /[가-힣]/.test(c)).length }}
          </div>
          <div class="text-xs text-slate-500">ປະສົມ</div>
        </div>
      </div>
    </div>

    <!-- ===== Quick Actions in Lao ===== -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <router-link
        to="/hangul"
        class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all"
      >
        <div class="text-3xl mb-2">🇰🇷</div>
        <div class="text-sm font-bold text-slate-700">ຮຽນ 한글</div>
      </router-link>
      <router-link
        to="/quiz"
        class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all"
      >
        <div class="text-3xl mb-2">🎯</div>
        <div class="text-sm font-bold text-slate-700">ເຮັດ Quiz</div>
      </router-link>
      <router-link
        to="/grammar"
        class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all"
      >
        <div class="text-3xl mb-2">📖</div>
        <div class="text-sm font-bold text-slate-700">ໄວຍາກອນ</div>
      </router-link>
      <router-link
        to="/levels"
        class="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all"
      >
        <div class="text-3xl mb-2">📚</div>
        <div class="text-sm font-bold text-slate-700">ເລືອກລະດັບ</div>
      </router-link>
    </div>
  </div>
</template>
