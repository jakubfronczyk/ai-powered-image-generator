/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["aipoweredimagegene63901a.blob.core.windows.net"],
    },
};

module.exports = nextConfig;
