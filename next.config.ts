import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        pathname: "u/61006057?v=4",
      },
      {
        hostname: "static.nationalgeographic.de",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    dynamicIO: true,
    ppr: true,
    authInterrupts: true,
  },
}
export default nextConfig
