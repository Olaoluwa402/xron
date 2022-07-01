import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import DashboardScreen from './screens/DashboardScreen'
import Layout from './components/Dashboard/Layout/Layout'
import Profile from './components/Dashboard/Profile/Profile'
import Orders from './components/Dashboard/Orders/Orders'
import Receipts from './components/Dashboard/Receipts/Receipts'

const Router = ()=> {
  return (
    <Routes>
       <Route path='/' element={<HomeScreen />}/>
       <Route path='/about' element={<AboutScreen />}/>
       <Route path='/contact' element={<ContactScreen />}/>
       <Route path='/register' element={<RegisterScreen />}/>
       <Route path='/login' element={<LoginScreen />}/>
       <Route path='/cart' element={<CartScreen />}/>
       <Route path='/not-found' element={<NotFoundScreen />}/>
       <Route path='/checkout' element={<CheckoutScreen />}/>
       <Route path='/dashboard' element={<Layout />}>
            <Route index element={<DashboardScreen />} />
            <Route path='orders' element={<Orders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='receipts' element={<Receipts />} />
       </Route>
       <Route path='*' element={<Navigate to='/not-found'/>}/>
    </Routes>
  )
}

export default Router


