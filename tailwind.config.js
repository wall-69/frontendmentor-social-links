/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				green: "hsl(75, 94%, 57%)",
				"gray-700": "hsl(0, 0%, 20%)",
				"gray-800": "hsl(0, 0%, 12%)",
				"gray-900": "hsl(0, 0%, 8%)",
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: "14px" },
			});
		}),
	],
};
