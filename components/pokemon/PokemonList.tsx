import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { Pokemon } from '@/interfaces';
import { PokemonCard } from './';

interface Props {
	pokemons: Pokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container
			gap={2}
			justify='flex-start'
		>
			{pokemons.map(pokemon => (
				<PokemonCard
					key={pokemon.id}
					pokemon={pokemon}
				/>
			))}
		</Grid.Container>
	);
};
