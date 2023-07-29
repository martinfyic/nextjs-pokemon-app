import { pokeApi } from '@/api';
import { PokemonTotalInfo } from '@/interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
	try {
		const { data } = await pokeApi.get<PokemonTotalInfo>(
			`/pokemon/${nameOrId}`
		);

		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		};
	} catch (error) {
		return null;
	}
};
