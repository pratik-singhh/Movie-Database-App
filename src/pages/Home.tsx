import { useState, useEffect } from "react"
import type { Movie } from "../types/movie";
import { getTrendingMovies, searchMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {

    async function fetchMovies() {

      if (searchTerm === "") {

        const movieResultInfo = await getTrendingMovies();
        setMovies(movieResultInfo);
      }
      else {
        const movieResultInfo = await searchMovies(searchTerm);
        setMovies(movieResultInfo);
      }
    }
    fetchMovies();

  }, [searchTerm])

  return (
    <>

      <input value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(e.target.value); }} type="text" className="border-2 rounded-sm text-center m-3" placeholder="Search Movies" />
      <h1 className="text-2xl">Trending Movies</h1>
      <div className="grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-2 gap-8 grid">


        {movies.map((element) =>
          <MovieCard key={element.id} movie={element} />
        )}

      </div>
    </>
  )
}

export default Home
