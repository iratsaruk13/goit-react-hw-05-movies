import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <section>
      <h1>Trending movies today</h1>
      {/* <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
};

export default MoviesList;
