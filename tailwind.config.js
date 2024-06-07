/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			colors: {
				primary: "#EF7878",
				paper: "#EFF1F4",
				muted: "#E1E4EA",
				separator: "#D8D8D8",
			},
		},
	},
	plugins: [],
};
