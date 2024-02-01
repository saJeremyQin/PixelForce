// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    theme: {
      extend: {
        minWidth: {
          'screen': '100vw',
        },
        gradientColorStops: {
          '57':'rgba(251, 251,251,0)',
          '93': '#FCFCFC',
        },
        colors: {
          dark: {
            primary: '#1A1E25', 
          },
          gray: {
            primary: '#7D7F88', 
          },
        },
      },
    },
    plugins: [
      require('tailwindcss-gradients'),
    ],
  };
  