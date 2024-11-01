import { createSupabaseMiddleware } from "library/supabase/middleware";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
	return await createSupabaseMiddleware(request);
};

export const config = {
	matcher: ["/servers/:path*", "/me/:path*"],
};
