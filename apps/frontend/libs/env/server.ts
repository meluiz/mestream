import { z } from "zod";

import { vercel } from "@t3-oss/env-core/presets";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
	isServer: typeof window === "undefined",
	extends: [vercel()],
	server: {
		SESSION_SECRET: z.string(),
		BOT_TOKEN: z.string(),
		BOT_USER_ID: z.string(),
		APP_URL: z
			.string()
			.transform((url) => new URL(url).origin)
			.pipe(z.string().url()),
	},
	runtimeEnv: {
		APP_URL: process.env.APP_URL,
		BOT_TOKEN: process.env.BOT_TOKEN,
		BOT_USER_ID: process.env.BOT_USER_ID,
		SESSION_SECRET: process.env.SESSION_SECRET,
	},
});
