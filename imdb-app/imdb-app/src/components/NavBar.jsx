import React from 'react'
import Logo from '../assets/MovieLogo.jpg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex space-x-8 items-center pl-3'>
        <img src={Logo} className='w-20'></img>
        <Link to='/' className='text-blue-500 text-xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default NavBar