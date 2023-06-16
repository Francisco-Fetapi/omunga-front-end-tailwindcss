/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#f8f8fa",
          primary: "#8571ff",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",

          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#8571ff",
        white2: "#f8f8fa",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Nico Moji", "monospace"],
      },
      borderRadius: {
        main: "25px",
      },
      height: {
        header: "80px",
        screen_height_with_header: "calc(100vh - 80px)",
      },
      gridTemplateColumns: {
        footer: "auto 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
};
