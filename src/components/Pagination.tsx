import { useState } from "react";
import "./poll.css";
interface IPagination{
    page:number,
    setPage:(page:number)=>void;
    fetchNextData:(page:number)=>void;
}
function Pagination(props:IPagination) {
    const [page,setPage] =useState(props.page);
  function clickPrevious() {
    if (props.page > 0) {
        setPage(props.page - 1);
      props.setPage(props.page - 1);
      props.fetchNextData(props.page - 1);
    }
  }
  function clickNext() {
    if (props.page <= 50) {
        setPage(props.page + 1);
      props.setPage(props.page + 1);
      props.fetchNextData(props.page + 1);
    }
  }
  return (
    <div className="poll__pagination" data-testid="paginationTest">
      <i
        data-testid='paginationPrev'
        className="fa fa-angle-double-left"
        onClick={() => clickPrevious()}
      ></i>
      <span data-testid="paginationLabel">{page}/50</span>
      <i className="fa fa-angle-double-right" data-testid="paginationNext" onClick={() => clickNext()}></i>
    </div>
  );
}
export default Pagination;
