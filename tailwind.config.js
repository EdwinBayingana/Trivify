/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        creamWhite: '#E9E9E9',
        primaryPurple: '#655DBB',
        greyText: '#6C6C6C',
        lightRed: '#FF6666',
        lightPurple: '#EAE8FF',
      },
    },
  },
  plugins: [],
};
