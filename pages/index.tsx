import { Button } from '@nextui-org/react';
import Head from 'next/head';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Pokemon App</title>
			</Head>
			<h1>Hola Mundo</h1>
			<Button color='gradient'>Pokemon</Button>
		</>
	);
};

export default HomePage;
