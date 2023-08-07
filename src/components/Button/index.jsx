import styles from './Button.module.css'

export function Button({ title, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  )
}
