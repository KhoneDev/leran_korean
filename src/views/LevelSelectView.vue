<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { allLevels, getLevelProgress } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'
import LevelBadge from '@/components/LevelBadge.vue'
const userStore = useUserStore()
function selectLevel(level: ProficiencyLevel) {
  userStore.setCurrentLevel(level)
}
function getProgress(level: ProficiencyLevel) {
  return getLevelProgress(
    level,
    userStore.progress.totalXP,
    userStore.progress.wordsLearned,
    userStore.progress.lessonsCompleted,
  )
}
const currentConfig = computed(() => userStore.getLevelInfo(userStore.progress.currentLevel))
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">📚 เลือกระดับการเรียน</h1>
      <p class="text-sm sm:text-base text-slate-500">ระดับ TOPIK 1-6 — เลือกระดับที่เหมาะกับคุณ</p>
    </div>
    <!-- Current Level Card -->
    <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-8 shadow-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="text-4xl sm:text-5xl">{{ currentConfig.icon }}</div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">
              ระดับปัจจุบัน
            </div>
            <div class="text-lg sm:text-xl font-bold text-slate-800 mb-1">
              Level {{ userStore.progress.currentLevel }} — {{ currentConfig.nameKr }}
            </div>
            <LevelBadge
              :level="userStore.progress.currentLevel"
              size="md"
              show-progress
              show-name
            />
          </div>
        </div>
        <div class="flex gap-6 sm:gap-8">
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
              {{ userStore.progress.lessonsCompleted }}
            </div>
            <div class="text-xs text-slate-400">บทเรียน</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Level Cards -->
    <div class="space-y-4">
      <div
        v-for="lvl in allLevels"
        :key="lvl.level"
        class="bg-white rounded-2xl border-2 p-5 sm:p-6 transition-all duration-200"
        :class="[
          userStore.progress.currentLevel === lvl.level
            ? 'shadow-lg'
            : 'border-slate-200 hover:border-slate-300 hover:shadow-md cursor-pointer',
        ]"
        :style="
          userStore.progress.currentLevel === lvl.level
            ? {
                borderColor: lvl.color,
                boxShadow: `0 4px 20px color-mix(in srgb, ${lvl.color} 15%, transparent)`,
              }
            : {}
        "
        @click="selectLevel(lvl.level)"
      >
        <!-- Card Header -->
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl sm:text-3xl">{{ lvl.icon }}</span>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span
                class="text-xs font-bold uppercase tracking-wider"
                :style="{ color: lvl.color }"
              >
                Level {{ lvl.level }}
              </span>
              <span
                v-if="userStore.progress.currentLevel === lvl.level"
                class="px-2 py-0.5 text-[10px] font-bold text-white rounded-full"
                :style="{ backgroundColor: lvl.color }"
              >
                ปัจจุบัน
              </span>
            </div>
            <div class="text-base sm:text-lg font-bold text-slate-800">
              {{ lvl.nameKr }} — {{ lvl.name }}
            </div>
          </div>

        </div>
        <!-- Description -->
        <p class="text-sm text-slate-500 mb-4 leading-relaxed">{{ lvl.description }}</p>
        <!-- Progress -->
        <div class="grid grid-cols-3 gap-3 mb-4">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-slate-500">🎯 XP</span>
              <span class="text-xs font-semibold" :style="{ color: lvl.color }"
                >{{ getProgress(lvl.level).xp }}%</span
              >
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :style="{ width: getProgress(lvl.level).xp + '%', backgroundColor: lvl.color }"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-slate-500">📝 คำ</span>
              <span class="text-xs font-semibold" :style="{ color: lvl.color }"
                >{{ getProgress(lvl.level).words }}%</span
              >
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :style="{ width: getProgress(lvl.level).words + '%', backgroundColor: lvl.color }"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-slate-500">📚 บท</span>
              <span class="text-xs font-semibold" :style="{ color: lvl.color }"
                >{{ getProgress(lvl.level).lessons }}%</span
              >
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :style="{ width: getProgress(lvl.level).lessons + '%', backgroundColor: lvl.color }"
              ></div>
            </div>
          </div>
        </div>
        <!-- Skills -->
        <div class="mb-3">
          <div class="text-xs font-semibold text-slate-600 mb-2">ทักษะที่จะได้:</div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(skill, idx) in lvl.skills"
              :key="idx"
              class="px-2.5 py-1 text-xs rounded-lg bg-slate-50 text-slate-600 border border-slate-100"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <!-- Grammar Tags -->
        <div>
          <div class="text-xs font-semibold text-slate-600 mb-2">ไวยากรณ์:</div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(topic, idx) in lvl.grammarTopics"
              :key="idx"
              class="px-2 py-1 text-[11px] font-medium rounded-md border"
              :style="{
                backgroundColor: `color-mix(in srgb, ${lvl.color} 8%, transparent)`,
                borderColor: `color-mix(in srgb, ${lvl.color} 20%, transparent)`,
                color: lvl.color,
              }"
            >
              {{ topic }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
