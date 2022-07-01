import React from 'react'
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'

import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <h2 className={styles.logo}>MFON-X</h2>
            {/* <img src="" alt="" /> */}
        </div>
        <Link to='/'>Home</Link>
        <div className={styles.spacer}></div>
       <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
       </ul>
       <FaHamburger className={styles.menu}/>
    </div>
  )
}

export default NavBar

