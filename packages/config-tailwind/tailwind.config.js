module.exports = {
  content: [
    "../../apps/admin/**/*.{js,ts,jsx,tsx}",
    "../../apps/buyer/**/*.{js,ts,jsx,tsx}",
    "../../apps/seller/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "767px",
      laptop: "1240px",
      desktop: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
