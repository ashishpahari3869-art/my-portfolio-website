/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080F19",
          900: "#0C1728",
          850: "#112038",
          800: "#152A42",
          700: "#1E3A5C",
          600: "#2B4E77",
        },
        gold: {
          100: "#FAF3E2",
          200: "#F0E3C0",
          300: "#E4CE96",
          400: "#D4B76A",
          500: "#C9A24B",
          600: "#A9823A",
          700: "#84642B",
        },
        cream: {
          DEFAULT: "#F7F4ED",
          100: "#FFFDF8",
          200: "#F1ECE1",
          300: "#E5DECF",
        },
        ink: "#141B24",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Public Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "76rem",
        prose: "42rem",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,15,25,0.04), 0 10px 30px -18px rgba(8,15,25,0.18)",
        lift: "0 2px 6px rgba(8,15,25,0.06), 0 28px 56px -24px rgba(8,15,25,0.28)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        glow: "0 0 90px -24px rgba(201,162,75,0.45)",
      },
      backgroundImage: {
        // Bright highlight — only legible on the navy panels.
        "gold-sheen":
          "linear-gradient(100deg, #A9823A 0%, #E4CE96 38%, #FAF3E2 52%, #D4B76A 70%, #A9823A 100%)",
        // Same foil, shifted dark enough to hold contrast on cream.
        "gold-sheen-ink":
          "linear-gradient(100deg, #7A5C27 0%, #A9823A 35%, #C9A24B 52%, #A9823A 72%, #7A5C27 100%)",
        "navy-depth":
          "radial-gradient(120% 90% at 15% 0%, #152A42 0%, #0C1728 45%, #080F19 100%)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        nudge: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.45" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 7s ease-in-out infinite",
        spinSlow: "spinSlow 34s linear infinite",
        nudge: "nudge 2.2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
