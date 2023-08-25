import "./pagination.scss";

function Pagination({ page, setPage }) {
  return (
    <ul className="pagination-container">
      <li
        className={
          page === 0 ? "pagination-item active-page" : "pagination-item"
        }
        onClick={() => setPage(0)}
      >
        1
      </li>
      <li
        className={
          page === 1 ? "pagination-item active-page" : "pagination-item"
        }
        onClick={() => setPage(1)}
      >
        2
      </li>
      <li
        className={
          page === 2 ? "pagination-item active-page" : "pagination-item"
        }
        onClick={() => setPage(2)}
      >
        3
      </li>
      <li
        className={
          page === 3 ? "pagination-item active-page" : "pagination-item"
        }
        onClick={() => setPage(3)}
      >
        4
      </li>
      <li
        className={
          page === 4 ? "pagination-item active-page" : "pagination-item"
        }
        onClick={() => setPage(4)}
      >
        5
      </li>
    </ul>
  );
}

export default Pagination;
