import React from 'react'


const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-700 text-gray-300 pt-12">
        <div className="w-full px-4 border-t border-gray-600 pt-[40px]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-600">
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-4">UserApp</h2>
              <p className="text-sm">
                UserApp is a modern web application where you can view and manage user profiles with responsive design and dark mode support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Users</a></li>
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: support@userapp.com</li>
                <li>Phone: +998 90 123 45 67</li>
                <li>Address: Tashkent, Uzbekistan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm py-6 bg-gray-950 text-gray-400 mt-6">
          &copy; 2025 UserApp. All rights reserved. Made with ❤️ by Abubakr.
        </div>
      </footer>
    </div>

  )
}

export default Footer