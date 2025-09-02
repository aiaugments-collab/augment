import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Disable img element warnings - we use img for external logos from Clearbit
      "@next/next/no-img-element": "off",
      // Disable unescaped entities warnings
      "react/no-unescaped-entities": "off",
      // Disable unused variables warnings
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
