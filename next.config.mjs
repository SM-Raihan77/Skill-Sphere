/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 's.udemycdn.com'
      },
      {
        hostname: 'i.postimg.cc'
      }
    ]
  }
};

export default nextConfig;