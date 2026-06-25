import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      { source: "/rss.xml", destination: "/feed/rss.xml" },
      { source: "/atom.xml", destination: "/feed/atom.xml" },
      { source: "/feed.json", destination: "/feed/feed.json" },
      { source: "/rss", destination: "/feed/rss.xml" },
      { source: "/feed", destination: "/feed/rss.xml" },
      { source: "/atom", destination: "/feed/atom.xml" },
      { source: "/json", destination: "/feed/feed.json" },
    ];
  },
};

export default withMDX(nextConfig);