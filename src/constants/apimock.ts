export const getpolls = () => {
    return fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").then((resp) =>resp.json());
  };