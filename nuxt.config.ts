// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },

        head: {
            title: 'Rruge',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'Rruge',
                    content: 'my website description'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            htmlAttrs: {
                lang: 'sq'
            }
        }
    },
    css: [
        '@/assets/style/style.scss'
    ],

})
