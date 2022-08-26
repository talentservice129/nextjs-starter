/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      screens: {
          sm: '480px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
      },
      container: {
          center: true,
          padding: {
            xl: '20px',
            DEFAULT: '16px',
          },
      },
      extend: {
        colors: {
          primary: '#F6305F',
          secondary: '#8D64FF',
          warning: '#FFC043',
          success: '#48BF60',
          error: '#FF6464',
          orange: '#FF9443',
          green: '#44BBA4',
          pink: '#FF92A8',
          dark: '#242E42',
          light: '#EFEFF3',
          gray: {
            100: '#A1ABB9',
            200: '#C4C8D4',
            300: '#F8F8F9',
          },
          transparent: '#FFFFFF00',
          shade: '#F4F5F7',
          disabled: '#D0DBEA',
        },
        dropShadow: {
          '3xl': '3px 15px 30px rgba(246, 48, 95, 0.2)',
          '4xl': '3px 6px 16px #F6305F14',
        },
        fontFamily: {
          sans: ['Spartan', 'sans-serif'],
        }
      },
  },
  plugins: [],
};
