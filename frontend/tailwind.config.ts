import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#F5F0E8",
                "brown-dark": "#3E2723",
                "brown-mid": "#6D4C41",
                "brown-light": "#A1887F",
                gold: "#C8955C",
                "gold-light": "#E4B483",
            },
            fontFamily: {
                script: ["var(--font-great-vibes)", "cursive"],
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-lato)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;