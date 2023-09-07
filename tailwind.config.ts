import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        pizazz: {
          "50": "#fffbea",
          "100": "#fff2c5",
          "200": "#ffe585",
          "300": "#ffd146",
          "400": "#ffbc1b",
          "500": "#f99500",
          "600": "#e27100",
          "700": "#bb4c02",
          "800": "#983b08",
          "900": "#7c310b",
          "950": "#481700",
        },
        endeavour: {
          "50": "#f0f7ff",
          "100": "#e0effe",
          "200": "#b9dffe",
          "300": "#7cc5fd",
          "400": "#36a9fa",
          "500": "#0c8eeb",
          "600": "#0065b7",
          "700": "#0158a3",
          "800": "#064b86",
          "900": "#0b3f6f",
          "950": "#07284a",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
    // ... other plugins
  ],
};
export default config;
