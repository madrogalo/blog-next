import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchNewsById } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import { setOneNews } from '../reducers/oneNews/oneNewsSlice'

export default function Newspage() {
  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()
  useEffect(() => {
    fetchNewsById(id)
    .then(data => dispatch(setOneNews(data)))
  }, [])

  const oneNews = useSelector((state) => state.oneNews.news)

  return(
    <div>
      {oneNews.map(news => (
        <div key={news.id}>
          <h1>{news.title}</h1>
          <p>{news.body}</p>
          <p>{news.body}</p>
          <p>{news.body}</p>
          <p>{news.body}</p>
          <p>{news.body}</p>
          <p>{news.body}</p>
        </div>
      ))}
    </div>
  )
}