// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    app: {
        head: {
            title: 'POI',
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
                    rel: 'stylesheet',
                },
            ],
        },
        // layoutTransition: { name: 'slide-fade', mode: 'out-in' },
        pageTransition: { name: 'slide-fade', mode: 'out-in' },
    },
    tailwindcss: {
        viewer: false,
    },

    lucide: {
        namePrefix: 'Icon',
    },

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
        'nuxt-auth-utils',
        'nuxt-lucide-icons',
    ],
});
