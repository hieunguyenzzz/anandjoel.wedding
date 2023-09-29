/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      "assets.tina.io","anandjoel.hieunguyen.dev"
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
  "typescript": {
    "ignoreBuildErrors": true,
  },
}

module.exports = nextConfig
