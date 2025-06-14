import type { Config } from 'tailwindcss';
import Flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    Flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0096c9', // Custom color added
        backgroundBlue: '#d9e6ee',
        darkBlueText: '#00338d',
        hoverBlue: '#0096c9d6',
        BlueHover: '#155e75',
      },
    },
  },
  plugins: [Flowbite.plugin(), require('flowbite-typography')],
} satisfies Config;
