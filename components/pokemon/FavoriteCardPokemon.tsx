import { FC } from 'react';
import { useRouter } from 'next/router';

import { Grid, Card } from '@nextui-org/react';

interface Props {
	pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid xs={12} sm={4} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
			<Card isHoverable isPressable css={{ padding: 5, background: '#b583e7' }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width={'100%'}
					height={140}
				/>
			</Card>
		</Grid>
	);
};
