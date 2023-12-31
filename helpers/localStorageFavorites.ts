const toggleFavorites = (id: number) => {
	let favorites: number[] = JSON.parse(
		localStorage.getItem('favoritePokemons') || '[]'
	);

	if (favorites.includes(id)) {
		favorites = favorites.filter(pokeId => pokeId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favoritePokemons', JSON.stringify(favorites));
};

const pokemonExistInFavorites = (id: number): boolean => {
	const favorites: number[] = JSON.parse(
		localStorage.getItem('favoritePokemons') || '[]'
	);

	return favorites.includes(id);
};

const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
};

const localStorageFavorites = {
	toggleFavorites,
	pokemonExistInFavorites,
	pokemons,
};

export default localStorageFavorites;
