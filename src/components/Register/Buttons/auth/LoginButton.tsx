import styles from './authButton.module.scss'
const LoginButton = () => {
  return (
    <button type='submit' className={styles.authButton}>
      Login
    </button>
  )
}

export default LoginButton
