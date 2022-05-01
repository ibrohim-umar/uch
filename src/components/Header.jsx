import React from 'react'
import '../styles/Header.css'
import {Link}  from 'react-router-dom'

const Header = () => {
  return (
    <div className='header' >

    <div className="logo">
        <h1>Eside</h1>
    </div>

    <nav className='navbar' >
       <ul className='ul-items'>
           <li className='li-items' >
               <Link  to='/' > Home </Link>
               <Link  to='/careers' > Careers </Link>
               <Link  to='/about' > About </Link>
               <Link  to='/projects' > Projects </Link>
               <Link  to='/contacts' > Contact </Link>
           </li>
       </ul>
    </nav>

    </div>
  )
}

export default Header