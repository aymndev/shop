/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "banner-img":
                    "url('/brunette-girl-green-fur-coat-old-hall-with-column-railings.jpg')",
            },
            fontFamily: {
                bebas: "var(--font-bebas)",          // Bebas Neue
                montserrat: "var(--font-montserrat)", // Montserrat
                noto: "var(--font-noto)",            // Noto Sans
                zalando: "var(--font-zalando)",      // Zalando Sans Expanded
                geist: "var(--font-geist-sans)",     // Geist Sans
                mono: "var(--font-geist-mono)",      // Geist Mono
            },

        },
    },
    plugins: [],
};
