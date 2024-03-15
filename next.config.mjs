/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'files.stripe.com',
      port: '',
      pathname: '/links/**'
    }]
  }
};

export default nextConfig;
