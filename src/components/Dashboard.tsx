import { useState, useEffect, useCallback } from "react";
import "./poll.css";
import Table from "./Table";
import Search from "./Search";
import Pagination from "./Pagination";
import Service from "../Services/Services";
import { IPosts } from "../constants/Interface";
import { MOCK_POLL, Mock_Data } from "../constants/mock";
function Dashboard() {
  const [posts, setPost] = useState<IPosts[]>([]);
  const [page, setPage] = useState(0);
  const [filteredPost, setFilteredPost] = useState<IPosts[]>([]);
  
 // fetch posts based on pageCount 
  async function fetchPosts(pageCount:number) {
    let services = new Service();
    if (page < 50) {
       let data = await services.fetchPost(pageCount);  
       
          try {
            if (data && data.hits && data.hits.length > 0) {
              setFilteredPost(data.hits);
            }
          } catch (e) {
            console.log(e);
          }
        
    }
  }

  async function getFilteredData() {
    //first time fetch
    let services = new Service();
    let data = await services.fetchPost(0);
      
        if (data && data.hits) {
            setPost(data.hits);
          setFilteredPost(data.hits);
          setPage(0);
        }
  
  }

  function fetchNextData(page:number) {
    fetchPosts(page);
    sessionStorage.setItem("currentPage", page.toString());
  }

  useEffect(() => {
    getFilteredData(); // fetch for the first time

    function refreshData() {
        let interval;
      if (sessionStorage.getItem("currentPage") == '0') {
         interval = setInterval(() => {
          getFilteredData();
        }, 10000);
      } else {
        clearInterval(interval);
      }
    }
    refreshData();
  }, []);

  //search items based on the text 
  function getSearchValues(SearchedPost:IPosts[],text:string){
       if(text.length>0){
        setFilteredPost(SearchedPost);
       }else{
        setFilteredPost(posts);
       }
  }

  return (
    <div>
      <Search 
      posts={(filteredPost && filteredPost.length>0)?filteredPost:(posts && posts.length>0) ? posts:MOCK_POLL  } 
      setPostItems={getSearchValues} />
      <table data-testid="table">
        <tbody>
        <tr>
          <th>Title</th>
          <th>Url</th>
          <th>Created At</th>
          <th>Author</th>
        </tr>

        {filteredPost &&
          filteredPost.length > 0 &&
          filteredPost.map((post, i) => {
            return <Table post={post} key={i}/>;
          })}
        </tbody>
        
      </table>
      <Pagination page={page} setPage={setPage} fetchNextData={fetchNextData} />
    </div>
  );
}
export default Dashboard;
