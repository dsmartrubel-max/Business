const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.bkash.com",
                port: "",
                pathname: "/*/**",
            },
        ],
    },
};

module.exports = withNextIntl(nextConfig);
