/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-card": "var(--bg-card)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
        mid: "var(--border-mid)",
      },
      borderRadius: {
        card: "var(--radius)",
        "card-sm": "var(--radius-sm)",
      },
    },
  },
  plugins: [],
};
