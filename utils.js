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

export const postOrderData = async (url, data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return await fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}