import React from 'react'
import styles from './form.module.scss'
const RegisterForm = () => {
  return (
    <div className={styles.authForm}>
      <h1>Create account</h1>
      <div className={styles.auth0Resources}>
        <button className={styles.auth0button}>Sign up with Google</button>
        <button className={styles.auth0button}>Sign up with GitHub</button>
      </div>
      <p>-OR-</p>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  )
}

export default RegisterForm
