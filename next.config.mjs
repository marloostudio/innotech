import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/products/autolock", destination: "/products/autoduck", permanent: true },
      { source: "/products/autolock/:path*", destination: "/products/autoduck/:path*", permanent: true },
    ]
  },
  // Lockfiles elsewhere (e.g. home directory) make Turbopack pick the wrong root,
  // which breaks resolving packages like `tailwindcss` from CSS `@import`.
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.automateshow.com',
        pathname: '/userAssets/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
