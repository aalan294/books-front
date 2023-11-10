import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav">
        <h1><Link to='/'>BOOKS</Link></h1>
        <h1><Link to='/newbook'>NEW BOOK</Link></h1>
    </div>
  )
}

export default Nav