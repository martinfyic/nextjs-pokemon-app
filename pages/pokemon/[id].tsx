import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Layout } from '@/components/layouts';
import { PokemonTotalInfo } from '@/interfaces';
import { getPokemonInfo, localStorageFavorites } from '@/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	pokemon: PokemonTotalInfo;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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

	return {
		props: { pokemon: await getPokemonInfo(id) },
	};
};

export default PokemonPage;
