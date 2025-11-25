import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './client/index.html',
    './client/src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        paper: '#FDFCF8',
        'paper-dark': '#F2F0EB',
        ink: '#1A1A18',
        'ink-light': '#5A5A55',
        ida: {
          DEFAULT: '#1B3B5A',
          light: '#2A5A8A',
          faint: '#E8F1F8'
        },
        accent: '#C8A386'
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 59, 90, 0.04)',
      }
    }
  },
  plugins: []
} satisfies Config
