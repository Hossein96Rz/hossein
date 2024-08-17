import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      perspective: {
        none: "none",
        "500": "500px",
        "1000": "1000px",
        "1500": "1500px",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    plugin(function ({ addUtilities, theme }) {
      const perspectives = theme("perspective") as Record<string, string>;
      const perspectiveUtilities = Object.keys(perspectives).reduce(
        (acc, key) => ({
          ...acc,
          [`.perspective-${key}`]: {
            perspective: perspectives[key],
          },
        }),
        {} as Record<string, { perspective: string }>,
      );

      addUtilities(perspectiveUtilities);
    }),
  ],
};
export default config;
