<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { levelConfigs } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'
const props = withDefaults(defineProps<{
  level?: ProficiencyLevel
  size?: 'sm' | 'md' | 'lg'
  showProgress?: boolean
  showName?: boolean
}>(), {
  size: 'md',
  showProgress: false,
  showName: false,
})
const userStore = useUserStore()
const displayLevel = computed(() => props.level ?? userStore.progress.currentLevel)
const config = computed(() => levelConfigs[displayLevel.value])
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'px-2.5 py-1 text-xs gap-1.5'
    case 'md': return 'px-3 py-1.5 text-sm gap-2'
    case 'lg': return 'px-4 py-2 text-base gap-2.5'
  }
})
</script>

<template>
  <div
    class="inline-flex items-center font-semibold rounded-full border whitespace-nowrap"
    :class="sizeClasses"
    :style="{
      backgroundColor: `color-mix(in srgb, ${config.color} 12%, transparent)`,
      borderColor: `color-mix(in srgb, ${config.color} 35%, transparent)`,
      color: config.color,
    }"
  >
    <span>{{ config.icon }}</span>
    <span class="font-bold">Lv.{{ displayLevel }}</span>
    <span v-if="showName" class="opacity-80">{{ config.nameKr }}</span>
    <div
      v-if="showProgress"
      class="w-10 h-1 rounded-full overflow-hidden"
      :style="{ backgroundColor: `color-mix(in srgb, ${config.color} 20%, transparent)` }"
    >
      <div
        class="h-full rounded-full transition-all duration-300"
        :style="{ width: userStore.levelProgressPercent + '%', backgroundColor: config.color }"
      ></div>
    </div>
  </div>
</template>
