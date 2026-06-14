// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import pluginQuery from "@tanstack/eslint-plugin-query";
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";

const conf = [
  "error",
  {
    type: "line-length",
    order: "asc",
  },
];

export default tseslint.config(
  { ignores: ["dist", "**/generated", "server.js", "vite.config.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, ...pluginQuery.configs["flat/recommended"]],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      perfectionist: perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // "linebreak-style": ["error", "windows"],
      // "perfectionist/sort-array-includes": conf,
      // "perfectionist/sort-classes": conf,
      "perfectionist/sort-enums": conf,
      "perfectionist/sort-exports": conf,
      "perfectionist/sort-imports": conf,
      // "perfectionist/sort-interfaces": conf,
      "perfectionist/sort-intersection-types": conf,
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-maps": conf,
      "perfectionist/sort-named-exports": conf,
      "perfectionist/sort-named-imports": conf,
      // "perfectionist/sort-object-types": conf,
      // "perfectionist/sort-objects": conf,
      "perfectionist/sort-sets": conf,
      "perfectionist/sort-switch-case": conf,
      "perfectionist/sort-union-types": conf,
      // "perfectionist/sort-variable-declarations": conf,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  storybook.configs["flat/recommended"],
);
