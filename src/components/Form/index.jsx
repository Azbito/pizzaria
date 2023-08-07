import styles from './Form.module.css'

export function Form({ children, ...props }) {
  return (
    <form className={styles.layoutContainer} {...props}>
      {children}
    </form>
  )
}
