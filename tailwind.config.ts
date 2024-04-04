import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Outfit : ["Outfit", "sans-serif"],
        BaiJamjuree : ["Bai Jamjuree", "sans-serif"],
       },
       colors: {
        navy: '#141E61',
        grey: '#787A91',
        basebg: "#EEEEEE"
       },
       fontSize: {
        base: ['20px', '24px'],
        lg: ['40px', '48px'],
      }
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
export default config;
