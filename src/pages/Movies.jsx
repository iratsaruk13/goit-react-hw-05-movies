import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../api/api";
import { toast } from "react-toastify";
import MoviesList from "../components/MoviesList/MoviesList";
import Search from "../components/Search/Search";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("movie") ?? "";
    if (!searchQuery) return;

    async function getSearchMovie(searchQuery) {
      try {
        const { results } = await fetchSearchMovies(searchQuery);
        console.log(results);

        if (results.length === 0) {
          toast.error("There are no movies matching your query 😿");
          setMovie([]);
        } else {
          setMovie(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovie([]);
      }
    }
    getSearchMovie(searchQuery);
  }, [searchParams]);

  const onMovieNameChange = (searchQuery) => {
    setSearchParams({ movie: searchQuery });
  };

  return (
    <>
      <Search onSubmit={onMovieNameChange}></Search>
      <MoviesList movies={movie} />
    </>
  );
};

export default Movies;
