import React from 'react'

const Navbar = () => {
  return (
    <nav className='mx-6 py-5 '>
       <div className='font-bold text-2xl text-center  w-full   '>
            <h3 className='text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h2 className='capitalize'>food planet restaurant</h2>
            <h3 className='font-semibold text-xl text-gray-800 mb-3'>Find the best food</h3>
        </div>
      
    </nav>
  )
}

export default Navbar