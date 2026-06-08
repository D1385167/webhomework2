import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 這裡很重要！請將 "你的專案名稱" 換成你在 GitHub 上儲存庫的實際名稱
  base: '/webhomework2/', 
})