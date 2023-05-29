import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const {title, overview, vote_average, genres, poster_path} = movie;
    const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'

    const scope = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'No rate';

  return (
    <div>
      <img src={poster} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User Score: {scope}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && genres.length > 0 && (
          genres.map(genre => genre.name).join(', ')
        )}
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MovieCard