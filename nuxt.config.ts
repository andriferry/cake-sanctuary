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
                    href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap',
                    rel: 'stylesheet',
                },
            ],
        },
        // layoutTransition: { name: 'slide-fade', mode: 'out-in' },
        pageTransition: { name: 'slide-fade', },
    },
    tailwindcss: {
        viewer: false,
        configPath: 'tailwind.config',
    },

    css: ['~/assets/css/tailwind.css'],

    runtimeConfig: {
        public: {
            title: 'Cake Sanctuary',
        },
        oauth: {
            google: {
                clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
                clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
                redirectURL: process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URL,
                scope: ['email', 'openid', 'profile'],
                authorizationParams: {
                    access_type: 'offline',
                    approval_prompt: 'force',
                },
            },
        },
    },
    auth: {
        webAuthn: true,
    },
    components: [
        {
            path: '~/components/ui/',
            pathPrefix: false,
        },
        {
            path: '~/components/global',
            global: true,
        },
        {
            path: '~/components/',
            pathPrefix: false,
        },
        {
            path: '~/views/',
            pathPrefix: true,
        },
    ],

    typescript: {
        tsConfig: {
            compilerOptions: {
                paths: {
                    '@/lib/utils/*': ['../lib/utils/*'],
                },
            },
            include: ['global.d.ts','types/*.d.ts']
        },
    },

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        //'@nuxtjs/color-mode', //   '@nuxtjs/seo',
        'nuxt-auth-utils',
        '@nuxt/icon',
        '@pinia/nuxt',
        // '@nuxtjs/storybook',
    ],
    pinia: {
        storesDirs: ['./stores/**'],
    },
    icon: {
        class: 'icon', // default <Icon> class applied
        mode: 'css', //
        serverBundle: {
            collections: [
                'file-icons',
                'tabler',
                'noto',
                'icon-park-outline',
                'mdi',
            ],
            externalizeIconsJson: true,
        },
    },
    nitro: {
        experimental: {
            database: true,
            websocket: true,
        },
    },
    // colorMode: {
    //     preference: 'system', // default value of $colorMode.preference
    //     fallback: 'light', // fallback value if not system preference found
    //     hid: 'nuxt-color-mode-script',
    //     globalName: '__NUXT_COLOR_MODE__',
    //     componentName: 'ColorScheme',
    //     classPrefix: '',
    //     classSuffix: '',
    //     storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    //     storageKey: 'nuxt-color-mode',
    // },
});
