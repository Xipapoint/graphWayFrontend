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
      <form className={styles.form} action="">
        <input className={styles.authInput} placeholder='Nickname' type='text' />
        <input className={styles.authInput} placeholder='Email' type='email'/>
        <input className={styles.authInput} placeholder='Password' type='password' />
      </form>
    </div>
  )
}

export default RegisterForm
