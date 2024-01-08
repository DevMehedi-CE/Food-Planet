import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:py-96 py-40 overflow-hidden'>


       <h3 className="font-semibold text-xl lg:text-4xl text-green-800 mb-10 " >Your Order is Confirmed </h3>
      
      <Link to="/"> 
      <button className="bg-green-500 font-bold px-3 text-white p-2 rounded-lg  mb-10 ">Back to Home</button>
      </Link>

       
    </div>
  )
}

export default Checkout