/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'vi',],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      "assets.tina.io",
    ],
  },
  async rewrites() {
    return [
      {
        source: '/edit/page/:path*',
        destination: '/:path*',// The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
