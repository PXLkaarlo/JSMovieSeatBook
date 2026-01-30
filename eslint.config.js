// apparently this file sets up eslint configuration
// eslint.config.js
import js from "@eslint/js";
import node from "eslint-plugin-node";
import prettier from "eslint-config-prettier";

export default [
  // Base recommended rules
  js.configs.recommended,
  prettier,

  // Browser / frontend files
  {
    files: ["**/script/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  },

  // Node / backend files
  {
    files: ["**/*.js"],
    ignores: ["**/script/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    plugins: {
      node
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "node/no-unsupported-features/es-syntax": "off",
      "node/no-missing-import": "off"
    }
  },

  // ESLint config itself (ESM)
  {
    files: ["eslint.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  }
];
