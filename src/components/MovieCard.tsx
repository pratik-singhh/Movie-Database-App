import type { Movie } from "../types/movie"
type Props = {
  movie: Movie
}
function MovieCard(props: Props) {
  const posterUrl: string = "https://image.tmdb.org/t/p/w300" + props.movie.poster_path;

  return (
    <>

      <div className="border-2 p-4">
        <img src={posterUrl} alt="" />
        <h1>{props.movie.title}</h1>
        <h1>{props.movie.vote_average.toFixed(1)}</h1>
        <h1>{props.movie.release_date}</h1>

      </div>

    </>
  )
}

export default MovieCard
