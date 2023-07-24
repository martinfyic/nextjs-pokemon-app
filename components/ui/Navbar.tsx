import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0px 30px',
				backgroundColor: theme?.colors.black.value,
			}}
		>
			<NextLink
				legacyBehavior
				href='/'
				passHref
			>
				<Link>
					<Image
						src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
						alt='squirtle'
						width={90}
						height={90}
					/>

					<Text
						color='white'
						h2
					>
						P
					</Text>
					<Text
						color='white'
						h3
					>
						okemon
					</Text>
				</Link>
			</NextLink>

			<Spacer
				css={{
					flex: 1,
				}}
			/>

			<NextLink
				legacyBehavior
				href='/favorites'
				passHref
			>
				<Link>
					<Text
						color='white'
						h3
					>
						Favorites
					</Text>
				</Link>
			</NextLink>
		</div>
	);
};
