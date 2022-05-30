import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovies, getDetailMovie } from "app/movies/movieSlice";
import { LOADING } from "app/types";
import Card from "components/Card";
import Button from "components/Button";
import Input from "components/Input";
import Spinner from "components/Spinner";
import SearchIcon from "constants/icons/search";
import Pagination from "components/Pagination";
import "./styles.css";

const Movies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleChangeSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchKeyword, page));
  };

  const handleGetDetail = (id) => {
    dispatch(getDetailMovie(id));
  };

  console.log(movies);

  return (
    <div className="container">
      <div className="leading">
        <h1>Ningali</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          fugit, quisquam repellat corrupti cupiditate quasi illum tempore at
          voluptatem mollitia.
        </p>

        <div className="search">
          <Input
            type="text"
            placeholder="Search Movies"
            leftIcon={<SearchIcon />}
            handleChange={handleChangeSearch}
          />
          <div className="search-btn">
            <Button title="Search" handleClick={handleSearch} />
          </div>
        </div>
      </div>

      {/* Movie List */}
      <div className="movies-container">
        {movieStatus === LOADING && <Spinner />}
        {movies?.Error && (
          <div className="not-found">
            <h2>Sorry, No results found</h2>
            <p>There are no movies matching your search terms.</p>
          </div>
        )}
        <div className="movies">
          {movies?.Search &&
            movies?.Search.map((movie) => {
              return (
                <div key={movie.imdbID} className="movie-item">
                  <Link to={`/movies/${movie.imdbID}`}>
                    <Card name={movie.Title} image={movie.Poster} />
                  </Link>
                </div>
              );
            })}
        </div>

        {/* <Pagination  /> */}
      </div>
    </div>
  );
};

export default Movies;
