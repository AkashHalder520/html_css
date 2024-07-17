// eslint-disable-next-line no-unused-vars
import React from 'react'
const Footer = () => {
  return (
    <>
    <div className='lg:flex justify-between w-4/5  '>
      <ul className='font-lato flex gap-10 text-gray-400'>
        <li>
          <a rel="stylesheet" href="" >instagram</a>
        </li>
        <li>
          <a rel="stylesheet" href="">Facebook</a>
        </li>
        <li>
          <a rel="stylesheet" href="">Twitter</a>
        </li>
      </ul>
      <div className='mt-4'>
        <img src="./src/assets/Help-Avatar.svg" alt="" />
        <div className=''>
          <p className='font-playfair font-thin'>Have any questions </p>
          <a rel="stylesheet" href='/sssx' className='font-playfair font-bold'  >Talk to a specaialist</a>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer