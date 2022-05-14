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
          <h1>Id {news.id}</h1>
          <h2>albumId {news.albumId}</h2>
          <Image width={300} height={300} src={news.url} alt={news.id}/>
          <p>{news.title}</p>
        </div>
      ))}
    </div>
  )
}