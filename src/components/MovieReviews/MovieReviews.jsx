import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../services/getDate";
import { getImg } from "../../services/getImg";
import { apiMovieReviews } from "../../services/apiMovies";


import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await apiMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading &&
          !isError &&
          (movieReviews.length ? (
            <ul>
              {movieReviews.map((review) => (
                <li key={review.id}>
                  <div >
                    <img
                      src={getImg(review.author_details.avatar_path)}
                      width="120"
                      alt={review.author}
                    />
                    <h3>{review.author}</h3>
                    <p>{formatDate(review.created_at)}</p>
                  </div>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              There are no reviews for this movie.
            </p>
          ))}
      </div>
    </div>
  );
};

export default MovieReviews;