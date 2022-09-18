/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  i18: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  },
  images: {
    domains: ['ddeaqslpkdqokytenaul.supabase.co'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}