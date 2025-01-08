import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8",
          50: "#E6EBFB",
          100: "#CCd7F7",
          200: "#99AFEF",
          300: "#6687E7",
          400: "#335FDF",
          500: "#1D4ED8",
          600: "#173EA5",
          700: "#112F7D",
          800: "#0C1F54",
          900: "#06102B",
        },
        secondary: {
          DEFAULT: "#1D3461",
          50: "#E6E9EF",
          100: "#CCD2DE",
          200: "#99A5BD",
          300: "#66789C",
          400: "#334B7B",
          500: "#1D3461",
          600: "#172A4E",
          700: "#11203A",
          800: "#0C1527",
          900: "#060B13",
        },
        success: {
          DEFAULT: "#16A34A",
          50: "#E6F6EC",
          100: "#CCEDD8",
          200: "#99DBB1",
          300: "#66C98A",
          400: "#33B763",
          500: "#16A34A",
          600: "#12823B",
          700: "#0D612C",
          800: "#09411E",
          900: "#04200F",
        },
        danger: {
          DEFAULT: "#BE123C",
          50: "#F9E6EB",
          100: "#F3CCD6",
          200: "#E799AD",
          300: "#DB6684",
          400: "#CF335B",
          500: "#BE123C",
          600: "#980E30",
          700: "#720B24",
          800: "#4C0718",
          900: "#26040C",
        },
        warning: {
          DEFAULT: "#EAB308",
          50: "#FEF7E6",
          100: "#FDEFCC",
          200: "#FBDF99",
          300: "#F9CF66",
          400: "#F7BF33",
          500: "#EAB308",
          600: "#BB8F06",
          700: "#8C6B05",
          800: "#5E4803",
          900: "#2F2402",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1D4ED8",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#1D3461",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#16A34A",
              foreground: "#FFFFFF",
            },
            danger: {
              DEFAULT: "#BE123C",
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#EAB308",
              foreground: "#000000",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#3B82F6",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#2D4A7A",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#22C55E",
              foreground: "#FFFFFF",
            },
            danger: {
              DEFAULT: "#DC2626",
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#F59E0B",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
