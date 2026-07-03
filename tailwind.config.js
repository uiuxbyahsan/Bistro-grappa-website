/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single deep solid green used everywhere — no lighter/muted variants.
        forest: {
          DEFAULT: "#04301B",
          deep: "#04301B",
          light: "#04301B",
        },
        cream: {
          DEFAULT: "#F5EDD8",
          soft: "#FBF6E9",
        },
        // Brand accent is warm amber/orange (#f2b418). Kept under the
        // `gold` key so every existing text-gold/bg-gold/border-gold usage
        // adopts the accent site-wide without renaming classes.
        gold: {
          DEFAULT: "#f2b418",
          dark: "#d49d0f",
          soft: "#f7c84d",
        },
        amber: {
          DEFAULT: "#f2b418",
          dark: "#d49d0f",
          soft: "#f7c84d",
        },
      },
      fontFamily: {
        // Segoe Print (self-hosted) for display headings
        display: ["var(--font-segoe)", "Segoe Print", "Bradley Hand", "cursive"],
        // Playfair Display for menu names + body
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        // Inter for utility text
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -18px rgba(4, 48, 27, 0.5)",
        img: "0 6px 24px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
