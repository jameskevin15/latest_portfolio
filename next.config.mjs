/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // optional, only if you want to skip image optimization
  },
  assetPrefix: isProd && process.env.GITHUB_ACTIONS ? '/latest-portfolio' : '', // only for GitHub Pages
  basePath: isProd && process.env.GITHUB_ACTIONS ? '/latest-portfolio' : '',     // only for GitHub Pages

  // REMOVE this line: output: 'export', 
  // so Next.js builds a normal server-rendered app compatible with npm start and Vercel

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // SVG as URL
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // SVG as React component
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: { overrides: { removeViewBox: false } },
                },
              ],
            },
          },
        },
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
