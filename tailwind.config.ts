import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primarycolor: "#77C5A6",
      secondarycolor: "#84DBB8",
      'black-300': '#4D4D4D',
      'custom-gray': '#F5F5F5',
      'custom-gray-border': '#D2D2D2',
    },
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      borderRadius: {
        'custom': '16px',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;