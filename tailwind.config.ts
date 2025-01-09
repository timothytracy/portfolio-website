import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Montserrat', 'sans-serif']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'light-greenish-blue': {
  				'100': 'var(--light-greenish-blue-100)',
  				'200': 'var(--light-greenish-blue-200)',
  				'300': 'var(--light-greenish-blue-300)',
  				'400': 'var(--light-greenish-blue-400)',
  				'500': 'var(--light-greenish-blue-500)',
  				'600': 'var(--light-greenish-blue-600)',
  				'700': 'var(--light-greenish-blue-700)',
  				DEFAULT: 'var(--light-greenish-blue)'
  			},
  			'mint-leaf': {
  				'100': 'var(--mint-leaf-100)',
  				'200': 'var(--mint-leaf-200)',
  				'300': 'var(--mint-leaf-300)',
  				'400': 'var(--mint-leaf-400)',
  				'500': 'var(--mint-leaf-500)',
  				'600': 'var(--mint-leaf-600)',
  				'700': 'var(--mint-leaf-700)',
  				DEFAULT: 'var(--mint-leaf)'
  			},
  			'faded-poster': {
  				'100': 'var(--faded-poster-100)',
  				'200': 'var(--faded-poster-200)',
  				'300': 'var(--faded-poster-300)',
  				'400': 'var(--faded-poster-400)',
  				'500': 'var(--faded-poster-500)',
  				'600': 'var(--faded-poster-600)',
  				'700': 'var(--faded-poster-700)',
  				DEFAULT: 'var(--faded-poster)'
  			},
  			'robins-egg-blue': {
  				'100': 'var(--robins-egg-blue-100)',
  				'200': 'var(--robins-egg-blue-200)',
  				'300': 'var(--robins-egg-blue-300)',
  				'400': 'var(--robins-egg-blue-400)',
  				'500': 'var(--robins-egg-blue-500)',
  				'600': 'var(--robins-egg-blue-600)',
  				'700': 'var(--robins-egg-blue-700)',
  				DEFAULT: 'var(--robins-egg-blue)'
  			},
  			'green-darner-tail': {
  				'100': 'var(--green-darner-tail-100)',
  				'200': 'var(--green-darner-tail-200)',
  				'300': 'var(--green-darner-tail-300)',
  				'400': 'var(--green-darner-tail-400)',
  				'500': 'var(--green-darner-tail-500)',
  				'600': 'var(--green-darner-tail-600)',
  				'700': 'var(--green-darner-tail-700)',
  				DEFAULT: 'var(--green-darner-tail)'
  			},
  			'electron-blue': {
  				'100': 'var(--electron-blue-100)',
  				'200': 'var(--electron-blue-200)',
  				'300': 'var(--electron-blue-300)',
  				'400': 'var(--electron-blue-400)',
  				'500': 'var(--electron-blue-500)',
  				'600': 'var(--electron-blue-600)',
  				'700': 'var(--electron-blue-700)',
  				DEFAULT: 'var(--electron-blue)'
  			},
  			'shy-moment': {
  				'100': 'var(--shy-moment-100)',
  				'200': 'var(--shy-moment-200)',
  				'300': 'var(--shy-moment-300)',
  				'400': 'var(--shy-moment-400)',
  				'500': 'var(--shy-moment-500)',
  				'600': 'var(--shy-moment-600)',
  				'700': 'var(--shy-moment-700)',
  				DEFAULT: 'var(--shy-moment)'
  			},
  			'exodus-fruit': {
  				'100': 'var(--exodus-fruit-100)',
  				'200': 'var(--exodus-fruit-200)',
  				'300': 'var(--exodus-fruit-300)',
  				'400': 'var(--exodus-fruit-400)',
  				'500': 'var(--exodus-fruit-500)',
  				'600': 'var(--exodus-fruit-600)',
  				'700': 'var(--exodus-fruit-700)',
  				DEFAULT: 'var(--exodus-fruit)'
  			},
  			'sour-lemon': {
  				'100': 'var(--sour-lemon-100)',
  				'200': 'var(--sour-lemon-200)',
  				'300': 'var(--sour-lemon-300)',
  				'400': 'var(--sour-lemon-400)',
  				'500': 'var(--sour-lemon-500)',
  				'600': 'var(--sour-lemon-600)',
  				'700': 'var(--sour-lemon-700)',
  				DEFAULT: 'var(--sour-lemon)'
  			},
  			'bright-yarrow': {
  				'100': 'var(--bright-yarrow-100)',
  				'200': 'var(--bright-yarrow-200)',
  				'300': 'var(--bright-yarrow-300)',
  				'400': 'var(--bright-yarrow-400)',
  				'500': 'var(--bright-yarrow-500)',
  				'600': 'var(--bright-yarrow-600)',
  				'700': 'var(--bright-yarrow-700)',
  				DEFAULT: 'var(--bright-yarrow)'
  			},
  			'first-date': {
  				'100': 'var(--first-date-100)',
  				'200': 'var(--first-date-200)',
  				'300': 'var(--first-date-300)',
  				'400': 'var(--first-date-400)',
  				'500': 'var(--first-date-500)',
  				'600': 'var(--first-date-600)',
  				'700': 'var(--first-date-700)',
  				DEFAULT: 'var(--first-date)'
  			},
  			orangeville: {
  				'100': 'var(--orangeville-100)',
  				'200': 'var(--orangeville-200)',
  				'300': 'var(--orangeville-300)',
  				'400': 'var(--orangeville-400)',
  				'500': 'var(--orangeville-500)',
  				'600': 'var(--orangeville-600)',
  				'700': 'var(--orangeville-700)',
  				DEFAULT: 'var(--orangeville)'
  			},
  			'chi-gong': {
  				'100': 'var(--chi-gong-100)',
  				'200': 'var(--chi-gong-200)',
  				'300': 'var(--chi-gong-300)',
  				'400': 'var(--chi-gong-400)',
  				'500': 'var(--chi-gong-500)',
  				'600': 'var(--chi-gong-600)',
  				'700': 'var(--chi-gong-700)',
  				DEFAULT: 'var(--chi-gong)'
  			},
  			'pink-glamour': {
  				'100': 'var(--pink-glamour-100)',
  				'200': 'var(--pink-glamour-200)',
  				'300': 'var(--pink-glamour-300)',
  				'400': 'var(--pink-glamour-400)',
  				'500': 'var(--pink-glamour-500)',
  				'600': 'var(--pink-glamour-600)',
  				'700': 'var(--pink-glamour-700)',
  				DEFAULT: 'var(--pink-glamour)'
  			},
  			'pico-8-pink': {
  				'100': 'var(--pico-8-pink-100)',
  				'200': 'var(--pico-8-pink-200)',
  				'300': 'var(--pico-8-pink-300)',
  				'400': 'var(--pico-8-pink-400)',
  				'500': 'var(--pico-8-pink-500)',
  				'600': 'var(--pico-8-pink-600)',
  				'700': 'var(--pico-8-pink-700)',
  				DEFAULT: 'var(--pico-8-pink)'
  			},
  			'prunus-avium': {
  				'100': 'var(--prunus-avium-100)',
  				'200': 'var(--prunus-avium-200)',
  				'300': 'var(--prunus-avium-300)',
  				'400': 'var(--prunus-avium-400)',
  				'500': 'var(--prunus-avium-500)',
  				'600': 'var(--prunus-avium-600)',
  				'700': 'var(--prunus-avium-700)',
  				DEFAULT: 'var(--prunus-avium)'
  			},
  			'city-lights': {
  				'100': '#fbfcfd',
  				'200': '#f1f4f5',
  				'300': '#e8ecee',
  				'400': '#dfe6e9',
  				'500': '#c4d1d6',
  				'600': '#a9bcc3',
  				'700': '#8ea7b0'
  			},
  			'soothing-breeze': {
  				'100': 'var(--soothing-breeze-100)',
  				'200': 'var(--soothing-breeze-200)',
  				'300': 'var(--soothing-breeze-300)',
  				'400': 'var(--soothing-breeze-400)',
  				'500': 'var(--soothing-breeze-500)',
  				'600': 'var(--soothing-breeze-600)',
  				'700': 'var(--soothing-breeze-700)',
  				DEFAULT: 'var(--soothing-breeze)'
  			},
  			'american-river': {
  				'100': 'var(--american-river-100)',
  				'200': 'var(--american-river-200)',
  				'300': 'var(--american-river-300)',
  				'400': 'var(--american-river-400)',
  				'500': 'var(--american-river-500)',
  				'600': 'var(--american-river-600)',
  				'700': 'var(--american-river-700)',
  				DEFAULT: 'var(--american-river)'
  			},
  			'dracula-orchid': {
  				'100': 'var(--dracula-orchid-100)',
  				'200': 'var(--dracula-orchid-200)',
  				'300': 'var(--dracula-orchid-300)',
  				'400': 'var(--dracula-orchid-400)',
  				'500': 'var(--dracula-orchid-500)',
  				'600': 'var(--dracula-orchid-600)',
  				'700': 'var(--dracula-orchid-700)',
  				DEFAULT: 'var(--dracula-orchid)'
  			},
  			'gradient-start': '#3b82f6',
  			'gradient-end': '#8b5cf6',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindAnimate],
};
export default config;
