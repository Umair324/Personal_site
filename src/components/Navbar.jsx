import React, { useState } from 'react'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const[Nav,setNav] =useState(false)
    const handleNav = () => setNav(!Nav)
  return (
    <div className='w-full  bg-[#000000]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <dir>
                <h1 className='text-[#00d8ff]'>NANG</h1>
            </dir>
            <div className='hidden md:flex'>
                <ul className='text-white  flex items-center'>
                    <li>PLATFORM</li>
                    <li>DEVELOPERS</li>
                    <li>CUMMNITY</li>
                    <li>ABOUT</li>
                <button className='ml-4'>Use nang</button>
                </ul>
            </div>
            {/* hamgurgur */}
            <div onClick={handleNav} className='block md:hidden'>
            {Nav ?<AiOutlineClose size={30} className='text-white' />:<AiOutlineMenu size={30} className='text-white' />}
            </div>
            {/* Mobile menu */}
            <div className={Nav ?'w-full h-screen bg-black text-white absolute top-[90px] left-0 flex justify-center text-center':'absolute left-[-100%]'}>
                <ul>
                <li className='text-2xl'>PLATFORM</li>
                    <li className='text-2xl'>DEVELOPERS</li>
                    <li className='text-2xl'>CUMMNITY</li>
                    <li className='text-2xl'>ABOUT</li>
                    <button className='m-8'>Use nang</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;