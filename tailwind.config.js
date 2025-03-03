/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#ffffff",
      black: "#171717",
      gray: {
        50: "#f5f5f5",
        100: "#e5e5e5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0f0f0f",
      },
      primary: {
        DEFAULT: "#9E835F",
        light: "#CEBD9C",
        dark: "#715C3F",
      },
      secondary: "#0F1113",
      accent: "#D4AF37",
      gold: "#D4AF37",
    },
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "0.3rem",
        sm: "0.1rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
    },
  },
}; 