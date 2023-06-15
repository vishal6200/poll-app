import "./poll.css";
import { useState } from "react";
function Search({ posts, setPostItems }) {
  const [searchText, setSearchText] = useState("");


  //field for searching post based on author and title
  const onChangeText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (posts.length > 0) {
      let postItems = [...posts];
      postItems = postItems.filter((item) => {
        if (searchText.length == 0) {
          return item;
        } else {
          if (
            item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !=
              -1 ||
            item.author.toLowerCase().indexOf(e.target.value.toLowerCase()) !=
              -1
          ) {
            return item;
          }
        }
      });
      if( setPostItems){
        setPostItems(postItems,e.target.value);
      }
      
    }
  };
  return (
    <div className="poll__search" data-testid="searchBox">
      <input
        type="search"
        data-testid="inputField"
        value={searchText}
        placeholder="Search your post"
        onChange={onChangeText}
      ></input>
    </div>
  );
}
export default Search;
