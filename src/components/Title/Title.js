import React from 'react'
import {colors} from '../colors'

import styles from './Title.module.css'

function Title({name='default', children}) {

    const {color, backgroundColor}= colors.find((c)=> c.name === name)

  return (
    <div className={styles.container} style={{backgroundColor:backgroundColor}}>
        <h1 style={{color:color, backgroundColor:backgroundColor}}>
            {children}
        </h1>
    </div>
  )
}

export default Title