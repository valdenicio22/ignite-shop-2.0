import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'main': '#00875F',
        'main-light': '#00B37E',
        'gray-background': '#121214',
        "gray-elements": '#202024',
        "gray-icon": '#8D8D99',
        "gray-text": "c4c4cc",
        "gray-title": 'E1E1E6',
        "white": "FFFFFF"
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
      },
      boxShadow:{
        'card-shadow': '0px 0px 48px 0px rgba(0, 0, 0, 0.90);'
      }
    },
  },
  plugins: [],
}
export default config
