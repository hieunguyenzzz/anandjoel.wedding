/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [
      "assets.tina.io",
      "res.cloudinary.com"
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
