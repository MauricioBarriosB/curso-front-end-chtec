/*
Segundos caducación de caches estáticas :
1 AÑO : 31536000
1 MES : 2592000
1 SEM : 604800
1 DIA : 86400
1 HOR : 3600
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Liv Hospital',
                short_name: 'LivHospital',
                description: 'Liv Hospital PWA',
                theme_color: '#ffffff',
                start_url: '/',
                display: 'standalone',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            devOptions: {
                enabled: true
            },

            workbox: {
                runtimeCaching: [

                    {
                        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/line-awesome\/1.3.0\/line-awesome\/css\/.*/i,    // https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'line-awesome-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 2592000
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            },
                        }
                    },

                    {
                        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/line-awesome\/1.3.0\/line-awesome\/fonts\/.*/i,  // https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/fonts/
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'line-woff-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 2592000
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            },
                        }
                    },

                    {
                        urlPattern: /^https:\/\/capacitaenlinea\.cl\/demodoctorapi\/images\/.*/i,   // https://capacitaenlinea.cl/demodoctorapi/images/
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'demodoctor-api-img-cache',
                            expiration: {
                                maxEntries: 30,
                                maxAgeSeconds: 2592000
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            },
                        }
                    }
                ]
            }
        })
    ]
});