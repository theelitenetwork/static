/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
            keyframes: {
                animatedgradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            animation: {
                gradient: 'animatedgradient 6s ease infinite alternate',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}