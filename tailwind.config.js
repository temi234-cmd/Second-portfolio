export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#00f2ff",
        "background-dark": "#0a0a0a",
        "surface": "#111111",
      },
      fontFamily: {
        "display": ["'Public Sans'", "sans-serif"],
        "mono": ["'Fira Code'", "monospace"]
      },
    },
  },
  plugins: [],
}
