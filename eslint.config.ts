import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

/** @type { import("eslint").Linter.Config[] } */
export default [
  { files: ["**/*.{ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["dist/*", "coverage/*"],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
];
