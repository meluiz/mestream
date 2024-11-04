import { HStack, YStack } from "pandacss/jsx";
import { Anchor, Heading, Text } from "#components/ui";

import { profile } from "library/supabase/agnostic";
import { getSupabaseClient } from "library/supabase/server";
import Avatar from "./elements/avatar";

export const AuthHeader = async () => {
	const supabase = await getSupabaseClient();
	const { user } = await profile.get(supabase);

	return (
		<HStack align="center" gap={4}>
			<Avatar
				name={user?.user_metadata.full_name}
				src={user?.user_metadata.avatar_url}
			/>
			<YStack flex={1} align="start">
				<Heading size="2xl">{user?.user_metadata.full_name}'s servers</Heading>
				<YStack gap={0}>
					<Text color="gray.400">
						Choose a server to manage from the list below.
					</Text>
					<Text color="gray.400">
						Don't see the server you want?{" "}
						<Anchor
							href="/"
							color="indigo.400"
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "underline" }}
						>
							Invite Mestream
						</Anchor>{" "}
						to add it here.
					</Text>
				</YStack>
			</YStack>
		</HStack>
	);
};
