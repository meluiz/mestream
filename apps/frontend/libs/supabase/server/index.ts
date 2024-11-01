import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { env } from "library/env/client";

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const getSupabaseClient = async () => {
	const store = await cookies();

	return createServerClient(supabaseUrl, supabaseAnonKey, {
		cookies: {
			getAll() {
				return store.getAll();
			},
			setAll(cookies) {
				try {
					for (const { name, value, options } of cookies) {
						store.set(name, value, options);
					}
				} catch {
					// The `setAll` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
		},
	});
};
