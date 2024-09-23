/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				background: '#010a19',
				white: '#f6f8f9',
				border: '#a2a6a8',
				cardBackground: '#415f7d',
				blueGray: '#4e5861',
				darkGray: '#39383e'
			}
		}
	},
	plugins: []
};
