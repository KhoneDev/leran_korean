<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { levelConfigs } from '@/data/levels'
import type { ProficiencyLevel } from '@/types'

const menuOpen = ref(false)
const levelDropdownOpen = ref(false)
const userStore = useUserStore()
const allLevels: ProficiencyLevel[] = [1, 2, 3, 4, 5, 6]

function closeMenu() {
  menuOpen.value = false
  levelDropdownOpen.value = false
}

function setLevel(lvl: ProficiencyLevel) {
  userStore.setCurrentLevel(lvl)
  levelDropdownOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Brand -->
          <RouterLink to="/" class="flex items-center gap-2.5 group" @click="closeMenu">
            <span class="text-2xl">🇰🇷</span>
            <span
              class="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Learn Korean
            </span>
          </RouterLink>
          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-1">
            <!-- Level Dropdown -->
            <div class="relative">
              <button
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50"
                @click="levelDropdownOpen = !levelDropdownOpen"
              >
                <span class="text-base">{{ levelConfigs[userStore.progress.currentLevel].icon }}</span>
                <span class="text-slate-700">Lv.{{ userStore.progress.currentLevel }}</span>
                <svg class="w-3 h-3 text-slate-400 transition-transform" :class="{ 'rotate-180': levelDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="levelDropdownOpen"
                class="absolute right-0 top-full mt-2 w-60 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1"
              >
                <button
                  v-for="lvl in allLevels"
                  :key="lvl"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                  :class="userStore.progress.currentLevel === lvl
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'"
                  @click="setLevel(lvl)"
                >
                  <span class="text-lg">{{ levelConfigs[lvl].icon }}</span>
                  <div class="text-left">
                    <div class="font-semibold">Level {{ lvl }}</div>
                    <div class="text-xs text-slate-400">{{ levelConfigs[lvl].nameKr }}</div>
                  </div>
                  <span v-if="userStore.progress.currentLevel === lvl" class="ml-auto text-blue-500 text-xs">✓</span>
                </button>
              </div>
            </div>
            <RouterLink
              to="/"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >หน้าแรก</RouterLink
            >
            <RouterLink
              to="/dashboard"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📊 Dashboard</RouterLink
            >
            <RouterLink
              to="/levels"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📚 ระดับ</RouterLink
            >
            <RouterLink
              to="/hangul"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >한글</RouterLink
            >
            <RouterLink
              to="/flashcard"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🃏 Flashcard</RouterLink
            >
            <RouterLink
              to="/grammar"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📖 ไวยากรณ์</RouterLink
            >
            <RouterLink
              to="/quiz"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🎯 แบบฝึกหัด</RouterLink
            >
            <RouterLink
              to="/about"
              class="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-blue-600 :text-blue-400 hover:bg-blue-50/50 :bg-slate-700/50 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >เกี่ยวกับ</RouterLink
            >
          </div>
          <!-- Mobile: Level Dropdown + Hamburger -->
          <div class="flex items-center gap-2 md:hidden">
            <div class="relative">
              <button
                class="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border border-slate-200 bg-white"
                @click="levelDropdownOpen = !levelDropdownOpen"
              >
                <span>{{ levelConfigs[userStore.progress.currentLevel].icon }}</span>
                <span class="text-slate-700">Lv.{{ userStore.progress.currentLevel }}</span>
              </button>
              <div
                v-if="levelDropdownOpen"
                class="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1"
              >
                <button
                  v-for="lvl in allLevels"
                  :key="lvl"
                  class="w-full flex items-center gap-2 px-3 py-2 text-sm"
                  :class="userStore.progress.currentLevel === lvl
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'"
                  @click="setLevel(lvl)"
                >
                  <span>{{ levelConfigs[lvl].icon }}</span>
                  <span>Lv.{{ lvl }}</span>
                  <span class="text-xs text-slate-400">{{ levelConfigs[lvl].nameKr }}</span>
                </button>
              </div>
            </div>
            <button
              class="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              @click="menuOpen = !menuOpen"
              aria-label="Menu"
            >
              <div class="flex flex-col gap-1.5 w-5">
                <span
                  class="block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center"
                  :class="menuOpen ? 'rotate-45 translate-y-[4px]' : ''"
                ></span>
                <span
                  class="block h-0.5 bg-slate-700 rounded-full transition-all duration-300"
                  :class="menuOpen ? 'opacity-0 scale-x-0' : ''"
                ></span>
                <span
                  class="block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center"
                  :class="menuOpen ? '-rotate-45 -translate-y-[4px]' : ''"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="menuOpen" class="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div class="px-4 py-3 space-y-1">
            <RouterLink
              to="/"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🏠 หน้าแรก</RouterLink
            >
            <RouterLink
              to="/dashboard"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📊 Dashboard</RouterLink
            >
            <RouterLink
              to="/levels"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📚 ระดับการเรียน</RouterLink
            >
            <RouterLink
              to="/hangul"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🇰🇷 เรียน 한글</RouterLink
            >
            <RouterLink
              to="/flashcard"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🃏 Flashcard</RouterLink
            >
            <RouterLink
              to="/grammar"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >📖 ไวยากรณ์</RouterLink
            >
            <RouterLink
              to="/quiz"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >🎯 แบบฝึกหัดประโยค</RouterLink
            >
            <RouterLink
              to="/about"
              class="block px-4 py-3 text-base font-medium text-slate-700 rounded-xl transition-all duration-200 hover:bg-slate-50 :bg-slate-700 [&.router-link-exact-active]:text-blue-600 [&.router-link-exact-active]:bg-blue-50 [&.router-link-exact-active]:font-semibold"
              @click="closeMenu"
              >ℹ️ เกี่ยวกับ</RouterLink
            >
          </div>
          <div class="px-4 py-3 border-t border-slate-100">
            <div class="flex items-center gap-2 text-sm text-slate-600">
              <span>{{ levelConfigs[userStore.progress.currentLevel].icon }}</span>
              <span class="font-semibold">Level {{ userStore.progress.currentLevel }}</span>
              <span class="text-slate-400">{{ levelConfigs[userStore.progress.currentLevel].nameKr }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
    <!-- Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        @click="closeMenu"
      ></div>
    </Transition>
    <!-- Main Content -->
    <main class="flex-1"><RouterView /></main>
    <!-- Footer -->
    <footer class="border-t border-slate-200/60 bg-white/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500"
        >
          <div class="flex items-center gap-2">
            <span>🇰🇷</span> <span>Learn Korean with TOPIK Levels</span>
          </div>
          <div class="flex items-center gap-4">
            <span>Lv.{{ userStore.progress.currentLevel }}</span> <span>•</span>
            <span>{{ userStore.progress.totalXP }} XP</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
