import React from 'react'
import styles from '../styles/Card.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Card = ({
  pageId,
  title,
  body,
}) => {

  const router = useRouter()
  const { pathname } = router

  const goToPageById = () => {
    router.push(`${pathname}/${pageId}`)
  }

  return (
    <div className={styles.card} onClick={goToPageById}>
      <div className={styles.card_title}>
        {title}
      </div>
      <div className={styles.card_body}>
        {body}
      </div>
    </div>
  )
}

export default Card