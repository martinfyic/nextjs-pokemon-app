import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
	children: ReactNode;
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'NextJs PokeApp'}</title>
				<meta
					name='author'
					content='Martin Ferreira Yic'
				/>
				<meta
					name='description'
					content={`Information about the pokemon ${title}`}
				/>
				<meta
					name='keywords'
					content={`${title}, pokemon, pokedex`}
				/>
				<meta
					property='og:title'
					content={`Information about the pokemon ${title}`}
				/>
				<meta
					property='og:description'
					content={`This is the web page about the information of the pokemon ${title}`}
				/>
				<meta
					property='og:image'
					content={`${origin}/banner.png`}
				/>
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};
