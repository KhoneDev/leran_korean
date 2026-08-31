<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { levelConfigs } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'
import VoiceSelector from '@/components/VoiceSelector.vue'

const userStore = useUserStore()
const route = useRoute()
const levelModalOpen = ref(false)
const allLevels: ProficiencyLevel[] = [1, 2, 3, 4, 5, 6]

function setLevel(lvl: ProficiencyLevel) {
  userStore.setCurrentLevel(lvl)
  levelModalOpen.value = false
}

// Mobile Bottom Nav Items in Lao
const navItems = [
  { to: '/', label: 'ໜ້າຫຼັກ', icon: '🏠', activeName: 'home' },
  { to: '/hangul', label: 'ຮັນກຶລ', icon: '🇰🇷', activeName: 'hangul' },
  { to: '/flashcard', label: 'ບັດຄຳສັບ', icon: '🃏', activeName: 'flashcard' },
  { to: '/grammar', label: 'ໄວຍາກອນ', icon: '📖', activeName: 'grammar' },
  { to: '/quiz', label: 'ແບບຝຶກຫັດ', icon: '🎯', activeName: 'quiz' },
  { to: '/dashboard', label: 'ສະຖິຕິ', icon: '📊', activeName: 'dashboard' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
    <!-- Top Header -->
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 safe-top">
      <div class="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 sm:h-16">
          <!-- Brand -->
          <RouterLink to="/" class="flex items-center gap-2 group shrink-0">
            <span class="text-2xl sm:text-3xl transition-transform group-hover:scale-110">🇰🇷</span>
            <div class="flex flex-col">
              <span class="text-base sm:text-lg font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                Learn Korean
              </span>
              <span class="text-[10px] text-slate-400 font-medium tracking-wide">TOPIK 1-6</span>
            </div>
          </RouterLink>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-1 lg:gap-1.5">
            <RouterLink
              to="/"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ໜ້າຫຼັກ
            </RouterLink>
            <RouterLink
              to="/hangul"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              한글
            </RouterLink>
            <RouterLink
              to="/flashcard"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ບັດຄຳສັບ
            </RouterLink>
            <RouterLink
              to="/grammar"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ໄວຍາກອນ
            </RouterLink>
            <RouterLink
              to="/quiz"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ແບບຝຶກຫັດ
            </RouterLink>
            <RouterLink
              to="/levels"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ລະດັບ
            </RouterLink>
            <RouterLink
              to="/dashboard"
              class="px-3 py-1.5 text-sm font-semibold rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50"
            >
              ສະຖິຕິ
            </RouterLink>
          </nav>

          <!-- Top Actions (Level Switcher + Streak + Voice) -->
          <div class="flex items-center gap-1.5 sm:gap-2">
            <!-- Streak pill -->
            <div
              class="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 border border-orange-200/80 text-orange-600 shadow-xs"
              title="ຈຳນວນມື້ຮຽນຕໍ່ເນື່ອງ"
            >
              <span class="animate-bounce text-sm">🔥</span>
              <span>{{ userStore.progress.streak }}</span>
            </div>

            <!-- Voice selector -->
            <div class="hidden sm:block">
              <VoiceSelector />
            </div>

            <!-- Level Selector Trigger Button -->
            <button
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 shadow-xs active:scale-95"
              @click="levelModalOpen = true"
              aria-label="ປ່ຽນລະດັບການຮຽນ"
            >
              <span class="text-base leading-none">{{ levelConfigs[userStore.progress.currentLevel].icon }}</span>
              <span class="text-slate-700">Lv.{{ userStore.progress.currentLevel }}</span>
              <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Body -->
    <main class="flex-1 pb-24 md:pb-12">
      <RouterView />
    </main>

    <!-- Floating Bottom Navigation Bar (Mobile only) -->
    <nav class="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 md:hidden safe-bottom shadow-lg shadow-slate-900/5">
      <div class="grid grid-cols-6 items-center px-1 py-1 max-w-lg mx-auto">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all duration-150 relative group active:scale-90"
          :class="route.path === item.to || (item.to !== '/' && route.path.startsWith(item.to))
            ? 'text-blue-600 font-bold'
            : 'text-slate-500 hover:text-slate-800 font-medium'"
        >
          <!-- Active Indicator Glow -->
          <div
            v-if="route.path === item.to || (item.to !== '/' && route.path.startsWith(item.to))"
            class="absolute inset-1 bg-blue-50 rounded-xl -z-10 transition-all"
          ></div>
          <span class="text-xl sm:text-2xl leading-none mb-1 transition-transform group-hover:scale-110">
            {{ item.icon }}
          </span>
          <span class="text-[10px] sm:text-[11px] leading-tight tracking-tight">
            {{ item.label }}
          </span>
        </RouterLink>
      </div>
    </nav>

    <!-- Level Selector Modal / Bottom Sheet -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="levelModalOpen"
        class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click="levelModalOpen = false"
      >
        <div
          class="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300 p-5 safe-bottom"
          @click.stop
        >
          <!-- Header -->
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div>
              <h3 class="text-lg font-bold text-slate-800">📚 ເລືອກລະດັບການຮຽນ</h3>
              <p class="text-xs text-slate-400">ສະຫຼັບເນື້ອຫາ TOPIK 1-6 ໄດ້ທຸກເວລາ</p>
            </div>
            <button
              class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors"
              @click="levelModalOpen = false"
            >
              ✕
            </button>
          </div>

          <!-- Level List -->
          <div class="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            <button
              v-for="lvl in allLevels"
              :key="lvl"
              class="w-full flex items-center gap-3.5 p-3 rounded-2xl border transition-all text-left"
              :class="userStore.progress.currentLevel === lvl
                ? 'border-blue-500 bg-blue-50/70 shadow-xs'
                : 'border-slate-200/80 bg-white hover:border-blue-200 hover:bg-slate-50'"
              @click="setLevel(lvl)"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-xs"
                :style="{ backgroundColor: `color-mix(in srgb, ${levelConfigs[lvl].color} 15%, white)` }"
              >
                {{ levelConfigs[lvl].icon }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-800 text-sm">Level {{ lvl }}</span>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded-full" :style="{ color: levelConfigs[lvl].color, backgroundColor: `color-mix(in srgb, ${levelConfigs[lvl].color} 12%, white)` }">
                    {{ levelConfigs[lvl].nameKr }}
                  </span>
                </div>
                <div class="text-xs text-slate-500 truncate mt-0.5">
                  {{ levelConfigs[lvl].name }} • {{ levelConfigs[lvl].description }}
                </div>
              </div>
              <div v-if="userStore.progress.currentLevel === lvl" class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
            </button>
          </div>

          <!-- Bottom info -->
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>ສາມາດປ່ຽນລະດັບໄດ້ຕະຫຼອດເວລາ</span>
            <RouterLink to="/levels" class="text-blue-600 font-semibold hover:underline" @click="levelModalOpen = false">
              ເບິ່ງລາຍລະອຽດລະດັບ →
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Desktop Footer -->
    <footer class="hidden md:block border-t border-slate-200/80 bg-white/70">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
          <div class="flex items-center gap-2">
            <span>🇰🇷</span>
            <span>Learn Korean App — ຮອງຮັບການຮຽນຮູ້ພາສາເກົາຫຼີ TOPIK 1-6</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-medium text-slate-700">Lv.{{ userStore.progress.currentLevel }} {{ levelConfigs[userStore.progress.currentLevel].nameKr }}</span>
            <span>•</span>
            <span class="font-medium text-blue-600">{{ userStore.progress.totalXP }} XP</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
