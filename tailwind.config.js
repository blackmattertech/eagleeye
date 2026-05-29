/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A3FB5",
          dark: "#0D2A8A",
          light: "#EEF2FF",
        },
        navy: {
          DEFAULT: "#0D1B3E",
          light: "#1A2F5A",
        },
        accent: {
          yellow: "#F5C518",
          coral: "#E8503A",
          teal: "#3ECFB8",
          gold: "#D4AF37",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          800: "#1F2937",
          900: "#111827",
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        bento: "20px",
      },
    },
  },
  plugins: [],
};
