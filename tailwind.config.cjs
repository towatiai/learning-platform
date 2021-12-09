module.exports = {
    // you dont need `purge: enabled: production` because you are using jit
    purge: [
        "./src/**/*.svelte",
        // may also want to include HTML files
        "./src/**/*.html"
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ["'Open Sans'", 'sans-serif']
        },
        extend: {},
    },
    variants: {},
    plugins: [],
}