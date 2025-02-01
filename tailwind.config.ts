import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-main": "#1F80F0",
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)',
        "footer-gradient": 'radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)',
        'deep-gradient': 'linear-gradient(190deg, #1f80f0 15.05%, rgba(31, 128, 240, 0) 30.39%);',
      },
      dropShadow: {
        custom: "0px 16px 21px rgba(207, 233, 247, 0.47)",
        custom2: "0px -5px 28px rgba(22, 67, 119, .37)",
      },

    },
  },
  plugins: [],
} satisfies Config;
