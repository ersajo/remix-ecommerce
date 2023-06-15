import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      montserrat: ['Montserrat'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

