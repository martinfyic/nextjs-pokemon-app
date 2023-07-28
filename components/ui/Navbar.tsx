import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

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
						src={`${origin}/pokeball.svg`}
						alt='pokeball'
						width={30}
						height={30}
					/>

					<Text
						color='white'
						h2
						css={{ marginLeft: '15px' }}
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
