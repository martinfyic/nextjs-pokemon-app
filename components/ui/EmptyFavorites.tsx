import { Container, Image, Text } from '@nextui-org/react';

export const EmptyFavorites = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc( 100vh - 100px )',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'center',
			}}
		>
			<Text h1>Empty favorites page</Text>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg'
				width={300}
				height={300}
				css={{ opacity: 0.1 }}
				alt=''
			/>
		</Container>
	);
};
