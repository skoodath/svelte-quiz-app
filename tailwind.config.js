/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			red: '#e91654',
			dark: '#0D0105',
			white: '#ffffff',
			gray: {
				DEFAULT: '#f3f3f3',
				200: '#d3d3d3',
				300: '#999999'
			}
		},
		extend: {}
	},
	plugins: []
};
