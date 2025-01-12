module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'slide-down': {
          from: { transform: 'scaleY(0.8)', opacity: 0 },
          to: { transform: 'scaleY(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
