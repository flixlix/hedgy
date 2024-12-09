import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import { default as tsParser, default as typescriptParser } from "@typescript-eslint/parser"
import eslintConfigPrettier from "eslint-config-prettier"
import prettier from "eslint-plugin-prettier"
import tailwindcss from "eslint-plugin-tailwindcss"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends("plugin:@next/next/recommended", "prettier"),
  eslintConfigPrettier,
  {
    plugins: {
      tailwindcss,
      prettier,
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva", "tw"],
        classRegex: ["ClassName$", "className", "tw", "tw$", "tw\\(", "tw\\["],
      },
    },
    rules: {
      "tailwindcss/classnames-order": [
        "error",
        {
          callees: ["cn", "cva", "tw"],
          classRegex: ["ClassName$", "className", "tw", "tw$", "tw\\(", "tw\\["],
        },
      ],
      "tailwindcss/no-custom-classname": [
        "error",
        {
          whitelist: ["(?!(bg|text)\\-).*"],
        },
      ],

      "tailwindcss/no-contradicting-classname": "error",
      "prettier/prettier": "warn",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"],
    languageOptions: {
      parser: tsParser,
    },
  },

  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
]
