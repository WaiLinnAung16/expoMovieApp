import { ImageBackground, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Container, Main, Subtitle, Title } from '~/tamagui.config';
import { Link } from 'expo-router';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';
import { useQuery } from '@tanstack/react-query';
import { getSerachResult, getTrending } from '~/services/api';
import MovieCard from '~/components/MovieCard';

const Page = () => {
  const [searchString, setSearchString] = useState('');
  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });
  const searchQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });
  return (
    <Main>
      <ImageBackground
        style={{ width: '100%', height: 200 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}>
        <Container>
          <YStack>
            <Title
              color={'white'}
              marginBottom={'$3'}
              enterStyle={{ opacity: 0, scale: 2, y: -10 }}
              animation={'bouncy'}>
              Trending
            </Title>
            <Input
              placeholder="Search movie, Tv Show, person..."
              placeholderTextColor={'#fff'}
              value={searchString}
              onChangeText={(text) => setSearchString(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>
      <Subtitle p={'$3'} enterStyle={{ opacity: 0 }} animation={'lazy'}>
        Trending
      </Subtitle>
      {(trendingQuery.isLoading || searchQuery.isLoading) && (
        <Spinner size="large" color={'$blue10'} />
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {trendingQuery.data?.results?.map((item) => <MovieCard key={item.id} movie={item} />)}
      </ScrollView>
    </Main>
  );
};

export default Page;
