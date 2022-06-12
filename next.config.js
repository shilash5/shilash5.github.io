/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const isProd = process.env.NODE_ENV === 'production'


module.exports = {
    exportPathMap: async function (defaultPathMap) {
        // 🚩the only difference is here, we spread the default pathMap
        const pathMap = { ...defaultPathMap };

        for (const [path, config] of Object.entries(defaultPathMap)) {
            if (path === '/') {
                pathMap[path] = config;
            } else {
                pathMap[`${path}/index`] = config;
            }
        }

        return pathMap;
    },
    images: {
        loader: 'imgix',
        path: '/',
    },
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: isProd
        ? 'https://cdn.statically.io/gh/takiuddinahmed/takiuddinahmed.github.io/gh-pages/'
        : '',
};
