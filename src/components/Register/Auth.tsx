// import React, { useState } from 'react'
import { useState } from 'react'
import styles from './auth.module.scss'
import RegisterForm from './Forms/RegisterForm'
import LoginForm from './Forms/LoginForm'
const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const handleIsLogin = (isLogin: boolean) => {
    setIsLogin(isLogin)
  }
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <h1>GraphWay</h1>
        IMAGE
      </div>
      {
      isLogin ? 
      <LoginForm setIsLogin={handleIsLogin}/> : 
      <RegisterForm setIsLogin={handleIsLogin}/>
      }
      
    </div>
  )
}

export default Auth
