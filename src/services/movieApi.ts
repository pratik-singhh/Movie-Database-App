import type { Movie } from "../types/movie";

async function getTrendingMovies(): Promise<Movie[]> {
  const APIkey = import.meta.env.VITE_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`;

  const response = await fetch(url);
  const movieData = await response.json();
  return (movieData.results);


}

export default getTrendingMovies;
