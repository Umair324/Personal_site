import React from 'react'
import terminal from '../assets/temenal.png'
const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex justify-center items-center'>
            <div>
                <h1 className='py-6'>SuperPower of Nang Developers</h1>
                <p className='py-2'>
                 Chechout the <span className='text-[#00d8ff]'>Documentations</span>,the <span className='text-[#00d8ff]'>Quick Start</span> or a guide below to intergrate your Project with
                 thousands of tokens and billions of Liquidty
                </p>
            </div>
            <div className='flex justify-center w-full  items-center py-8'>
                <img className='w-[250px] shadow-lg shadow-cyan-500/50' src={terminal}/>
            </div>
        </div>
    </div>
  )
}

export default Developers