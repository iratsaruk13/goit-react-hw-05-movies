import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "e9acf87159af330adc40d01b23a69585";

const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

const fetchSearchMovies = async (searchQuery) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

const fetchMovieDetails = async (movieID) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

const fetchMovieCredits = async (movieID) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

const fetchMovieReviews = async (movieID) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieID}/reviews?lapi_key=${API_KEY}$language=en-US&page=1`
  );
  return data;
};

export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
