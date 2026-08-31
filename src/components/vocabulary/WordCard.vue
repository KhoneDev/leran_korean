<template>
  <div
    class="group relative rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    :class="{ 'ring-2 ring-blue-400 bg-blue-50': isExpanded }"
  >
    <!-- Main word section -->
    <div class="p-4 cursor-pointer select-none" @click="isExpanded = !isExpanded">
      <div class="flex items-start justify-between">
        <div class="flex-1 min-w-0">
          <!-- Korean word -->
          <div class="flex items-center gap-2 mb-1">
            <span class="text-2xl font-bold text-gray-900">{{ word.korean }}</span>
            <button
              class="opacity-100 sm:opacity-75 sm:group-hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-slate-100 bg-slate-50 text-base"
              @click.stop="speakWord"
              title="ຟັງສຽງ"
            >
              🔊
            </button>
          </div>
          <!-- Romanization -->
          <div class="text-sm text-blue-500 mb-1">{{ word.romanization }}</div>
          <!-- Meaning -->
          <div class="text-base text-gray-700">{{ word.meaning }}</div>
        </div>
        <!-- Expand icon -->
        <div
          class="text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isExpanded }"
        >
          ▾
        </div>
      </div>
      <!-- Tags -->
      <div v-if="word.tags?.length" class="flex flex-wrap gap-1 mt-2">
        <span
          v-for="tag in word.tags"
          :key="tag"
          class="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <!-- Expanded teaching section -->
    <Transition name="slide">
      <div v-if="isExpanded" class="border-t border-gray-100 px-4 pb-4">
        <!-- Grammar Pattern -->
        <div v-if="word.grammarPattern" class="mt-3 p-3 bg-purple-50 rounded-xl">
          <div class="flex items-center gap-1 mb-1">
            <span class="text-xs font-semibold text-purple-600 uppercase tracking-wide"
              >📐 ຮູບແບບ</span
            >
          </div>
          <div class="text-sm font-medium text-purple-800 font-mono">{{ word.grammarPattern }}</div>
        </div>
        <!-- Usage / Teaching Notes -->
        <div v-if="word.usage" class="mt-3 p-3 bg-amber-50 rounded-xl">
          <div class="flex items-center gap-1 mb-1">
            <span class="text-xs font-semibold text-amber-600 uppercase tracking-wide"
              >💡 ວິທີໃຊ້</span
            >
          </div>
          <div class="text-sm text-amber-800 leading-relaxed">{{ word.usage }}</div>
        </div>
        <!-- Examples -->
        <div v-if="word.examples?.length" class="mt-3">
          <div class="flex items-center gap-1 mb-2">
            <span class="text-xs font-semibold text-green-600 uppercase tracking-wide"
              >📝 ຕົວຢ່າງປະໂຫຍກ</span
            >
          </div>
          <div class="space-y-2">
            <div
              v-for="(ex, i) in word.examples"
              :key="i"
              class="p-3 bg-green-50 rounded-xl border border-green-100"
            >
              <div class="flex items-start gap-2">
                <button
                  class="shrink-0 mt-0.5 p-1 rounded-full hover:bg-green-100 transition-colors"
                  @click.stop="speakSentence(ex.korean)"
                  title="ຟັງສຽງປະໂຫຍກ"
                >
                  <span class="text-sm">🐢</span>
                </button>
                <div class="flex-1 min-w-0">
                  <div class="text-base font-medium text-gray-900 leading-relaxed">
                    {{ ex.korean }}
                  </div>
                  <div class="text-xs text-gray-500 mt-0.5 italic">{{ ex.romanization }}</div>
                  <div class="text-sm text-green-700 mt-1">{{ ex.meaning }}</div>
                  <div v-if="ex.context" class="text-xs text-gray-400 mt-1">
                    💬 {{ ex.context }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Learn button in Lao -->
        <div class="mt-3 flex items-center gap-2">
          <button
            class="flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all"
            :class="
              isLearned
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm'
            "
            @click.stop="$emit('toggle-learned', word.id)"
          >
            {{ isLearned ? '✅ ຈື່ໄດ້ແລ້ວ' : '📖 ຈື່ຄຳນີ້' }}
          </button>
          <button
            class="py-2 px-4 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            @click.stop="speakWord"
          >
            🔊 ຟັງສຽງ
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { speakSlow } from '@/utils/speech'
import type { Word } from '@/types'

const props = defineProps<{
  word: Word
  isLearned?: boolean
}>()

defineEmits<{
  'toggle-learned': [wordId: string]
}>()

const isExpanded = ref(false)
function speakWord() {
  speakSlow(props.word.korean)
}
function speakSentence(text: string) {
  speakSlow(text)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 600px;
  opacity: 1;
}
</style>
