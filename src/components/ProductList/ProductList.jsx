import React from 'react'
import Product from '../Product/Product'
import {Consumer} from '../../Context'

function ProductList() {

  return ( 
    <div>
      <Consumer>
      {(state)=>{
        return (state.Products.length > 0 && state.Products.map((product) => (<Product key={product.id}  product={product} addToCart={state.addToCart}/>)))
      }}
      </Consumer>
    </div>
  )
}

export default ProductList
