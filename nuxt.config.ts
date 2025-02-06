// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
      '@nuxt/ui',
      "@primevue/nuxt-module",
      "@pinia/nuxt"
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },
  css: [
      'primeicons/primeicons.css'
  ],
    vite: {
        server: {
            strictPort: true,
            proxy: {
                "/api": {
                    target: 'https://localhost:7289',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
