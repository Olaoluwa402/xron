import React,{useContext} from 'react'
import styles from './Cart.module.css'
import GlobalContext from '../../Context'
import {FiTrash2} from 'react-icons/fi'

 function Cart() {
  const {ProductDetail:{img,title,price,total}} = useContext(GlobalContext)
  return (
    <div className={styles.container}>
        <table>
           
              <thead>
                <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    <th>Total</th>
                  </tr>
              </thead> 
          <tbody>
            <tr>
                <td><img src={img} alt={title}/></td>
                <td>{title}</td>
                <td>{price}</td>
                <td className={styles.qtyContainer}>
                    <span className={`${styles.qtyDecrement} ${styles.qty} `}> - </span>
                    <span className={`${styles.qtyCount} ${styles.qty} `}> 100 </span>
                    <span className={`${styles.qtyIncrement} ${styles.qty} `}> + </span>
                </td>
                <td><FiTrash2 /></td>
                <td>{total}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Cart