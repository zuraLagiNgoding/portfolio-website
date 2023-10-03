import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
			colors: {
				primary: "#151515",
				secondary: "#242424",
				third: "#D9D9D9",

				accent: "#00BFE9",
			},
      dropShadow: {
				'lightBlue': '0 15px 25px rgba(69, 144, 246, 0.8)',
				'secondaryLightBlue': '0 15px 40px rgba(69, 144, 246, 0.8)',
			}
		},
  },
  plugins: [],
}
export default config
