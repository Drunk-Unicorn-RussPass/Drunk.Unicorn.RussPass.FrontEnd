import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suisseIntl: ['SuisseIntl'],
        protoGrotesk: ['ProtoGrotesk'],
      },
      colors: {
        advantages: '#76B9DC',
        link: {
          1: '#0370C7',
        },
        cyberYellow: {
          1: '#FFCF08',
          2: '#E5B900',
          3: '#CCA500',
          4: '#FFEB99',
          5: '#FFF5CC',
        },
        natural: {
          1: '#1D1D1D',
          2: '#2F2F2F',
          3: '#747474',
          4: '#A6A6A6',
          5: '#D9D9D9',
          6: '#EBEBEB',
          7: '#F5F5F5',
          8: '#FFFFFF',
        },
        antiqueWhite: {
          1: '#FAEFDC',
          2: '#F5E0BC',
          3: '#F2D6A6',
          4: '#FFFBF3',
        },
        brand: {
          1: '#FF3000',
          2: '#E52B00',
          3: '#CC2600',
        },
        warning: {
          1: '#E81C00',
          2: '#CC1800',
          3: '#B21500',
        },
        success: {
          1: '#007470',
        },
      },
    },
  },
  plugins: [],
};
export default config;
