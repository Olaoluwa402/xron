import React from 'react'
import styles from './Product.module.css'
import {Link} from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'

export default function Product({product, addToCart}) {
  const {id,title, img,description,price,inCart} = product
  return (
    <div className={styles.container}>
      <div className={styles.card}>
         <div className={styles.cardImgContainer}>
          <Link to='/'><img src={img} alt={title}/></Link>
          <button disabled={inCart}>
             {inCart ? <p>In Cart</p> : (<HiOutlineShoppingCart onClick={addToCart}/>)}
          </button>
         </div>
         <div className="cardFooter">
            <div className="cardFooterTitle"><h4>{title}</h4></div>
            <div className="cardFooterPrice"><p>{price}</p></div>
         </div>
      </div>
    </div>
  )
}
