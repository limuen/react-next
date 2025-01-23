// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx}"],
  theme: {
    fsizes: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      24: "24px",
      32: "32px"
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          fsize: value => ({
            fontSize: value
          })
        },
        {
          values: theme("fsizes")
        }
      );
    })
  ]
};
