module.exports = {
    jit: true,
    // you dont need `purge: enabled: production` because you are using jit
    purge: [
        "./src/**/*.svelte",
        // may also want to include HTML files
        "./src/**/*.html"
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ["'Questrial'", 'sans-serif']
        },
        extend: {},
    },
    variants: {},
    plugins: [],
}