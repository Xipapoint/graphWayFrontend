import React from 'react'
import styles from './navBar.module.scss'
import { publicRoutes } from '../../app/router'

const NavBar = () => {
    let auth: boolean = false
  return (
    <div className={styles.navBar}>
        <div className={styles.navBarItems}>
            <h3 className={styles.navBarItem}>Redux</h3>
        </div>


        <div className={styles.navBarItemsInfo}>
            <div className={styles.navBarItem}><a href='/g/dejkstra'>Graphs</a></div>
            <div className={styles.navBarItem}>Structures</div>
            <div className={styles.navBarItem}>Forum</div>
            <div className={styles.navBarItem}>Feedback</div>
            <div className={styles.navBarItem}>History</div>
        </div>


        {
            auth ?
            <div className={styles.navBarItemsUser}>        
                <div className={styles.navBarItem}>User</div>
                <div className={styles.navBarItem}>Icon</div>
            </div>
            :
            <div className={styles.navBarItemsUser}>
                <div className={styles.navBarItem}>Login</div>
                <div className={styles.navBarItem}>Register</div>
            </div>
        }


    </div>
  )
}

export default NavBar