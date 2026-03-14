import { useState, useEffect } from "react"
import type { Movie } from "../types/movie";
import { Link } from "react-router-dom";
import { getTrendingMovies, searchMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";


type Props = {

  watchlist: Movie[]
  toggleWatchlist: (movie: Movie) => void

}

function Home(props: Props) {
  const { watchlist, toggleWatchlist } = props;
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {

    async function fetchMovies() {

      if (searchTerm === "") {
        setLoading(true);

        const movieResultInfo = await getTrendingMovies();
        setMovies(movieResultInfo);
        setLoading(false);
      }
      else {
        setLoading(true);
        const movieResultInfo = await searchMovies(searchTerm);
        setMovies(movieResultInfo);
        setLoading(false);
      }
    }
    const debouncer = setTimeout(() => {
      fetchMovies();
    }, 500)

    return () => {
      clearTimeout(debouncer);
    }
  }, [searchTerm])





  return (
    <>
      <Link to="/watchlist"
        className="text-blue-400 hover:underline mt-5 flex justify-end mr-4 cursor-pointer text-2xl">
        Watchlist({watchlist.length})
      </Link>
      <div className="items-center flex flex-col p-4">

        <input value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(e.target.value); }} type="text" className="border-2 rounded-sm w-full text-center p-4 max-w-md m-3" placeholder="🔍Search Movies" />
        <h1 className="text-2xl">Trending Movies |  watchlist ({watchlist.length})</h1>
      </div>
      {(loading === true) &&
        <div className="justify-center items-center flex">

          <div className="w-10 h-10 rounded-full border-2 border-l-transparent flex items-center  animate-spin"></div>
        </div>
      }

      {(movies.length === 0 && loading === false) &&
        <h1 className="text-2xl text-emerald-500">No Movies Found</h1>
      }
      {(loading === false && movies.length > 0) &&

        <div className="grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-2 gap-8 grid">


          {movies.map((element) =>
            <MovieCard key={element.id} movie={element} saved={watchlist.some((m) => (m.id === (element.id)))} toggleSaved={toggleWatchlist} />
          )}

        </div>
      }
    </>
  )
}

export default Home
