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
        primary: '#0048ff',
        secondary: "#bd00ff",
        accent: '#ffde01',
        base: '#8a8a8a'
      },
    },
  },
  plugins: [],
};
export default config;
