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
            sans: ["'varela round', 'serif'"],
            varela: ["'Varela Round', 'sans-serif'"],
        },
        extend: {},
        screens: {
            'mobile': '440px',
            // => @media (min-width: 440px) { ... }
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
    },
    variants: {},
    plugins: [],
}