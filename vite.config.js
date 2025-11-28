import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/sammy.github.io/' : '/',
  optimizeDeps: {
    include: ['tslib'],
  },
}))
