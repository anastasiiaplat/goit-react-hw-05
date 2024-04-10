import { Link, useLocation } from "react-router-dom";


const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                state={location}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no data</p>
      )}
    </>
  );
};

export default MovieList;