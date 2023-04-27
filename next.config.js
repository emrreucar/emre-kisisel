/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const withFonts = require("next-fonts");
module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
  webpack5: true,
});


module.exports = nextConfig
