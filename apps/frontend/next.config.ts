import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	crossOrigin: "anonymous",
	images: {
		remotePatterns: [{ hostname: "cdn.discordapp.com" }],
	},
	experimental: {
		reactCompiler: true,
		staleTimes: {
			static: 60,
			dynamic: 60,
		},
		turbo: {
			resolveExtensions: [
				".mdx",
				".tsx",
				".ts",
				".jsx",
				".js",
				".mjs",
				".json",
			],
		},
	},
};

export default nextConfig;
