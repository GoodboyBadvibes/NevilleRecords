/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        menuDropDown:{
          '0%':{transform: 'translateY(-100%)'},
          '100%':{transform: 'translateY(0%)'}
        },
        menuPullUp:{
          '0%':{transform: 'translateY(0%)'},
          '100%':{transform: 'translateY(-100%)'},
          // '100%':{display:'hidden'}
        },
        bigFloat:{
          '0%,100%':{transform: 'translateY(0%)'},
          '50%':{transform: 'translateY(10%)'},
          // '100%':{display:'hidden'}
        },
        smallFloat:{
          '0%,100%':{transform: 'translateY(0%)'},
          '50%':{transform: 'translateY(5%)'},
          // '100%':{display:'hidden'}
        }
      },
      animation:{
        menuDropDown: 'menuDropDown 0.5s ease-in-out',
        menuPullUp: 'menuPullUp 0.5s ease-in-out',
        bigFloat: 'bigFloat 15s ease-in-out infinite',
        smallFloat: 'smallFloat 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
