import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { EmptyFavorites } from '@/components/ui';
import { localStorageFavorites } from '@/helpers';
import { FavoritesPokemons } from '@/components/pokemon';

const FavoritesPage = () => {
	const [favritePokemons, setFavritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavritePokemons(localStorageFavorites.pokemons());
	}, []);

	return (
		<Layout title='Favorites Pokemons | NextJs PokeApp'>
			{favritePokemons.length === 0 ? (
				<EmptyFavorites />
			) : (
				<FavoritesPokemons pokemons={favritePokemons} />
			)}
		</Layout>
	);
};

export default FavoritesPage;
