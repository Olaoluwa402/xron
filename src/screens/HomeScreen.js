import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductList from '../components/ProductList/ProductList'
import Advert from '../components/advert/Advert'


function HomeScreen() {
  return (
    <Layout>
        <div>
        <h1>HomeScreen</h1>
        <Advert />
        <ProductList />
    </div>
    </Layout>
  )
}

export default HomeScreen