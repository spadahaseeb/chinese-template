import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard Variable", "sans-serif"],
      },
      colors: {
        black: {
          primary: "#222222",
          tertiary: "#7A7A7A",
        },
        blue: {
          primary: "#00042e",
          secondary: "#00042e",
        },
        white: {
          primary: "#E6E6EA",
          secondary: "#F7F7F7",
          tertiary: "#ECECEC",
        },
        accent: {
          brand: "#4B628F",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1170px",
        "2xl": "1230px",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },
      zIndex: {
        1: "1",
        5: "5",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        100: "100",
      },
    },
  },
  plugins: [],
};
export default config;
