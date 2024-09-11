import React from 'react'
import styles from './form.module.scss'
const RegisterForm = () => {
  return (
    <div className={styles.authForm}>
      <h3>Create account</h3>
      <div className={styles.auth0Resources}>
        <button className={styles.auth0button}>Sign up with google</button>
        <button className={styles.auth0button}>Sign up with GitHub</button>
      </div>
    </div>
  )
}

export default RegisterForm
