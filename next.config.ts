import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/thansohoc',
    assetPrefix: '/thansohoc/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
