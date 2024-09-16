import React from 'react'
import styles from './authButton.module.scss'
const RegisterButton = () => {
  return (
    <button type='submit' className={styles.authButton}>
      Create account
    </button>
  )
}

export default RegisterButton
