import type { Config } from 'tailwindcss';
// import plugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts,css}', // Adjust to match your project structure
    'node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['dark'],
  theme: {
    extend: {
      colors: {
        primary: {
          0: '#000a1f', // default background color
          10: '#F9F5FF', // Lightest violet
          50: '#E0D4FF', // Light lavender
          100: '#D0B8FF', // Light violet
          200: '#B59DFF', // Soft purple
          300: '#9A83FF', // Purple-lavender
          400: '#7F66FF', // Moderate violet
          500: '#6A49D4', // Primary violet (original 500 adjusted)
          600: '#5C43C1', // Deeper violet
          700: '#3A1D6A', // Darker violet
          800: '#2E1550', // Very deep violet
          900: '#2c2637' // Darkest violet
        }
      }
    }
  },
  plugins: []
} as Config;
