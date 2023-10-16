import { BuildOptions } from '../types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions) => {
    return {
        test: /\.(jsx|tsx|js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [ [ '@babel/preset-env', { targets: 'defaults' } ] ],
                plugins: [
                    [ '@babel/plugin-transform-typescript' ],
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
};
