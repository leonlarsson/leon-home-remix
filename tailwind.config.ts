import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "kinda-black": "#0e1011",
        "kinda-white": "#f2f0ed",
      },
    },
  },
  plugins: [],
} satisfies Config;
