const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    darkMode: 'class',
    extend: {},
    colors: {
      primary: {
        page: "#fde68a",
        button: "#fbbf24"
      }
    }
  },
  plugins: [],
});