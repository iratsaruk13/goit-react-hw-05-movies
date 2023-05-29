import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/api";
import { ReviewsSubtitle, ReviewsWrapper } from "./Reviews.styled";

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getMovieReview(id) {
      try {
        const { results } = await fetchMovieReviews(id);
        setReview(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieReview(id);
  }, [id]);

  return (
    <ReviewsWrapper>
      {review.length ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsSubtitle>Author: {author}</ReviewsSubtitle>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no review information abour this movie...😿</p>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
