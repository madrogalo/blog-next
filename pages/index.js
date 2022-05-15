import { useEffect, useState } from 'react'
import Card from '../components/card'
import { fetchCars } from '../utils'

import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    fetchCars(1)
    .then(data => setListNews(data))
  }, [])
  return (
    <div className={styles.main_page}>

      {
        listNews.map(news => (
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
