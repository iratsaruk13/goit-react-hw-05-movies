import React from "react";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const path = location.pathname.includes("/movies") ? "" : "movies/";

  return (
    <section>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`${path}${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesList;
