import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Site name and tagline */}
        <div>
          <h1 className="text-2xl font-bold text-white">JobVista</h1>
          <p className="text-sm mt-2 text-gray-400">Your gateway to top career opportunities.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/browse" className="hover:underline">Browse</Link></li>
            {/* <li><Link to="/" className="hover:underline">Logout</Link></li> */}
            {/* <li><Link to="/contact" className="hover:underline">Contact</Link></li> */}
            {/* <li><Link to="/login" className="hover:underline">Login</Link></li> */}
          </ul>
        </div>

        {/* Social or Copyright */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Connect</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} JobVista. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
