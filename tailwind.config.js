/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./assets/**/*.{js,html}"],
    theme: {
        extend: {
            colors: {
                bg: '#050505',
                surface: '#0a0a0a',
                ink: '#ededed',
                accent: '#00F0FF',
                accentHover: '#00B8C4',
                whatsapp: '#25D366',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                tight: ['"Inter Tight"', 'sans-serif'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
