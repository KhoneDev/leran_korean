<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { levelConfigs } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'

const props = withDefaults(
  defineProps<{
    level?: ProficiencyLevel
    size?: 'sm' | 'md' | 'lg'
    showProgress?: boolean
    showName?: boolean
    interactive?: boolean
  }>(),
  {
    size: 'md',
    showProgress: false,
    showName: false,
    interactive: false,
  },
)

const userStore = useUserStore()
const displayLevel = computed(() => props.level ?? userStore.progress.currentLevel)
const config = computed(() => levelConfigs[displayLevel.value])

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2.5 py-1 text-xs gap-1.5'
    case 'md':
      return 'px-3 py-1.5 text-xs sm:text-sm gap-2'
    case 'lg':
      return 'px-4 py-2 text-sm sm:text-base gap-2.5'
  }
})
</script>

<template>
  <div
    class="inline-flex items-center font-semibold rounded-full border whitespace-nowrap transition-all duration-200"
    :class="[
      sizeClasses,
      interactive ? 'hover:scale-105 active:scale-95 cursor-pointer shadow-sm' : '',
    ]"
    :style="{
      backgroundColor: `color-mix(in srgb, ${config.color} 12%, #ffffff)`,
      borderColor: `color-mix(in srgb, ${config.color} 30%, transparent)`,
      color: config.color,
    }"
  >
    <span class="text-sm sm:text-base">{{ config.icon }}</span>
    <span class="font-bold tracking-tight">Lv.{{ displayLevel }}</span>
    <span v-if="showName" class="font-medium opacity-90 text-[11px] sm:text-xs">
      {{ config.nameKr }}
    </span>
    <div
      v-if="showProgress"
      class="w-12 h-1.5 rounded-full overflow-hidden ml-1"
      :style="{ backgroundColor: `color-mix(in srgb, ${config.color} 20%, transparent)` }"
    >
      <div
        class="h-full rounded-full transition-all duration-500"
        :style="{ width: userStore.levelProgressPercent + '%', backgroundColor: config.color }"
      ></div>
    </div>
  </div>
</template>
