import { MediaType, TrendingResult } from '~/interfaces/apiresults';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWYzMWY0ODMxNzQxYmI2Mjg3YTg3YTYwZTY0MTA1NiIsInN1YiI6IjYzZjljN2ZjMzQ0YThlMDA3Y2I5ODlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pro4yJm9bzAbvl6e3iww9DZpkrXSixy4gwUpGh_mids`,
  },
};

export const getTrending = async (): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1`,
    options
  );
  const json = await response.json();
  return json;
};

export const getSerachResult = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US`,
    options
  );
  const data = await response.json();
  return data;
};

export const getMovieDetail = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}&language=en-US`,
    options
  );
  const data = await response.json();
  return data;
};
