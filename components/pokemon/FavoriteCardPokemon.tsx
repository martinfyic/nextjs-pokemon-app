import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
	idPokemon: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ idPokemon }) => {
	const router = useRouter();

	const onPress = () => {
		router.push(`/pokemon/${idPokemon}`);
	};

	return (
		<Grid
			xs={6}
			sm={3}
			md={2}
			xl={1}
		>
			<Card
				isHoverable
				isPressable
				variant='bordered'
				css={{ padding: 10 }}
				onPress={onPress}
			>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
					width={'100%'}
					heigth={140}
				/>
			</Card>
		</Grid>
	);
};
