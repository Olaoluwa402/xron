import React from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../../Context'
import Title from '../Title/Title'
import {Button} from '../Button'

import styles from './Details.module.css'

function Details({slug}) {
  return (
    <div>
       <Consumer>
            {
                (state)=>{
                    const {id,img,description,company,price,title,inCart} = state.ProductDetail
                  return (
                    <div className={styles.container}>
                        <Title name='danger'>
                          {title}
                        </Title>                      
                        <div className="product">
                          <div className="productImg">
                            <img src={img} alt={title} />
                          </div>
                          <div className="productContent">
                            <h2>Model - SAFARI</h2>
                            <h4>MADE BY - {company}</h4>
                            <h5>Price - {price}</h5>
                            <p>Description: {description}</p>
                            <div className="action">
                              <Button name='success'>Store</Button>
                              <Button name='react'>Go To Cart</Button>
                            </div>
                          </div>
                        </div>
                    </div>
                  )
                }
            }
        </Consumer>
    </div>
  )
}

Details.propTypes = {
  slug:PropTypes.string
}

export default  Details
