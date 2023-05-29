import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../api/api";
import Loader from "../components/Loader/Loader";
import MoviesList from "../components/MoviesList/MoviesList";
import MainTitle from "./Home.styled";

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setError(false);
        setLoading(true);
        const { results } = await fetchTrendingMovies();
        // console.log(results);
        setTrendingMovie(results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Oops, something went wrong...😿</p>
      ) : (
        <>
          <MainTitle>Trending movies today</MainTitle>
          <MoviesList movies={trendingMovie} />
        </>
      )}
    </div>
  );
};

export default Home;
