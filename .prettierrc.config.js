/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	printWidth: 120,
	plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};

export default config;
