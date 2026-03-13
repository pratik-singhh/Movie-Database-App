import type { Movie } from "../types/movie";

export async function getTrendingMovies(): Promise<Movie[]> {
  const APIkey = import.meta.env.VITE_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`;

  const response = await fetch(url);
  const movieData = await response.json();
  return (movieData.results);


}
export async function searchMovies(query: string): Promise<Movie[]> {

  const APIkey = import.meta.env.VITE_TMDB_API_KEY;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${query}`;

  const response = await fetch(url);
  const movieData = await response.json();
  return (movieData.results);
}

