import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      input:{
        page1: './index-page1.html',
        page2: './index-page2.html',
      }
    }
  }
})
