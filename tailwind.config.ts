import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors : {
        "color-primary": "#000000;",
        "color-secondary": "#FFA500;",
      },

    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
