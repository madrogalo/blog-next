import { useEffect, useState } from 'react'
import Card from '../components/card'
import { fetchNews } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import { setNews } from '../reducers/news/newsSlice'
import styles from '../styles/Home.module.css'

export default function Home() {
  const newsList = useSelector((state) => state.news.news)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchNews(1)
    .then(data => dispatch(setNews(data)))
  }, [])

  return (
    <div className={styles.main_page}>
      {
        newsList.map(news => (
          <Card
            key={news.id}
            pageId={news.id}
            title={news.title}
            body={news.body}
          />
        ))
      }
    </div>
  )}
