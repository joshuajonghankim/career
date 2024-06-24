/** @type {import('next').NextConfig} */
const nextConfig = {
    //these lines may solve the image deployment error
    basePath: '/Resume',
    assetPrefix: '/Resume/',
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Resume/' : '',
    //
};

export default nextConfig;
