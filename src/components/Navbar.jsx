import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="./">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          <Link to="./login">
            <button className='text-white pr-4'>Sign in</button>
            </Link>
            <Link to="/signup">
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
           </Link>
        </div>
    </nav>
  )
}

export default Navbar