import React,{useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import GlobalContext from '../../Context'
import Title from '../Title/Title'
import {Button} from '../Button'


import styles from './Details.module.css'

function Details({slug}) {
  const state = useContext(GlobalContext)
  const {img,description,company,price,title,inCart} = state.ProductDetail;
  const {productDetailHandler, addToCart} = state;

  useEffect(()=>{
    productDetailHandler(slug)
  }, [])

  return (
         <div className={styles.container}>
              <Title>
                {title} 
              </Title>                      
              <div className={styles.product}>
                <div className={styles.productImg}>
                  <img src={img} alt={title} />
                </div>
                <div className={styles.productContent}>
                  <h2>Model - SAFARI</h2>
                  <h4 className='text-title'>MADE BY - {company}</h4>
                  <h5>Price - {price}</h5>
                  <p>Description: {description}</p>
                  <div className={styles.action}>
                    <Link to='/'>
                      <Button name='success' className={styles.btn}>Store</Button>
                    </Link>
                    <Button name='react' className={styles.btn}>

                    {inCart ? <p>In Cart</p> : (<HiOutlineShoppingCart onClick={()=> addToCart(slug)} className={styles.cardIcon}/>)}
                    </Button>
                  </div>
                </div>
              </div>
          </div>
  )
}

Details.propTypes = {
  slug:PropTypes.string
}

export default  Details
