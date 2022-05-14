import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        Blog
      </div>
      <div className={styles.footer_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula.
      </div>
      <div className={styles.footer_link}>
        <a href='https://twitter.com'>Twitter</a>
        <a href='https://www.linkedin.com'>Linkedin</a>
        <a href='https://www.facebook.com'>Facebook</a>
      </div>
      <div className={styles.footer_all_rigts}>© 2012–2020 Nordic Rose Co. All rights reserved. </div>
    </div>
  )
}

export default Footer