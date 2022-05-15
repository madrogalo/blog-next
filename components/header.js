import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { showHideMenu } from '../reducers/showMenu/showMenuSlice'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }
  const isShowMenu = useSelector((state) => state.isShowMenu.isShow)
  const dispatch = useDispatch()

  return (
    <>
      <div className={styles.header}>
        <div 
          className={styles.logo}
          onClick={goToHome}
        >Blog</div>
        <div 
          className={styles.menu}
          onClick={() => dispatch(showHideMenu(!isShowMenu))}
          >
          <Image src='/menu.svg' width={40} height={40} alt='menu'/>
        </div>
      </div>
      {isShowMenu && (
        <div
          className={styles.menu_list}
          onClick={() => dispatch(showHideMenu(false))}
        >
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