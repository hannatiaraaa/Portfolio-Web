import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx',
  ],
  safelist: [
    {
      pattern: /text-socialMedia-[a-z]/,
    },
    {
      pattern: /bg-socialMedia-[a-z]*/,
      variants: ['hover', 'dark'],
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-dark': 'var(--bg-dark)',
        'bg-light': 'var(--bg-light)',
        'dark-theme': 'var(--dark-theme)',
        'light-theme': 'var(--light-theme)',
        'secondary-dark-theme': 'var(--secondary-dark-theme)',
        'secondary-light-theme': 'var(--secondary-light-theme)',
        socialMedia: {
          email: '#ff0000',
          linkedin: '#0077b5',
          github: { light: '#333333', dark: '#f5f5f5' },
          gitlab: '#fc6d26',
          hackerrank: '#1ba94c',
          whatsapp: '#25d366',
        },
      },
    },
  },
  plugins: [],
};
export default config;
