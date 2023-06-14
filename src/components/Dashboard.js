import { useState, useEffect, useCallback } from "react";
import "./poll.css";
import Table from "./Table";
import Search from "./Search";
import Pagination from "./Pagination";
import Service from "../Services/Service";
function Dashboard() {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [filteredPost, setFilteredPost] = useState([]);
  
 // fetch posts based on pageCount 
  async function fetchPosts(pageCount) {
    let services = new Service();
    if (page < 50) {
       let data = await services.fetchPost(pageCount);  
       
          try {
            if (data && data.hits && data.hits.length > 0) {
              setFilteredPost([...posts, ...data.hits]);
            } else {
              console.log("No Polls");
            }
          } catch (e) {
            console.log(e);
          }
        
    }
  }

  async function getFilteredData() {
    //first time fetch
    let services = new Service();
    let data = await services.fetchPost(null);
      
        if (data && data.hits) {
            setPost(data.hits);
          setFilteredPost(data.hits);
          setPage(0);
        }
  
  }

  function fetchNextData(page) {
    fetchPosts(page);
    sessionStorage.setItem("currentPage", page);
  }

  useEffect(() => {
    getFilteredData(); // fetch for the first time

    function refreshData() {
      if (sessionStorage.getItem("currentPage") == 0) {
        var interval = setInterval(() => {
          getFilteredData();
        }, 10000);
      } else {
        clearInterval(interval);
      }
    }
    refreshData();
  }, []);

  //search items based on the text 
  function getSearchValues(SearchedPost,text){
       if(text.length>0){
        setFilteredPost(SearchedPost);
       }else{
        setFilteredPost(posts);
       }
  }

  return (
    <div>
      <Search posts={filteredPost} setPostItems={getSearchValues} />
      <table data-testid="table">
        <tr>
          <th>Title</th>
          <th>Url</th>
          <th>Created At</th>
          <th>Author</th>
        </tr>

        {filteredPost &&
          filteredPost.length > 0 &&
          filteredPost.map((post, i) => {
            return <Table post={post} />;
          })}
      </table>
      <Pagination page={page} setPage={setPage} fetchNextData={fetchNextData} />
    </div>
  );
}
export default Dashboard;
