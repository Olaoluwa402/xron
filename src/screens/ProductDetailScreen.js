import React from 'react'
import {useParams} from 'react-router-dom'
import Details from '../components/Details/Details'

function ProductDetailScreen() {
    const {slug} = useParams()
 
  return (
    <div>
       <Details slug={slug}/>
    </div>
  )
}

export default ProductDetailScreen