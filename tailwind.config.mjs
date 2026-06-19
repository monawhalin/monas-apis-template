/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F1E7',
        porcelain: '#FFFDF8',
        ink: '#1E1926',
        slate: '#464151',
        line: '#D7CEC0',
        repo: '#2F8F5B',
        coral: '#E75D50',
        brass: '#C9942E',
        blue: '#315BBD',
        lavender: '#CFC5E8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(30, 25, 38, 0.12)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.7)',
      },
      keyframes: {
        'panel-in': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'panel-in': 'panel-in 0.7s ease-out both',
        scan: 'scan 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
