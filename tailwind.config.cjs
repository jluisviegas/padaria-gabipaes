/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#EBEBEB',
				primaryDark: '#B52927',
				secondary: '#A68D67',
				grayIsh: '#706B61',
				lightYellow: '#D3AC4D',
			},
			fontFamily: {
				novecento: ['Gill Sans Nova Book', 'sans-serif'],
				roboto: ['Roboto Condensed', 'sans-serif'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
		plugins: [],
	},
};
