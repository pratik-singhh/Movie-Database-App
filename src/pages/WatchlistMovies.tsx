import type { Movie } from "../types/movie"
import MovieCard from "../components/MovieCard"

type Props = {

  watchlist: Movie[]
  toggleWatchlist: (movie: Movie) => void

}

function WatchlistMovies(props: Props) {



  if (props.watchlist.length === 0) {
    return (<h1 className="text-2xl text-rose-500">No Movies In Your Watchlist</h1>);
  }
  return (
    <div>
      <h1 className="text-2xl flex justify-center">Your Watchlist</h1>
      <div className="grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-2 gap-8 grid">
        {props.watchlist.map((element) =>
          (<MovieCard key={element.id} movie={element} saved={true} toggleSaved={props.toggleWatchlist} />)
        )}




      </div>
    </div>
  )
}

export default WatchlistMovies
