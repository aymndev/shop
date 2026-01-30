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
        },
    },
    plugins: [],
};
