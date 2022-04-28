module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 5px 20px -5px rgb(0 0 0 / 7%)',
        'nav-mobile': '0px 4px 6px 0px rgb(0 0 0 / 10%)',
        'window': 'inset 2px 2px 5px rgba(0, 0, 0, 0.5)',
        'box': '0 10px 25px rgba(0, 0, 0, .1)',
        'iphone': 'inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999, 0 0 30px 0px rgba(0, 0, 0, 0.7)',
      },

      borderRadius: {
        'shape': '58% 42% 38% 62% / 42% 55% 45% 58%',
      },

      translate: {
        'shape': 'translate(0, -50%)',
      },

      keyframes: {
        border: {
          '0%': { borderRadius: '58% 42% 38% 62% / 42% 55% 45% 58%' },
          '50%': { borderRadius: '31% 69% 59% 41% / 28% 24% 76% 72%' },
          '100%': { borderRadius: '58% 42% 38% 62% / 42% 55% 45% 58%' },
          
        },
        jumpInfinite: {
          '0%': { marginTop: '-3px' },
          '50%': { marginTop: '6px' },
          '100%': { marginTop: '-3px' },
        }
      },

      animation: {
        border: 'border 10s infinite',
        jumpInfinite: 'jumpInfinite 1.5s infinite'
      },

      screens: {
        'mobile-sm': '250px',
        'mobile-lg': '500px',
        'tablet-sm': '640px',
        'tablet-lg': '850px',
        'laptop': '1110px',
      },

    },
  },
  plugins: [],
}
