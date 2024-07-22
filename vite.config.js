import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),

        react(),
     ],
    // server: {
    //     host: '0.0.0.0', // This allows Vite to be accessed from any IP address
    //     port: 5173, // You can change this to your desired port
    //     hmr: {
    //         host: '192.168.100.201', // Replace with your PC's IP address
    //     },
    // },
});
