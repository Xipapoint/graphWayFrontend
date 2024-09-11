// import React, { useState } from 'react'
import styles from './auth.module.scss'
import RegisterForm from './Forms/RegisterForm'
const Auth = () => {
    // const [isLogin, setIsLogin] = useState<boolean>(false)
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <h1>GraphWay</h1>
        IMAGE
      </div>
      <RegisterForm/>
    </div>
  )
}

export default Auth
