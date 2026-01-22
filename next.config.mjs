import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true, // Para melhor compatibilidade com SSG
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [import('remark-gfm')],
    rehypePlugins: [],
  },
})


export default withMDX(nextConfig)
