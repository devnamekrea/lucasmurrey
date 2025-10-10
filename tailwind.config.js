/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pierre Jeanneret inspired palette
        'cream': '#FAF8F3',
        'warm-white': '#F5F2ED',
        'sand': '#E8E2D5',
        'teak': '#C4A373',
        'walnut': '#8B6914',
        'charcoal': '#2C2C2C',
        'forest': '#4A5D3A',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '16/10': '16 / 10',
      }
    },
  },
  plugins: [],
}