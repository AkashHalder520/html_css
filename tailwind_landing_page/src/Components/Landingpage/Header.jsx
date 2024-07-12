// eslint-disable-next-line no-unused-vars
import React from 'react'
// import logo from '../../assets/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <div className='flex gap-2'>
                    <img src='./src/assets/Logo.svg' alt="logo" />
                    <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-2.5 py-0.5 text-white '>Hoster is hiring</button>
                </div>
                <div>
                    <GiHamburgerMenu />
                </div>
            </div>
        </>
    )
}

export default Header