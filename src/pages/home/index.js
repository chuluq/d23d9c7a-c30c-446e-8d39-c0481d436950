import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies, getDetailMovie } from "app/movies/movieSlice";
import Card from "components/Card";
import Button from "components/Button";
import Input from "components/Input";
import sample from "assets/sample.png";
import SearchIcon from "constants/icons/search";
import "./styles.css";

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
            handleChange={() => console.log("onChange search")}
          />
          <div className="search-btn">
            <Button
              title="Search"
              handleClick={() => console.log("search button")}
            />
          </div>
        </div>
      </div>
      {/* <input type="text" value={searchKeyword} onChange={handleChangeSearch} />
      <button type="submit" onClick={(e) => searchKeyword && handleSearch(e)}>
        search
      </button>
      <button type="button" onClick={handleGetDetail}>
        get detail
      </button> */}
    </div>
  );
};

export default Home;
