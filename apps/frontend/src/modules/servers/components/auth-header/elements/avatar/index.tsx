import { css } from "pandacss/css";
import { Box } from "pandacss/jsx";
import { Img } from "#components/ui";

interface AvatarProps {
	src: string;
	name: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
	const { src, name } = props;
	return (
		<Box
			width="5rem"
			height="5rem"
			rounded="full"
			grow={0}
			shrink={0}
			position="relative"
			overflow="hidden"
		>
			<Box
				width="full"
				height="full"
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				inset={0}
				bgColor="gray.800"
				animation="pulse"
			/>
			<Box
				width="full"
				height="full"
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				inset={0}
			>
				<Img
					src={src}
					alt={`This image may represent a ${name}'s avatar`}
					width={80}
					height={80}
					className={css({ width: "full", height: "full" })}
				/>
			</Box>
		</Box>
	);
};

export default Avatar;
