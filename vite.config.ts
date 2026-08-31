import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      // ป้องกัน Service Worker ทำงานตอน development
      devOptions: {
        enabled: false,
      },

      includeAssets: ['icon.svg', 'favicon.svg'],

      manifest: {
        name: 'Learn Korean — ຮຽນພາສາເກົາຫຼີ TOPIK 1-6',
        short_name: 'ຮຽນເກົາຫຼີ',
        description:
          'ຮຽນພາສາເກົາຫຼີ TOPIK 1-6 — ຄຳສັບ, ໄວຍາກອນ, Quiz, Flashcard',

        theme_color: '#2563eb',
        background_color: '#f8fafc',

        display: 'standalone',
        orientation: 'portrait',

        scope: '/',
        start_url: '/',

        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: 'icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,woff,woff2}',
        ],

        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',

            options: {
              cacheName: 'google-fonts-cache',

              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})