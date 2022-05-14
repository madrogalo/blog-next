import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {

  const [isShowMenu, setIsShowMenu] = useState(true)
  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }
  return (
    <>
      <div className={styles.header}>
        <div 
          className={styles.logo}
          onClick={goToHome}
        >Blog</div>
        <div 
          className={styles.menu}
          onClick={() => setIsShowMenu(!isShowMenu)}
          >
          <Image src='/menu.svg' width={40} height={40} alt='menu'/>
        </div>
      </div>
      {isShowMenu && (
        <div className={styles.menu_list}>
          <div className={styles.menu_list_item}>
            <Link href='/'>
              Blog
            </Link>
          </div>
          <div className={styles.menu_list_item}>
            <Link href='/about' onBlur={() => console.log('blur')} >
              About
            </Link>
          </div>
          <div className={styles.menu_list_item}>
            <Link href='/links'>
              Links
            </Link>
          </div>
          <div className={styles.menu_list_item}>
            <Link href='/project'>
              Project
            </Link>
          </div>
        </div>)
      }
    </>
  )
}

export default Header