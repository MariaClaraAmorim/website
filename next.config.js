/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
  
    images: {
      domains: ["images.unsplash.com",  "avatars0.githubusercontent.com", "s3.us-west-2.amazonaws.com", "www.google.com", "blog.accurate.com.br"],
    },
  };
  
  module.exports = nextConfig;