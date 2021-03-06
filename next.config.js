const withPWA = require("next-pwa")

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  basePath: "",
  trailingSlash: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
})
