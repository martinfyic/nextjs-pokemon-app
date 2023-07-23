import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse } from '@/interfaces';

const HomePage: NextPage = props => {
	console.log(props);
	return (
		<>
			<Layout title='Pokemon list | NextJs App'>
				<ul>
					<li></li>
				</ul>
			</Layout>
		</>
	);
};
export const getStaticProps: GetStaticProps = async context => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	return {
		props: { pokemons: data.results },
	};
};

export default HomePage;
