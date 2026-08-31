<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { getGrammarByLevel } from '@/data/grammar'
import { getSentencesByLevel } from '@/data/sentences'
import GrammarLesson from '@/components/grammar/GrammarLesson.vue'
import SentenceBuilder from '@/components/grammar/SentenceBuilder.vue'
import SentenceOrder from '@/components/grammar/SentenceOrder.vue'

const userStore = useUserStore()
const activeTab = ref<'grammar' | 'build' | 'order'>('grammar')
const currentGrammarIndex = ref(0)
const currentSentenceIndex = ref(0)

const grammarLessons = computed(() => getGrammarByLevel(userStore.progress.currentLevel))
const sentences = computed(() => getSentencesByLevel(userStore.progress.currentLevel))
const buildExercises = computed(() => sentences.value.filter((s) => s.type === 'build'))
const orderExercises = computed(() => sentences.value.filter((s) => s.type === 'order'))

const currentGrammar = computed(() => grammarLessons.value[currentGrammarIndex.value])
const currentSentence = computed(() => {
  if (activeTab.value === 'build') return buildExercises.value[currentSentenceIndex.value]
  return orderExercises.value[currentSentenceIndex.value]
})

function nextGrammar() {
  if (currentGrammarIndex.value < grammarLessons.value.length - 1) currentGrammarIndex.value++
}

function prevGrammar() {
  if (currentGrammarIndex.value > 0) currentGrammarIndex.value--
}

function nextSentence() {
  const exercises = activeTab.value === 'build' ? buildExercises : orderExercises
  if (currentSentenceIndex.value < exercises.value.length - 1) {
    currentSentenceIndex.value++
  } else {
    currentSentenceIndex.value = 0
  }
}

const tabs = [
  { key: 'grammar' as const, icon: '📖', label: 'ໄວຍາກອນ' },
  { key: 'build' as const, icon: '🧩', label: 'ສ້າງປະໂຫຍກ' },
  { key: 'order' as const, icon: '🔢', label: 'ລຽງປະໂຫຍກ' },
]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">📖 ໄວຍາກອນເກົາຫຼີ</h1>
      <p class="text-sm sm:text-base text-slate-500">
        Level {{ userStore.progress.currentLevel }} — ຮຽນຮູ້ໂຄງສ້າງປະໂຫຍກ
      </p>
    </div>

    <!-- Tabs in Lao -->
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
        @click="activeTab = tab.key; currentSentenceIndex = 0"
      >
        <span>{{ tab.icon }}</span> <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Grammar Tab -->
    <div v-if="activeTab === 'grammar'">
      <div v-if="grammarLessons.length > 0">
        <!-- Navigation -->
        <div class="flex items-center justify-between mb-4">
          <button
            class="px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition-all disabled:opacity-40"
            :disabled="currentGrammarIndex === 0"
            @click="prevGrammar"
          >
            ◀ ກ່ອນໜ້າ
          </button>
          <span class="text-sm text-slate-500">
            {{ currentGrammarIndex + 1 }} / {{ grammarLessons.length }}
          </span>
          <button
            class="px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg hover:border-blue-300 transition-all disabled:opacity-40"
            :disabled="currentGrammarIndex === grammarLessons.length - 1"
            @click="nextGrammar"
          >
            ຖັດໄປ ▶
          </button>
        </div>
        <!-- Current Grammar -->
        <GrammarLesson v-if="currentGrammar" :grammar="currentGrammar" />
      </div>
      <div v-else class="text-center py-12 text-slate-400">
        <div class="text-4xl mb-3">📖</div>
        <p class="text-lg">ຍັງບໍ່ມີເນື້ອຫາໄວຍາກອນສຳລັບ Level ນີ້</p>
      </div>
    </div>

    <!-- Build Tab -->
    <div v-if="activeTab === 'build'">
      <div v-if="buildExercises.length > 0 && currentSentence">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-slate-500">
            ຂໍ້ {{ currentSentenceIndex + 1 }} / {{ buildExercises.length }}
          </span>
        </div>
        <SentenceBuilder :exercise="currentSentence" @next="nextSentence" @correct="nextSentence" />
      </div>
      <div v-else class="text-center py-12 text-slate-400">
        <div class="text-4xl mb-3">🧩</div>
        <p class="text-lg">ຍັງບໍ່ມີແບບຝຶກຫັດສ້າງປະໂຫຍກ</p>
      </div>
    </div>

    <!-- Order Tab -->
    <div v-if="activeTab === 'order'">
      <div v-if="orderExercises.length > 0 && currentSentence">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-slate-500">
            ຂໍ້ {{ currentSentenceIndex + 1 }} / {{ orderExercises.length }}
          </span>
        </div>
        <SentenceOrder :exercise="currentSentence" @next="nextSentence" @correct="nextSentence" />
      </div>
      <div v-else class="text-center py-12 text-slate-400">
        <div class="text-4xl mb-3">🔢</div>
        <p class="text-lg">ຍັງບໍ່ມີແບບຝຶກຫັດລຽງປະໂຫຍກ</p>
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
