import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      screens: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
      },

      fontFamily: {
        // Rounded Latin faces for the beach look; LINE Seed still picks up Thai glyphs
        'line-Thin': ['var(--font-fredoka)', 'LINESeed_Thin', 'sans-serif'],
        'line-Regular': ['var(--font-fredoka)', 'LINESeed_Regular', 'sans-serif'],
        'line-bold': ['var(--font-fredoka)', 'LINESeed_Bold', 'sans-serif'],
        'line-ExtraBold': ['var(--font-fredoka)', 'LINESeed_ExtraBold', 'sans-serif'],
        'line-Hevy': ['var(--font-fredoka)', 'LINESeed_Hevy', 'sans-serif'],
      },

    },
  },
  plugins: [require("daisyui")],
  // The beach theme is light only; without this daisyUI turns the page dark with the OS
  daisyui: { themes: ["light"] },
}
export default config
