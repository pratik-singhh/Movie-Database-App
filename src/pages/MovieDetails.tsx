import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { useState, useEffect } from "react";
function MovieDetails() {
  let params = useParams();
  const movieId = params.id;
  const [movie, setMovie] = useState<Movie | null>(null);
  const APIkey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {

    async function findMovie() {

      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIkey}`;

      const response = await fetch(url);
      const movieDetails = await response.json();


      setMovie(movieDetails);

    }
    findMovie();
  }, [movieId])

  if (movie === null) {
    return (
      <div>
        <h1 className="text-2xl text-rose-500">Loading</h1>

      </div>
    );
  }

  const posterUrl: string = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <>
      <div className="max-w-4xl mx-auto ">
        <Link to="/">
          <h1 className="cursor-pointer hover:underline mb-10 m-4">⬅Back To Movies</h1>
        </Link>

        <div className="flex gap-16">

          <img className="mx-4 max-w-60" src={posterUrl} alt="" />
          <div className="border-2 p-2 rounded-lg text-left mx-auto">

            <h1 className="mb-4 text-2xl ">{movie.title}</h1>
            <p className="mb-4 text-xl">{movie.vote_average.toFixed(1)}</p>
            <p className="mb-4 text-xl">{movie.release_date}</p>
            <p className="mb-4 text-xl max-w-sm">{movie.overview}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default MovieDetails
