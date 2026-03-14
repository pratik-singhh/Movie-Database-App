import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"
import type { Movie } from "./types/movie";
import WatchlistMovies from "./pages/WatchlistMovies";
import MovieDetails from "./pages/MovieDetails";
import Home from './pages/Home';
import './App.css'

function App() {



  const [watchlist, setWatchList] = useState<Movie[]>(() => {
    let badData = localStorage.getItem("watchlist");
    if (badData !== null) {
      let goodData = JSON.parse(badData);
      return goodData;
    }
    else {
      return [];
    }
  });

  function toggleWatchlist(movie: Movie) {
    if (watchlist.some((m) => m.id === movie.id)) {

      setWatchList((WL) => WL.filter((m) => m.id !== movie.id));
    }
    else {
      if (movie !== undefined) {
        setWatchList(oldList => [...oldList, movie]);
      }
    }
  }



  useEffect(() => {
    const stringedWL = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", stringedWL);

  }, [watchlist])





  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={

              <Home watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
            } />

          <Route path="/movie/:id"
            element={
              <MovieDetails watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
            } />
          <Route path="/watchlist"
            element={
              <WatchlistMovies watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
            } />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
