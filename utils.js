export const fetchCars = (page) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`)
  .then(res => res.json())
  .then(data => data)
}
export const fetchCarById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
  .then(res => res.json())
  .then(data => data)
}