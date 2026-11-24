import { basePath } from './src/site-config.mjs';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath,
  trailingSlash: true,
  devIndicators: false,
  images: { unoptimized: true },
  experimental: { globalNotFound: true }
};

export default config;
