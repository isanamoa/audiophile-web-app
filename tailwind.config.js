/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/assets/home/mobile/image-header.jpg')",
        'hero-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'hero-desktop': "url('/assets/home/desktop/image-hero.jpg')",
        'footer-mobile': "url('/assets/shared/mobile/image-best-gear.jpg')",
        'footer-tablet': "url('/assets/shared/tablet/image-best-gear.jpg')",
        'footer-desktop': "url('/assets/shared/desktop/image-best-gear.jpg')"
      },
    },
  },
  plugins: [],
}
