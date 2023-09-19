/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/assets/home/mobile/image-header.jpg')",
        'hero-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'hero-desktop': "url('/assets/home/desktop/image-hero.jpg')",
        'hero-desktop2': "url('/assets/home/desktop/image-hero2.png')",
        'footer-mobile': "url('/assets/shared/mobile/image-best-gear.jpg')",
        'footer-tablet': "url('/assets/shared/tablet/image-best-gear.jpg')",
        'footer-desktop': "url('/assets/shared/desktop/image-best-gear.jpg')"
      },
    },
  },
  plugins: [],
}
