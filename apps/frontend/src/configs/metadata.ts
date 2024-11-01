import type { Metadata } from "next";

import { env } from "server";

const META_TITLE = "mestream";
const META_DESCRIPTION =
	"Twitch notifications in your Discord server with just a few clicks.";

export default {
	title: {
		default: META_TITLE,
		template: `%s | ${META_TITLE}`,
	},
	description: META_DESCRIPTION,
	applicationName: META_TITLE,
	generator: "Next.js",
	creator: "mestream",
	category: "personal",
	appleWebApp: true,
	authors: ["Luiz Felipe"],
	metadataBase: new URL(env.APP_URL),
	keywords: ["mestream", "nextjs", "twitch"],

	openGraph: {
		locale: "en_US",
		type: "website",
		url: env.APP_URL,
		title: META_TITLE,
		siteName: META_TITLE,
		description: META_DESCRIPTION,
	},
	twitter: {
		title: META_TITLE,
		description: META_DESCRIPTION,
		card: "summary_large_image",
		site: env.APP_URL,
		creator: "@mestream",
	},
} as Metadata;
