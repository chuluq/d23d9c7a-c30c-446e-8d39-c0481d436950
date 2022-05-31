import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);
  const page = useSelector((state) => state.movies.currentPage);

  const [movieList, setMovieList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (movies) {
      setMovieList(movies?.Search);
      setTotalRecords(movies?.totalResults);
    }
  }, [movies]);

  const handleChangeSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    let payload = {
      keyword: searchKeyword,
      page,
    };

    dispatch(searchMovies(payload));
  };

  const handleGetDetail = (id) => {
    dispatch(getDetailMovie(id));

    navigate(`/movies/${id}`);
  };

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
        {movieList && movies?.Error && (
          <div className="not-found">
            <h2>Sorry, No results found</h2>
            {movies?.Error ? (
              <p>{movies?.Error}</p>
            ) : (
              <p>There are no movies matching your search terms.</p>
            )}
          </div>
        )}

        <div className="movies">
          {movieList &&
            movieList.map((movie) => {
              return (
                <div
                  key={movie.imdbID}
                  className="movie-item"
                  onClick={() => handleGetDetail(movie.imdbID)}
                >
                  <Card name={movie.Title} image={movie.Poster} />
                </div>
              );
            })}
        </div>

        {totalRecords > 0 && (
          <div className="pagination-content">
            <h3 className="movies-total">
              All <span>({totalRecords})</span>
            </h3>
            <div className="pagination">
              <Pagination
                currentPage={page}
                pageSize={10}
                totalCount={totalRecords}
                keyword={searchKeyword}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
