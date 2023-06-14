import "./poll.css";

function Pagination({ page, setPage, fetchNextData }) {
  function clickPrevious() {
    if (page > 0) {
      setPage(page - 1);
      fetchNextData(page - 1);
    }
  }
  function clickNext() {
    if (page <= 50) {
      setPage(page + 1);
      fetchNextData(page + 1);
    }
  }
  return (
    <div className="poll__pagination" data-testid="paginationTest">
      <i
        className="fa fa-angle-double-left"
        onClick={() => clickPrevious()}
      ></i>
      <span data-testid="paginationLabel">{page}/50</span>
      <i className="fa fa-angle-double-right" onClick={() => clickNext()}></i>
    </div>
  );
}
export default Pagination;
