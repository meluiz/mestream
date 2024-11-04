import { Container, YStack, styled } from "pandacss/jsx";

import { AuthHeader, Servers } from "#modules/servers";

const Page: Page.FC = async () => {
	return (
		<Container>
			<styled.main
				width="full"
				minHeight="min-content"
				display="block"
				position="relative"
				paddingY={24}
			>
				<YStack gap="4rem">
					<AuthHeader />
					<Servers />
				</YStack>
			</styled.main>
		</Container>
	);
};

export default Page;
