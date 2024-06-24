/** @type {import('next').NextConfig} */
const nextConfig = {
    //these lines may solve the image deployment error
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Resume/' : '',
    basePath: '/Resume',
    assetPrefix: '/Resume/',
    trailingSlash: true,    
    //
};

export default nextConfig;
