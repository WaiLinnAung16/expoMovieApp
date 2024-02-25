import React from 'react';
import { ResultItem } from '~/interfaces/apiresults';
import { Link } from 'expo-router';
import { Card, Image, Paragraph, Text } from 'tamagui';

type MovieProps = {
  movie: ResultItem;
};

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <Link href={`/(drawer)/home/movie/${movie.id}`} asChild>
      <Card
        elevation={2}
        width={170}
        height={260}
        scale={0.9}
        overflow="hidden"
        hoverStyle={{ scale: 0.975 }}
        pressStyle={{ scale: 0.975 }}
        animation={'bouncy'}>
        <Card.Header p={0}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
            style={{ width: '100%', height: 200 }}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <Text fontSize={16} color={'lightblue'}>
            {movie.name || movie.title}
          </Text>
          <Paragraph>
            {new Date(movie.first_air_date! || movie.release_date!).getFullYear()}
          </Paragraph>
        </Card.Footer>
        {/* any other components */}
        <Card.Background />
      </Card>
    </Link>
  );
};

export default MovieCard;
