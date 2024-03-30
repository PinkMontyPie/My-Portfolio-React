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
        'line-Thin': ['LINESeed_Thin', 'sans-serif'],
        'line-Regular': ['LINESeed_Regular', 'sans-serif'],
        'line-bold': ['LINESeed_Bold', 'sans-serif'],
        'line-ExtraBold': ['LINESeed_ExtraBold', 'sans-serif'],
        'line-Hevy': ['LINESeed_Hevy', 'sans-serif'],
      },

    },
  },
  plugins: [require("daisyui")],
}
export default config
