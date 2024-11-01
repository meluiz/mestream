import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

import { env } from "library/env/client";

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createSupabaseMiddleware = async (request: NextRequest) => {
	let response = NextResponse.next({ request });

	const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
		cookies: {
			getAll() {
				return request.cookies.getAll();
			},
			setAll(cookies) {
				for (const { name, value, options } of cookies) {
					request.cookies.set(name, value);
				}

				response = NextResponse.next({ request });

				for (const { name, value, options } of cookies) {
					response.cookies.set(name, value);
				}
			},
		},
	});

	const { data } = await supabase.auth.getUser();

	if (!data.user) {
		const url = request.nextUrl.clone();

		url.pathname = "/session";

		return NextResponse.redirect(url);
	}

	return response;
};
