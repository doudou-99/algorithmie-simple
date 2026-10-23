import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{ts}"], 
    extends: ["js/recommended"], 
    rules: {
        "max-lines-per-function": ["error", 50],
        "max-params": ["error", 3],
        "complexity": ["error", 5],
        "@typescript-eslint/no-explicit-any": "error"
    }
  },
]);
