/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build plain HTML/CSS/JS into out/, served as static assets by Cloudflare Workers
  output: "export",
  // No image optimization server on a static host: serve images as they are
  images: { unoptimized: true },
}

module.exports = nextConfig
