import { useSelector } from "react-redux";
import { LOADING } from "app/types";
import Spinner from "components/Spinner";
import Rating from "components/Rating";

const MovieDetails = () => {
  const detailsMovie = useSelector((state) => state.movies.detailMovie);
  const movieStatus = useSelector((state) => state.movies.status);

  return (
    <div className="container">
      {movieStatus === LOADING && (
        <div style={{ textAlign: "center", paddingTop: "2rem" }}>
          <Spinner />
        </div>
      )}
      {movieStatus !== LOADING && detailsMovie && (
        <div className="details">
          <div className="image">
            <img src={detailsMovie?.Poster} alt={detailsMovie?.Title} />
          </div>
          <div className="details-text">
            <h4 className="title">{detailsMovie?.Title}</h4>
            <p className="plot">{detailsMovie?.Plot}</p>
            <Rating ratingNo={detailsMovie?.imdbRating} />
            <div className="type">
              <p className="type-label">Type</p>
              <p className="type-value">{detailsMovie?.Type}</p>
            </div>
            <div className="released">
              <p className="released-label">Released Date</p>
              <p className="released-value">{detailsMovie?.Released}</p>
            </div>
            <div className="runtime">
              <p className="runtime-label">Runtime Date</p>
              <p className="runtime-value">{detailsMovie?.Runtime}</p>
            </div>
            <div className="genres">
              <p className="genres-label">Genres</p>
              <p className="genres-value">{detailsMovie?.Genre}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
