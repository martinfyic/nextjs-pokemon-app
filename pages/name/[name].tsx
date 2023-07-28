import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { PokemonListResponse, PokemonTotalInfo } from '@/interfaces';
import { getPokemonInfo, localStorageFavorites } from '@/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	pokemon: PokemonTotalInfo;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(false);

	useEffect(() => {
		setIsInFavorites(localStorageFavorites.pokemonExistInFavorites(pokemon.id));
	}, [pokemon.id]);

	const pokemonNameCap =
		pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

	const onToggleFavorite = () => {
		localStorageFavorites.toggleFavorites(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (!isInFavorites) {
			toast.success('Added!', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		} else {
			toast.error('Deleted!', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	};
	return (
		<Layout title={`Pokemon ${pokemonNameCap} | NextJs App`}>
			<ToastContainer />
			<Grid.Container
				css={{ marginTop: '5px' }}
				gap={2}
			>
				<Grid
					xs={12}
					sm={4}
				>
					<Card
						isHoverable
						variant='bordered'
						css={{ padding: '30px' }}
					>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'/no-image.png'
								}
								alt={pokemon.name}
								title={pokemon.name}
								width='100%'
								height={250}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid
					xs={12}
					sm={8}
				>
					<Card css={{ background: 'Black' }}>
						<Card.Header
							css={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Text
								h1
								transform='capitalize'
							>
								{pokemon.name}
							</Text>
							<Button
								color='gradient'
								ghost={!isInFavorites}
								onPress={onToggleFavorite}
							>
								{isInFavorites ? 'In favorites' : 'Add to favorite'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text h3>Sprites:</Text>
							<Container
								direction='row'
								display='flex'
							>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>(
		'https://pokeapi.co/api/v2/pokemon?limit=151'
	);
	const pokemonNames: string[] = data.results.map(poke => poke.name);

	return {
		paths: pokemonNames.map(name => ({
			params: { name },
		})),

		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const pokemon = await getPokemonInfo(name);

	return {
		props: { pokemon },
	};
};

export default PokemonByNamePage;
