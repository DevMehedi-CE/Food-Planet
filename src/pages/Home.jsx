import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Menu/> */}
        <FoodItem/>
        <Cart/>

    </div>
  )
}

export default Home