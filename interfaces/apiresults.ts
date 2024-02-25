export interface ResultItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface TrendingResult {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}
