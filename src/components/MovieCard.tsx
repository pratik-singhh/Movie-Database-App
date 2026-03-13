import type { Movie } from "../types/movie"
import { Link } from "react-router-dom";
type Props = {
  movie: Movie
}
function MovieCard(props: Props) {
  const posterUrl: string = "https://image.tmdb.org/t/p/w300" + props.movie.poster_path;

  return (
    <>
      <Link to={`/movie/${props.movie.id}`}>

        <div className="border-2  p-4 hover:shadow-xl shadow-gray-400 rounded-xl hover:scale-105 transform-gpu transform ease-out transition duration-300">
          <img src={posterUrl} alt="" />
          <h1 className="mb-4">{props.movie.title}</h1>
          <h1>{props.movie.vote_average.toFixed(1)}</h1>
          <h1>{props.movie.release_date}</h1>

        </div>
      </Link>

    </>
  )
}

export default MovieCard
