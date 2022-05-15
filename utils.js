export const fetchNews = (page) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
  .then(res => res.json())
  .then(data => data)
}
export const fetchNewsById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  .then(res => res.json())
  .then(data => data)
}