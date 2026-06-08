import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 注意：這裡必須加上你的專案名稱，前後都要有斜線
  base: '/webhomework2/', 
})