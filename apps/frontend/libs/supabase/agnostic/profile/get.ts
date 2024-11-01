import type { SupabaseClient } from "@supabase/supabase-js";

export default async (supabase: SupabaseClient) => {
	const supabaseUser = await supabase.auth.getUser();
	const supabaseSession = await supabase.auth.getSession();

	const user = supabaseUser.data.user;
	const session = supabaseSession.data.session;

	return { user, session };
};
