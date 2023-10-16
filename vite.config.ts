import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env': env,
            plugins: [svgr(), react()],
            resolve: {
                alias: [{ find: '@', replacement: '/src' }],
            },
        },
    };
});
