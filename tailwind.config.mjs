/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1561b2',
        secondary: '#868e96',
        background: '#e4c8ac',
        accent: '#de9b5a',
      },
      fontFamily: {
        heading: ['"Saira Extra Condensed"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
