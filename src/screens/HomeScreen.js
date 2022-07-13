import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductList from '../components/ProductList/ProductList'
import Advert from '../components/advert/Advert'
 

function HomeScreen() {
  return (
    <Layout> 
        <div>
        <Advert />
        <ProductList />
    </div>
    </Layout>
  )
}

export default HomeScreen