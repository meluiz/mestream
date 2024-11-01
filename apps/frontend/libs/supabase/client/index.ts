import { createBrowserClient } from "@supabase/ssr";

import { env } from "library/env/client";

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const useSupabaseClient = () => {
	return createBrowserClient(supabaseUrl, supabaseAnonKey);
};
