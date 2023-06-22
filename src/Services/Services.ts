export default class Service{
    async fetchPost(pageCount:number){
 
         try {
                 const res = await fetch(
                     "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=" +
                     pageCount
                 )
                 const data = await res.json()
                 return data
             } catch (e) {
                 return e
             }
       
   }
   }