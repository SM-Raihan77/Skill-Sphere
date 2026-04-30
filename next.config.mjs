/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 's.udemycdn.com'
      }
    ]
  }
};

export default nextConfig;