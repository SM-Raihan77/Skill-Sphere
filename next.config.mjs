/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // next.config.js
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
}
  // images: {
  //   remotePatterns: [
  //     {
  //       hostname: 's.udemycdn.com'
  //     },
  //     {
  //       hostname: 'i.ibb.co.com'
  //     },
  //   ] 
  // }
};

export default nextConfig;