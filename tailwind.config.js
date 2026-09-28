/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f8f4',
          100: '#e1eee6',
          200: '#c4ddd0',
          300: '#99c3b1',
          400: '#6ca48d',
          500: '#4a8770',
          600: '#386c59',
          700: '#2c5647',
          800: '#204E38', // Moss Green
          900: '#1B3B2B', // Deep Forest
          950: '#0c1f17',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f9f4eb',
          200: '#f2e5d0',
          300: '#e7ceab',
          400: '#d7af7c',
          500: '#c59353',
          600: '#b17b40',
          700: '#8e5e33',
          800: '#754b2d',
          900: '#613e27',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FBF9F5', // Natural warm background
          200: '#F5EFE6',
          300: '#EDE4D6',
          400: '#DED1BE',
          500: '#CBBBA3',
        },
        slateText: '#4B5563',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 59, 43, 0.08)',
        'card': '0 15px 35px -5px rgba(27, 59, 43, 0.1), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 25px 50px -12px rgba(27, 59, 43, 0.22)',
      }
    },
  },
  plugins: [],
}
