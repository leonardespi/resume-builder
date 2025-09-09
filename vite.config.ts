import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Replace <REPO_NAME> with your repository name, e.g. 'resume-builder'
export default defineConfig({
  plugins: [react()],
  base: '/resume-builder/',   // <— add this line for GitHub Pages project site
})
