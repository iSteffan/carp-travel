import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
    colors: {
      primary: '#FFFFFF',
      'secondary-white': 'rgba(255, 255, 255, 0.20)',
      'accent-red': '#686870',
    },
    fontFamily: {
      serif: ['Inter', 'serif'],
    },
    extend: {
      content: {
        mobileLeftBorder: 'url("/src/assets/icons/mobile-left-border.svg")',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        green: '#00CC2D',
        trans: 'rgba(255, 255, 255, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
