export default {
  "*.{ts,tsx,js,jsx,mjs,cjs,json,md,css,scss}": [
    "pnpm exec prettier --write",
    "pnpm exec eslint --max-warnings=0"
  ]
};
