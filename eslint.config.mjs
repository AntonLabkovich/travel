import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      import: require("eslint-plugin-import"),
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [["@", "./"]],
          extensions: [".js", ".jsx", ".json"],
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "react/jsx-key": "error",
      "no-console": "warn",
    },
    overrides: [
      {
        files: ["*.test.js", "*.spec.js"],
        env: {
          jest: true,
        },
      },
    ],
  },
];