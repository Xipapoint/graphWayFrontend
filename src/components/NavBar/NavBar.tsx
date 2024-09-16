import React, { MouseEventHandler } from 'react'
import styles from './navBar.module.scss'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'
import { routeConstants } from '../../shared/constants/routeConstants'
import { Link } from 'react-router-dom'
import { AuthApi } from '../../api/authApi'

const NavBar = () => {
    const {getItem, deleteItem} = useLocalStorage()
    const auth = getItem('auth')
    async function handleLogOut():Promise<MouseEventHandler<HTMLDivElement> | undefined>{
       const response = await AuthApi.logout()
        console.log(response);
        
        deleteItem('auth')
        deleteItem('UID')
        deleteItem('accessToken')
        
        return
    }
  return (
    <div className={styles.navBar}>
        <div className={styles.navBarItems}>
            <h3 className={styles.navBarItem}>GraphWay</h3>
        </div>


        <div className={styles.navBarItemsInfo}>
            <div className={styles.navBarItem}><Link to={routeConstants.GRAPH_ROUTE + routeConstants.DEJKSTRA_ROUTE}>Graphs</Link></div>
            <div className={styles.navBarItem}>Structures</div>
            <div className={styles.navBarItem}>Forum</div>
            <div className={styles.navBarItem}>Feedback</div>
            <div className={styles.navBarItem}>History</div>
        </div>


        {
            auth ?
            <div className={styles.navBarItemsUser}>   
                <div onClick={handleLogOut} className={styles.navBarItem}>Log out</div>     
                <div className={styles.navBarItem}>User</div>
                <div className={styles.navBarItem}>Icon</div>
            </div>
            :
            <div className={styles.navBarItemsUser}>
                <div className={styles.navBarItem}><Link to={routeConstants.AUTH}>Login</Link></div>
            </div>
        }


    </div>
  )
}

export default NavBar