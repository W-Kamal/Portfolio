/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  i18:{
    locales:['fr','en'],
    defaultLocale:'fr'
  }
}
