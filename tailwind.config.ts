import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pks: {
          blue: '#2C4C6E',
          'blue-dark': '#1a3b5d',
          'blue-light': '#4a7ba7',
          red: '#E74C3C',
          'red-dark': '#c0392b',
        },
      },
    },
  },
  plugins: [],
};
export default config;

