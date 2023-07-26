import { Layout } from '@/components/layouts';
import { EmptyFavorites } from '@/components/ui';

const FavoritesPage = () => {
	return (
		<Layout title='Favorites Pokemons | NextJs App'>
			<EmptyFavorites />
		</Layout>
	);
};

export default FavoritesPage;
