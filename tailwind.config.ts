import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "benefits-bg": "url('/static/images/benefits/benefits_banner.png')",
      },
      colors: {
        "pituku-primary": "#7ACCC3",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
