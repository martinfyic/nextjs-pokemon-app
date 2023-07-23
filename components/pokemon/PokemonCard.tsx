import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Pokemon } from '@/interfaces';

interface Props {
	pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
	return (
		<Grid
			key={id}
			xs={6}
			sm={3}
			md={2}
			xl={1}
		>
			<Card
				isHoverable
				isPressable
				variant='bordered'
			>
				<Card.Body
					css={{
						p: 1,
					}}
				>
					<Card.Image
						src={img}
						width='100%'
						height={140}
						alt={name}
						title={name}
					/>
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text>#{id}</Text>
						<Text transform='capitalize'>{name}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
