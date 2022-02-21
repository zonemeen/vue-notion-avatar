import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'notion',
      fileName: (format) => `notion.${format}.js`,
    },
    minify: true,
    target: 'es2015',
    outDir: 'dist',
    chunkSizeWarningLimit: 9000,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
