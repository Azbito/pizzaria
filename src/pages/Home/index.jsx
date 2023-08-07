import styles from './home.module.css'
import Shiba from '../../assets/images/shiba.jpg'

export function Home() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Home page</strong>
      <img className={styles.image} src={Shiba} alt="" />
    </div>
  )
}
