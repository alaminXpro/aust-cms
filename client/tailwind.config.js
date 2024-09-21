/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: "#47BDFF",
          light: "#eaf1ff",
          "dark-light": "rgba(67,97,238,.15)",
        },
        secondary: {
          DEFAULT: "#B476E5",
          light: "#ebe4f7",
          "dark-light": "rgb(128 93 202 / 15%)",
        },
        success: {
          DEFAULT: "#00ab55",
          light: "#ddf5f0",
          "dark-light": "rgba(0,171,85,.15)",
        },
        danger: {
          DEFAULT: "#e7515a",
          light: "#fff5f5",
          "dark-light": "rgba(231,81,90,.15)",
        },
        warning: {
          DEFAULT: "#e2a03f",
          light: "#fff9ed",
          "dark-light": "rgba(226,160,63,.15)",
        },
        info: {
          DEFAULT: "#2196f3",
          light: "#e7f7ff",
          "dark-light": "rgba(33,150,243,.15)",
        },
        dark: {
          DEFAULT: "#3b3f5c",
          light: "#eaeaec",
          "dark-light": "rgba(59,63,92,.15)",
        },
        black: {
          DEFAULT: "#08111F",
          light: "#e3e4eb",
          "dark-light": "rgba(14,23,38,.15)",
        },
        white: {
          DEFAULT: "#ffffff",
          light: "#e0e6ed",
          dark: "#888ea8",
        },
        gray: {
          DEFAULT: '#7780A1',
          dark: '#1C2331',
          light: '#F5F7FF',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1142px',
    },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        mulish: ['Mulish', 'sans-serif'],
        reey: ['reey', 'sans-serif'],
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        "3xl":
          "0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
    },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-invert-headings": theme("colors.white.dark"),
            "--tw-prose-invert-links": theme("colors.white.dark"),
            color: theme('colors.gray'),
            fontSize: '1.125rem',
            h1: { fontSize: "40px", marginBottom: "0.5rem", marginTop: 0 },
            h2: { fontSize: "32px", marginBottom: "0.5rem", marginTop: 0 },
            h3: { fontSize: "28px", marginBottom: "0.5rem", marginTop: 0 },
            h4: { fontSize: "24px", marginBottom: "0.5rem", marginTop: 0 },
            h5: { fontSize: "20px", marginBottom: "0.5rem", marginTop: 0 },
            h6: { fontSize: "16px", marginBottom: "0.5rem", marginTop: 0 },
            p: { marginBottom: "0.5rem" },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    rotateX,
  ],
};
