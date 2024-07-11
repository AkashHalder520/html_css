// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../assets/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
    <div className=''>
    <img src={logo} alt="logo"  />
    <button>Hoster is hiring</button>
    <GiHamburgerMenu />
    </div>
    </>
  )
}

export default Header