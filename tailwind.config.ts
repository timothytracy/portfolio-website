import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-greenish-blue': {
          DEFAULT: 'var(--light-greenish-blue)',
          100: 'var(--light-greenish-blue-100)',
          200: 'var(--light-greenish-blue-200)',
          300: 'var(--light-greenish-blue-300)',
          400: 'var(--light-greenish-blue-400)',
          500: 'var(--light-greenish-blue-500)',
          600: 'var(--light-greenish-blue-600)',
          700: 'var(--light-greenish-blue-700)',
        },
        'mint-leaf': {
          DEFAULT: 'var(--mint-leaf)',
          100: 'var(--mint-leaf-100)',
          200: 'var(--mint-leaf-200)',
          300: 'var(--mint-leaf-300)',
          400: 'var(--mint-leaf-400)',
          500: 'var(--mint-leaf-500)',
          600: 'var(--mint-leaf-600)',
          700: 'var(--mint-leaf-700)',
        },
        'faded-poster': {
          DEFAULT: 'var(--faded-poster)',
          100: 'var(--faded-poster-100)',
          200: 'var(--faded-poster-200)',
          300: 'var(--faded-poster-300)',
          400: 'var(--faded-poster-400)',
          500: 'var(--faded-poster-500)',
          600: 'var(--faded-poster-600)',
          700: 'var(--faded-poster-700)',
        },
        'robins-egg-blue': {
          DEFAULT: 'var(--robins-egg-blue)',
          100: 'var(--robins-egg-blue-100)',
          200: 'var(--robins-egg-blue-200)',
          300: 'var(--robins-egg-blue-300)',
          400: 'var(--robins-egg-blue-400)',
          500: 'var(--robins-egg-blue-500)',
          600: 'var(--robins-egg-blue-600)',
          700: 'var(--robins-egg-blue-700)',
        },
        'green-darner-tail': {
          DEFAULT: 'var(--green-darner-tail)',
          100: 'var(--green-darner-tail-100)',
          200: 'var(--green-darner-tail-200)',
          300: 'var(--green-darner-tail-300)',
          400: 'var(--green-darner-tail-400)',
          500: 'var(--green-darner-tail-500)',
          600: 'var(--green-darner-tail-600)',
          700: 'var(--green-darner-tail-700)',
        },
        'electron-blue': {
          DEFAULT: 'var(--electron-blue)',
          100: 'var(--electron-blue-100)',
          200: 'var(--electron-blue-200)',
          300: 'var(--electron-blue-300)',
          400: 'var(--electron-blue-400)',
          500: 'var(--electron-blue-500)',
          600: 'var(--electron-blue-600)',
          700: 'var(--electron-blue-700)',
        },
        'shy-moment': {
          DEFAULT: 'var(--shy-moment)',
          100: 'var(--shy-moment-100)',
          200: 'var(--shy-moment-200)',
          300: 'var(--shy-moment-300)',
          400: 'var(--shy-moment-400)',
          500: 'var(--shy-moment-500)',
          600: 'var(--shy-moment-600)',
          700: 'var(--shy-moment-700)',
        },
        'exodus-fruit': {
          DEFAULT: 'var(--exodus-fruit)',
          100: 'var(--exodus-fruit-100)',
          200: 'var(--exodus-fruit-200)',
          300: 'var(--exodus-fruit-300)',
          400: 'var(--exodus-fruit-400)',
          500: 'var(--exodus-fruit-500)',
          600: 'var(--exodus-fruit-600)',
          700: 'var(--exodus-fruit-700)',
        },
        'sour-lemon': {
          DEFAULT: 'var(--sour-lemon)',
          100: 'var(--sour-lemon-100)',
          200: 'var(--sour-lemon-200)',
          300: 'var(--sour-lemon-300)',
          400: 'var(--sour-lemon-400)',
          500: 'var(--sour-lemon-500)',
          600: 'var(--sour-lemon-600)',
          700: 'var(--sour-lemon-700)',
        },
        'bright-yarrow': {
          DEFAULT: 'var(--bright-yarrow)',
          100: 'var(--bright-yarrow-100)',
          200: 'var(--bright-yarrow-200)',
          300: 'var(--bright-yarrow-300)',
          400: 'var(--bright-yarrow-400)',
          500: 'var(--bright-yarrow-500)',
          600: 'var(--bright-yarrow-600)',
          700: 'var(--bright-yarrow-700)',
        },
        'first-date': {
          DEFAULT: 'var(--first-date)',
          100: 'var(--first-date-100)',
          200: 'var(--first-date-200)',
          300: 'var(--first-date-300)',
          400: 'var(--first-date-400)',
          500: 'var(--first-date-500)',
          600: 'var(--first-date-600)',
          700: 'var(--first-date-700)',
        },
        'orangeville': {
          DEFAULT: 'var(--orangeville)',
          100: 'var(--orangeville-100)',
          200: 'var(--orangeville-200)',
          300: 'var(--orangeville-300)',
          400: 'var(--orangeville-400)',
          500: 'var(--orangeville-500)',
          600: 'var(--orangeville-600)',
          700: 'var(--orangeville-700)',
        },
        'chi-gong': {
          DEFAULT: 'var(--chi-gong)',
          100: 'var(--chi-gong-100)',
          200: 'var(--chi-gong-200)',
          300: 'var(--chi-gong-300)',
          400: 'var(--chi-gong-400)',
          500: 'var(--chi-gong-500)',
          600: 'var(--chi-gong-600)',
          700: 'var(--chi-gong-700)',
        },
        'pink-glamour': {
          DEFAULT: 'var(--pink-glamour)',
          100: 'var(--pink-glamour-100)',
          200: 'var(--pink-glamour-200)',
          300: 'var(--pink-glamour-300)',
          400: 'var(--pink-glamour-400)',
          500: 'var(--pink-glamour-500)',
          600: 'var(--pink-glamour-600)',
          700: 'var(--pink-glamour-700)',
        },
        'pico-8-pink': {
          DEFAULT: 'var(--pico-8-pink)',
          100: 'var(--pico-8-pink-100)',
          200: 'var(--pico-8-pink-200)',
          300: 'var(--pico-8-pink-300)',
          400: 'var(--pico-8-pink-400)',
          500: 'var(--pico-8-pink-500)',
          600: 'var(--pico-8-pink-600)',
          700: 'var(--pico-8-pink-700)',
        },
        'prunus-avium': {
          DEFAULT: 'var(--prunus-avium)',
          100: 'var(--prunus-avium-100)',
          200: 'var(--prunus-avium-200)',
          300: 'var(--prunus-avium-300)',
          400: 'var(--prunus-avium-400)',
          500: 'var(--prunus-avium-500)',
          600: 'var(--prunus-avium-600)',
          700: 'var(--prunus-avium-700)',
        },
        'city-lights': {
          100: '#fbfcfd',
          200: '#f1f4f5',
          300: '#e8ecee',
          400: '#dfe6e9',
          500: '#c4d1d6',
          600: '#a9bcc3',
          700: '#8ea7b0',
        },
        'soothing-breeze': {
          DEFAULT: 'var(--soothing-breeze)',
          100: 'var(--soothing-breeze-100)',
          200: 'var(--soothing-breeze-200)',
          300: 'var(--soothing-breeze-300)',
          400: 'var(--soothing-breeze-400)',
          500: 'var(--soothing-breeze-500)',
          600: 'var(--soothing-breeze-600)',
          700: 'var(--soothing-breeze-700)',
        },
        
        'american-river': {
          DEFAULT: 'var(--american-river)',
          100: 'var(--american-river-100)',
          200: 'var(--american-river-200)',
          300: 'var(--american-river-300)',
          400: 'var(--american-river-400)',
          500: 'var(--american-river-500)',
          600: 'var(--american-river-600)',
          700: 'var(--american-river-700)',
        },
        'dracula-orchid': {
          DEFAULT: 'var(--dracula-orchid)',
          100: 'var(--dracula-orchid-100)',
          200: 'var(--dracula-orchid-200)',
          300: 'var(--dracula-orchid-300)',
          400: 'var(--dracula-orchid-400)',
          500: 'var(--dracula-orchid-500)',
          600: 'var(--dracula-orchid-600)',
          700: 'var(--dracula-orchid-700)',
        },
        'gradient-start': '#3b82f6',
        'gradient-end': '#8b5cf6',
      },
    },
  },
  plugins: [],
};
export default config;
