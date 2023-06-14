function Table({post}){
    return  <tr>
    <td data-testid="data-title">{post.title?post.title:""}</td>
     <td ><a data-testid="data-url" href={post.url?post.url:""} target="_blank">Click here for more</a></td>
    <td>{post.created_at?post.created_at:""}</td>
    <td>{post.author?post.author:""}</td>
  </tr>
 
}
export default Table