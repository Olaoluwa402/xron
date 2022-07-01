import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <h2 className={styles.logo}>MFON-X</h2>
        <div className={styles.categories}>
          <h4>Categories</h4>
          <ul>
          <li><Link to='/'>SamSung</Link></li>
          <li><Link to='/'>HTC</Link></li>
          <li><Link to='/'>Techno</Link></li>
        </ul>
        </div>
        <div className={styles.socials}>
          <h4>Socials</h4>
          <ul>
          <ul>
            <li><a target={'_blank'} href='https://www.facebook.com' rel='noopener noreferrer'><FaFacebookSquare/></a></li>
            <li><a target={'_blank'}  href='https://www.facebook.com' rel='noopener noreferrer'><FaTwitterSquare/></a></li>
            <li><a target={'_blank'}  href='https://www.facebook.com' rel='noopener noreferrer'><FaInstagramSquare/></a></li>
          </ul>
        </ul>
        </div>
        
    </div>
  )
}

export default Footer