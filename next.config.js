/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
    trailingSlash: true,
}

module.exports = nextConfig 