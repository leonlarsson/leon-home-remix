import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      colors: {
        "kinda-black": "#0e1011",
        "kinda-white": "#f2f0ed",
      },
    },
  },
  plugins: [],
} satisfies Config;
