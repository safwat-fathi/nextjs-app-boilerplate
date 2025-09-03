module.exports = {
  plugins: ["@typescript-eslint", "security", "sonar", "unused-imports"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonar/recommended",
    "plugin:security/recommended-legacy",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
  },
};
