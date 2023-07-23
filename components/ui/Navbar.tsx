import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0px 20px',
				backgroundColor: theme?.colors.black.value,
			}}
		>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
				alt='squirtle'
				width={90}
				height={90}
			/>

			<Text
				color='white'
				h2
			>
				P
			</Text>
			<Text
				color='white'
				h3
			>
				okemon
			</Text>

			<Spacer
				css={{
					flex: 1,
				}}
			/>

			<Text
				color='white'
				h3
			>
				Favorites
			</Text>
		</div>
	);
};
