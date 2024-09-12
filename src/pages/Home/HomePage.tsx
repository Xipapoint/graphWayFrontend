import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Header/>
    </div>

  )
}

export default HomePage