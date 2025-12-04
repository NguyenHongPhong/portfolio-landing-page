import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/portfolio-landing-page/',
    plugins: [
        tailwindcss(),
    ],
})