import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-muted": "var(--accent-muted)",
        olive: "#6D8E53",
        "olive-dark": "#5a7a45",
        "green-dark": "#3F5E3D",
        sage: "#A8B8A0",
        beige: "#E8E2D7",
        "beige-light": "#F5F2ED",
        "text-dark": "#1a1a1a",
        "text-muted": "#6b7280",
        "section-light": "#FAFAFA",
        "heading-dark": "#222222",
        "body-muted": "#555555",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
