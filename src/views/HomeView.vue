<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { useHangulStore } from '@/stores/useHangulStore'
import { levelConfigs, getNextLevel } from '@/data/levels'
import LevelBadge from '@/components/LevelBadge.vue'
const userStore = useUserStore()
const hangulStore = useHangulStore()
const currentConfig = computed(() => levelConfigs[userStore.progress.currentLevel])
const nextLevel = computed(() => getNextLevel(userStore.progress.currentLevel))
const features = [
  {
    icon: '🇰🇷',
    title: 'เรียน 한글',
    desc: 'พยัญชนะ + สระ 35 ตัว',
    link: '/hangul',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: '📚',
    title: 'เลือกระดับ',
    desc: 'TOPIK Level 1-6',
    link: '/levels',
    color: 'from-purple-500 to-pink-500',
  },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
    <!-- Hero Section -->
    <div class="text-center mb-10">
      <div class="text-5xl sm:text-6xl mb-4">🇰🇷</div>
      <h1 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">เรียนภาษาเกาหลี</h1>
      <p class="text-base sm:text-lg text-slate-500 max-w-md mx-auto">
        เริ่มต้นเรียนเกาหลีตั้งแต่ศูนย์ พร้อมระดับ TOPIK 1-6
      </p>
    </div>
    <!-- User Stats Card -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-8 shadow-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div
            class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl"
            :style="{
              backgroundColor: `color-mix(in srgb, ${currentConfig.color} 12%, transparent)`,
            }"
          >
            {{ currentConfig.icon }}
          </div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">
              ระดับปัจจุบัน
            </div>
            <div class="text-lg sm:text-xl font-bold text-slate-800 mb-1">
              Level {{ userStore.progress.currentLevel }}
            </div>
            <LevelBadge
              :level="userStore.progress.currentLevel"
              size="md"
              show-progress
              show-name
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 sm:gap-6">
          <div class="text-center">
            <div class="text-xl sm:text-2xl font-bold text-blue-500">
              {{ userStore.progress.totalXP }}
            </div>
            <div class="text-xs text-slate-400">Total XP</div>
          </div>
          <div class="text-center">
            <div class="text-xl sm:text-2xl font-bold text-emerald-500">
              {{ userStore.progress.wordsLearned }}
            </div>
            <div class="text-xs text-slate-400">คำศัพท์</div>
          </div>
          <div class="text-center">
            <div class="text-xl sm:text-2xl font-bold text-purple-500">
              {{ userStore.progress.streak }}
            </div>
            <div class="text-xs text-slate-400">วันต่อเนื่อง</div>
          </div>
        </div>
      </div>
      <!-- Hangul Progress -->
      <div class="mt-5 pt-5 border-t border-slate-100">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-slate-500">📝 ความคืบหน้า 한글</span>
          <span class="text-sm font-bold text-blue-500">{{ hangulStore.progress.percent }}%</span>
        </div>
        <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-500"
            :style="{ width: hangulStore.progress.percent + '%' }"
          ></div>
        </div>
        <div class="text-xs text-slate-400 mt-1.5">
          {{ hangulStore.progress.done }}/{{ hangulStore.progress.total }} ตัวอักษร
        </div>
      </div>
    </div>
    <!-- Quick Actions -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <RouterLink
        v-for="feat in features"
        :key="feat.link"
        :to="feat.link"
        class="group bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-200"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl shadow-sm"
            :class="feat.color"
          >
            {{ feat.icon }}
          </div>
          <div>
            <div
              class="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors"
            >
              {{ feat.title }}
            </div>
            <div class="text-sm text-slate-500">{{ feat.desc }}</div>
          </div>
          <div
            class="ml-auto text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
          >
            →
          </div>
        </div>
      </RouterLink>
    </div>
    <!-- Next Level Preview -->
    <div
      v-if="nextLevel"
      class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 p-5 sm:p-6"
    >
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">{{ nextLevel.icon }}</span>
        <div>
          <div class="text-xs text-slate-400 uppercase tracking-wide font-medium">ระดับถัดไป</div>
          <div class="text-base font-bold text-slate-800">
            Level {{ nextLevel.level }} — {{ nextLevel.nameKr }}
          </div>
        </div>
      </div>
      <p class="text-sm text-slate-500 mb-4">{{ nextLevel.description }}</p>
      <RouterLink
        to="/levels"
        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
      >
        <span>ดูเงื่อนไขปลดล็อก</span> <span>→</span>
      </RouterLink>
    </div>
  </div>
</template>
