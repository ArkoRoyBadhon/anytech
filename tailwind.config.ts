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
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
