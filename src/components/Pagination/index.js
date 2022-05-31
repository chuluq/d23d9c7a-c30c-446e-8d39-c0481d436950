import PropTypes from "prop-types";
import { usePagination, DOTS } from "./usePagination";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, changePage } from "app/movies/movieSlice";
import "./styles.css";

const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  keyword,
}) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.movies.currentPage);

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onChangePage = (page) => {
    dispatch(changePage(page));
    dispatch(searchMovies({ keyword, page }));
  };

  const onNext = () => {
    dispatch(changePage(page + 1));
    dispatch(searchMovies({ keyword, page: page + 1 }));
  };

  const onPrevious = () => {
    dispatch(changePage(page - 1));
    dispatch(searchMovies({ keyword, page: page - 1 }));
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          onClick={() => {
            currentPage !== 1 && onPrevious();
          }}
        >
          &laquo;
        </button>
        {paginationRange.map((pageNumber, index) => {
          return (
            <button
              key={index}
              className={currentPage === pageNumber ? `active` : ""}
              onClick={() => onChangePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => {
            currentPage !== lastPage && onNext();
          }}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  keyword: PropTypes.string.isRequired,
};

export default Pagination;
