import {
  AdditinalLink,
  MovieInfo,
  MovieSubtitle,
  MovieTitle,
  MovieWrapper,
  Wrapper,
} from "./MovieCard.styled";

const MovieCard = ({ movie }) => {
  const { title, overview, vote_average, genres, poster_path } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

  const scope = vote_average ? `${(vote_average * 10).toFixed(0)}%` : "No rate";

  return (
    <div>
      <Wrapper>
        <img src={poster} alt={title} width={400} />
        <MovieWrapper>
          <MovieTitle>{title}</MovieTitle>
          <MovieInfo>User Score: {scope}</MovieInfo>
          <MovieSubtitle>Overview</MovieSubtitle>
          <MovieInfo>{overview}</MovieInfo>
          <MovieSubtitle>Genres</MovieSubtitle>
          {genres &&
            genres.length > 0 &&
            genres.map((genre) => genre.name).join(", ")}
        </MovieWrapper>
      </Wrapper>
      <div>
        <ul>
          <MovieTitle>Additional information</MovieTitle>
          <li>
            <AdditinalLink to="cast">Cast</AdditinalLink>
          </li>
          <li>
            <AdditinalLink to="reviews">Reviews</AdditinalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
