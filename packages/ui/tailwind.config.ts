import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('@legal-crm/config/tailwind')],
};

export default config;
