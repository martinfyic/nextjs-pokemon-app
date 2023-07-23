import { GetStaticProps, NextPage } from 'next';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { PokemonList } from '@/components/pokemon';

interface Props {
	pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<>
			<Layout title='Pokemon list | NextJs App'>
				<PokemonList pokemons={pokemons} />
			</Layout>
		</>
	);
};
export const getStaticProps: GetStaticProps = async context => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	// URL svg pokemon
	// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{pokemonId}.svg

	const pokemons: Pokemon[] = data.results.map((poke, id) => ({
		...poke,
		id: id + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			id + 1
		}.svg`,
	}));

	return {
		props: { pokemons },
	};
};

export default HomePage;
