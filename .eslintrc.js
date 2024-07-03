const config = {
	plugins: ["@typescript-eslint"],
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended",
		"plugin:sonar/recommended",
		"plugin:security/recommended",
	],
	rules: {
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "warn",
		"no-console": "warn",
		"unused-imports/no-unused-imports": "warn",
	},
};

export default config;
