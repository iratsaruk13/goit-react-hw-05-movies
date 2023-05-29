import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCredits } from '../../api/api';

const Cast = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast(id) {
      try {
        const {cast} = await fetchMovieCredits(id);
        setCast(cast)
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieCast(id)
  }, [id])
  
  return (
    (
      <div>
        {cast.length ? (
          <ul>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={`${name}`}
                    width="150"
                  ></img>
                ) : (
                  <img
                    src={
                      '/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'
                    }
                    alt="Not found"
                    width="150"
                  ></img>
                )}
                <h3>{name}</h3>
                {character ? (
                  <p>Character: {character}</p>
                ) : (
                  <p>Character: Unknown</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no cast information abour this movie...😿</p>
        )}
      </div>
    )
  )
}

export default Cast