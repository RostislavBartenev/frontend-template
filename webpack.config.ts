import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/build/types/config';

const envPath = `.env.${process.env.NODE_ENV}`;
require('dotenv').config({ path: envPath });

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

const mode = (process.env.NODE_ENV as BuildMode) || 'production';
const isDev = mode === 'development';
const port = Number(process.env.PORT) || 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
});

export default config;
