import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { PokemonTotalInfo } from '@/interfaces';

interface Props {
	pokemon: PokemonTotalInfo;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	return (
		<Layout title='Pokemon page | NextJs App'>
			<h1>{pokemon.name}</h1>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async ctx => {
	const TOTAL_POKEMONS_PARAMS = 151;
	const numOfPokemons = [];

	for (let index = 1; index <= TOTAL_POKEMONS_PARAMS; index++) {
		numOfPokemons.push(`${index}`);
	}

	return {
		paths: numOfPokemons.map(id => ({
			params: { id },
		})),

		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<PokemonTotalInfo>(`/pokemon/${id}`);

	return {
		props: { pokemon: data },
	};
};

export default PokemonPage;
