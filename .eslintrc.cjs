/* eslint-env node */
module.exports = {
  extends: ["react-app", "react-app/jest"],
  plugins: ["unused-imports"],
  rules: {
    // Let putout remove unused variables on commit; avoid duplicate reports
    "no-unused-vars": "off",
    // Auto-fix unused imports on eslint --fix (like ruff in Python)
    "unused-imports/no-unused-imports": "error",
    // Unused variables are removed by putout on commit; no need to report here
    "unused-imports/no-unused-vars": "off",
  },
};
