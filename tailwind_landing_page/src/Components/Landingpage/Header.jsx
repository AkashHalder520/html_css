// eslint-disable-next-line no-unused-vars
import React from 'react'
// import logo from '../../assets/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <>

            <div className='flex justify-between items-center my-3 lg:w-4/5'>
                <div className='flex gap-2'>
                    <img src='./src/assets/Logo.svg' alt="logo" />
                    <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-2.5 py-0.5 text-white '>Hoster is hiring</button>
                </div>
                <div className='lg:hidden'>
                    <GiHamburgerMenu />
                </div>
                {/* if large screen then  */}
                <div className='flex justify-between basis-2/3'>
                    <div>
                        <ul className='font-lato flex gap-10 text-gray-400'>
                            <li>
                                <a rel="stylesheet" href="" >Plans</a>
                            </li>
                            <li>
                                <a rel="stylesheet" href="">Find Domain</a>
                            </li>
                            <li>
                                <a rel="stylesheet" href="">Why Hoster</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="">Sign IN</a>
                        <button className='bg-blue-400 hover:bg-blue-600 text-white rounded-md px-4 py-3 '>Join Waitlist</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header