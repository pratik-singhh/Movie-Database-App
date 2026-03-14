import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchlistMovies from "./pages/WatchlistMovies";
import MovieDetails from "./pages/MovieDetails";
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={

              <Home />
            } />

          <Route path="/movie/:id"
            element={
              <MovieDetails />
            } />
          <Route path="/watchlist"
            element={
              <WatchlistMovies />
            } />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
