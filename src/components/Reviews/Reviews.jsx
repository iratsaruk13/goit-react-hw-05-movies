import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieReviews } from '../../api/api';

const Reviews = () => {
  const {id} = useParams();
const [review, setReview] = useState([])

useEffect(() => {
  async function getMovieReview (id) {
    try {
      const {results} = await fetchMovieReviews(id);
      setReview(results)
    } catch (error) {
      console.log(error.message);
    }
  }
  getMovieReview(id)
}, [id])

  return (
    <div>
      {review.length ? (
        <ul>
          {review.map(({ id, author, content  }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no review information abour this movie...😿</p>
      )}
     
    </div>
  )
}

export default Reviews