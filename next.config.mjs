/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export -> ./out (drag-and-drop deployable to Netlify).
  output: "export",
  // Required for `output: export`; the site uses plain <img>, so this is a no-op
  // but keeps the export from erroring if next/image is ever added.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
