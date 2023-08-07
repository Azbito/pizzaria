import styles from './Input.module.css'

export function Input({ label, ...props }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input className={styles.input} {...props} />
    </div>
  )
}
