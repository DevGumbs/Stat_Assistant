import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      '.slider': {
        backgroundColor: '#030303',
        transition: 'background-color 0.4s',
      },
      '.slider-knob': {
        bottom: '1px',
        left: '1px',
        transition: 'transform 0.4s',
      },
      'input:checked + .slider .slider-knob': {
        transform: 'translateX(8px)',
        backgroundColor: '#030303',
      },
      'input:focus + .slider': {
        boxShadow: '0 0 1px #f7f8f8',
      },
      '.slider.round': {
        borderRadius: '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
