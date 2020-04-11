module.exports = {
    dev: process.env.NODE_ENV === 'localhost',
    srcDir: './src/app',
    loading: { color: '#e9711c' },
    router: {
        middleware: []
    },
    env: {},
    // Head config for all pages
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    css: [
        '~/assets/css/style.scss'
    ],
    modules: [
    ],
    plugins: []
};
