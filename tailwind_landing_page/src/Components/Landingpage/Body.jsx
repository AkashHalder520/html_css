// eslint-disable-next-line no-unused-vars
import React from 'react'

const Body = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src="./src/assets/Blue-Shape.svg" alt="asdf"  className='-rotate-45 h-64'/>
                <img src="./src/assets/Pink-Shape.svg" alt="asdf" className='absolute -rotate-[30deg]  h-64' />
                <img src="./src/assets/Purple-Shape.svg" alt="asdf" className='absolute -rotate-[15deg] h-64'/>
                <img src="./src/assets/Hero-Model.png" alt="asdf" className='absolute h-64'/>
               
            </div>
            <div className='my-4'>
                <h1 className='font-playfair font-bold text-[45px] leading-tight'>Host your website in less than 5 minutes</h1>
                <p className='font-lato text-gray-400'>With Hoster, get your website up and running quickly and effortlessly. Our platform offers domain registration, hosting services, and advanced security features. Enjoy 24/7 customer support and scalable plans designed to grow with your business. Launch your site today and join thousands who trust Hoster for their web hosting needs.</p>
            </div>
            <div>
                <form action="" className='flex flex-col gap-4' >
                    <input className='rounded-md px-4 py-3' type="email" name="" id="" placeholder='Enter your email' />
                    <button className='bg-blue-400 hover:bg-blue-600 text-white rounded-md px-4 py-3 '>Join Waitlist</button>
                </form>
                <div className='flex flex-row items-center py-3'>
                <input className="form-checkbox  h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox" name="Term&condition" id="" />

                <label htmlFor="Term&condition" className="ml-2 text-gray-700">Accept Terms&condition</label>
                </div>
            </div>
        </div>
    )
}

export default Body