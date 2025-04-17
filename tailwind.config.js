export const safelist = ["bg-black"];
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    animation: {
      "curtain-drop": "curtain-drop 2.5s ease-in-out forwards",
      "spin-slow": "spin 8s linear infinite",
      bubbleFade: "bubbleFade 2s ease-out forwards",
      "magic-text": "magicFade 1.5s ease-in-out",
    },
    keyframes: {
      'curtain-drop': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0%)' },
      },
      bubbleFade: {
        '0%': { opacity: '1', transform: 'scale(1)' },
        '100%': { opacity: '0', transform: 'scale(2)' },
      },
      magicFade: {
        '0%': { opacity: 1 },
        '20%': { opacity: 0.6 },
        '40%': { opacity: 0.2 },
        '50%': { opacity: 0 },
        '60%': { opacity: 0.2 },
        '80%': { opacity: 0.6 },
        '100%': { opacity: 1 },
      },
    },
  },
};
