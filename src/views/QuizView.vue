<script setup lang="ts">
import { ref } from 'vue'
import SentenceQuiz from '@/components/quiz/SentenceQuiz.vue'
import { getQuizStats } from '@/data/sentenceQuiz'

const showStats = ref(true)
const quizStats = getQuizStats()
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    <!-- Page Header in Lao -->
    <div class="text-center mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">🎯 ແບບຝຶກຫັດປະໂຫຍກ</h1>
      <p class="text-sm sm:text-base text-slate-500">
        ທົດສອບຄວາມເຂົ້າໃຈຈາກຕົວຢ່າງປະໂຫຍກຈິງ — 4 ໂໝດ
      </p>
    </div>

    <!-- Quiz Stats Summary in Lao -->
    <div v-if="showStats" class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <div class="bg-white rounded-2xl border border-slate-200 p-4 text-center">
        <div class="text-2xl font-bold text-blue-500">{{ quizStats.total }}</div>
        <div class="text-xs text-slate-500">ຄຳຖາມທັງໝົດ</div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-4 text-center">
        <div class="text-2xl font-bold text-purple-500">
          {{ quizStats.byType['sentence-to-meaning'] }}
        </div>
        <div class="text-xs text-slate-500">ປະໂຫຍກ→ຄວາມໝາຍ</div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-4 text-center">
        <div class="text-2xl font-bold text-amber-500">{{ quizStats.byType['fill-blank'] }}</div>
        <div class="text-xs text-slate-500">ຕື່ມຄຳ</div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-4 text-center">
        <div class="text-2xl font-bold text-emerald-500">
          {{ quizStats.byType['word-in-context'] }}
        </div>
        <div class="text-xs text-slate-500">ຄຳໃນບໍລິບົດ</div>
      </div>
    </div>

    <!-- Quiz Component -->
    <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6">
      <SentenceQuiz @back="showStats = true" />
    </div>

    <!-- Tips in Lao -->
    <div
      class="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-5"
    >
      <h3 class="font-bold text-blue-800 mb-2">💡 ເຄັດລັບ</h3>
      <ul class="text-sm text-blue-700 space-y-1">
        <li>• <strong>ປະໂຫຍກ → ຄວາມໝາຍ:</strong> ອ່ານປະໂຫຍກເກົາຫຼີ ແລ້ວເລືອກຄວາມໝາຍທີ່ຖືກຕ້ອງ</li>
        <li>• <strong>ຄວາມໝາຍ → ປະໂຫຍກ:</strong> ອ່ານຄວາມໝາຍ ແລ້ວເລືອກປະໂຫຍກເກົາຫຼີທີ່ກົງກັນ</li>
        <li>• <strong>ຕື່ມຄຳ:</strong> ເລືອກຄຳສັບທີ່ຂາດຫາຍໄປໃນປະໂຫຍກ</li>
        <li>• <strong>ຄຳໃນບໍລິບົດ:</strong> ຄຳສັບທີ່ໄຮໄລ້ໃນປະໂຫຍກໝາຍເຖິງຫຍັງ</li>
      </ul>
    </div>
  </div>
</template>
