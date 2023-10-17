export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#d09e55',
				'secondary': '#ebdbcc',
				'main-black': '#222325',
			},
			animation: {
				'bump': 'bump 0.2s linear',
			},
			keyframes: {
				'bump': {
					'0%': { transform: 'scale(0.8)' },
					'100%': { transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
}
