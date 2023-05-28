import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../api/api";
import { toast } from "react-toastify";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query") ?? "";
    if (!searchQuery) return;

    async function getSearchMovie() {
      try {
        const { response } = await fetchSearchMovies(searchQuery);

        if (response.length === 0) {
          toast.error("There are no movies matching your query 😿");
          setMovie([]);
        } else {
          setMovie(response);
        }
      } catch (error) {
        toast.error(error.message);
        setMovie([]);
      }
    }
    getSearchMovie();
  }, [searchParams]);

  const onSubmit = searchQuery => {
    setSearchParams({searchQuery})
  }

  return (
    <>
      <div>Movies</div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Movies;
