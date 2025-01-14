/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';
const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glowAnimation 1s ease-in-out infinite alternate',
      },
      keyframes: {
        glowAnimation: {
          '0%': { boxShadow: '0 0 1px rgba(0, 255, 255, 1)' },
          '100%': { boxShadow: '0 0 12px 6px rgba(0, 255, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
