import React from 'react'
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-700 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400 ">UserApp</h1>
          
          <nav className="flex gap-[20px] max-[640px]:hidden">
            <a href="#" className="text-white hover:text-blue-400">Home</a>
            <a href="#" className="text-white hover:text-blue-400">Users</a>
            <a href="#" className="text-white hover:text-blue-400">About</a>
            <a href="#" className="text-white hover:text-blue-400">Contact</a>
          </nav>

          <button className='hidden max-[640px]:block text-white text-xl'>
            <FaBars />
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header;
