/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			buttonfont: ['ui-sans-serif', 'Poppins'],
		},
		extend: {
			boxShadow: {
				myShadow1: '4.1px -5px 0 0 rgb(255,255,255)',
				myShadow2: '-4.1px -5px 0 0 rgb(255,255,255)',
			},
			backgroundImage: {
				'web-theme-color': 'linear-gradient(#603813, #b29f94);',
				'web-theme-color2': 'linear-gradient(#b29f94, #603813);',
			},
			boxShadowColor: {
				twshadows: 'box-shadow: 0px 0px 5px rgb(114, 69, 220, 0.8);',
			},
			spacing: {
				cspacing: '200vh',
			},
			height: {
				cheight: '80vh',
				screen2: '90vh',
			},
			colors: {
				loy1: '#603813',
				loy2: '#b29f94',
				toy1: 'rgb(55 65 81)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
