import Header from './header'
import Footer from './footer'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
        <div className={styles.container}>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout


