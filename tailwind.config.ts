import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width:{
        cart: '30rem'
      },
      colors:{
        'main': '#00875F',
        'main-light': '#00B37E',
        'gray-background': '#121214',
        "gray-elements": '#202024',
        "gray-icon": '#8D8D99',
        "gray-text": '#C4C4CC',
        "gray-title": '#E1E1E6',
        "white": "#FFFFFF"
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
      },
      boxShadow:{
        'cart-shadow': '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)'
      }
    },
  },
  plugins: [],
}
export default config
