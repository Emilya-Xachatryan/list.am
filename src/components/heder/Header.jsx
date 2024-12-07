import React from 'react'
import '../../App.css'
import logo from  '../../../public/photos/logo.svg'
const Header = () => {
  return (
    <div className='header'>
        <div className='w-24 h-10 ' >
        <img src={logo}alt="list.amlogo" />
      
        </div>
    </div>
  )
}

export default Header