import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import defineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), defineOptions()],
  resolve: {
    alias: {
      "@wan-xiang": resolve(__dirname, "../packages")
    }
  }
})
