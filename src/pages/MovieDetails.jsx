import { useState, useEffect, useRef, Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/api";
import { toast } from "react-toastify";
import MovieCard from "../components/MovieCard/MovieCard";
import Loader from "../components/Loader/Loader";
import { ButtonGoBack } from "./MovieDetails.styled";
import { FaBackward } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovieDetails(id) {
      try {
        const movieDetail = await fetchMovieDetails(id);
        setMovie(movieDetail);
        console.log(movieDetail);
      } catch (error) {
        toast.error(error);
      }
    }
    getMovieDetails(id);
  }, [id]);
  const backLink = useRef(location.state?.from ?? "/");

  return (
    <div>
      <Link to={backLink.current}>
        <ButtonGoBack type="button">
          <FaBackward />
          Go back
        </ButtonGoBack>
      </Link>
      <MovieCard movie={movie} />

      <Suspense fallback={<Loader />}>
        {" "}
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
