import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchCarById } from '../utils'
import Image from 'next/image'


export default function Newspage() {
  const [data, setData] = useState([])
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetchCarById(id)
    .then(data => setData(data))
  }, [id])

  return(
    <div>
      {data.map(news => (
        <div key={news.id}>
          <h2>albumId {news.title}</h2>
          <p>{news.body}</p>
          <p>{news.body}</p>
          <p>{news.body}</p>
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