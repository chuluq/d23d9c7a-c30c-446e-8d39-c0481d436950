import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies, getDetailMovie } from "app/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);

  const handleChangeSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchKeyword, page));
  };

  const handleGetDetail = (id) => {
    dispatch(getDetailMovie());
  };

  return (
    <div>
      <input type="text" value={searchKeyword} onChange={handleChangeSearch} />
      <button type="submit" onClick={(e) => searchKeyword && handleSearch(e)}>
        search
      </button>
      <button type="button" onClick={handleGetDetail}>
        get detail
      </button>
    </div>
  );
};

export default Home;
