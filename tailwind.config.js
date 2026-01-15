module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Playfair Display',
        body: 'Work Sans',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        colors: {
          primary: '#050402',
          secondary: '#1C1D24',
          tertiary: '#131419',
          accent: {
            DEFAULT: '#4d95a8',
            hover: '#2d545e',
            light: '#6bb8cc',
          },
          paragraph: '#949fb0',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        backdropBlur: {
          xs: '2px',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(77, 149, 168, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(77, 149, 168, 0.8), 0 0 30px rgba(77, 149, 168, 0.6)' },
          },
        },
      },
    },
    plugins: [],
  };
  