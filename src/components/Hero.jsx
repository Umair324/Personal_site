import React from 'react'
import Earth from '../assets/Planet.gif'

const Hero = () => {
  return (
    <div className='W-ful h-[90vh] top-[90px]'>
      <img  src={Earth} alt="" className='object-cover w-full h-screen absolute z-[-1]' />
      <div className='w-fill h-[90%] flex flex-col justify-center px-4 items-center text-white'>
        <h1 className=''>Decentralised</h1>
        <h1 className='py-2'> <span className='text-[--primary-blue]'>Trading </span>Protocol</h1>
        <p className='py-4 text-xl text-center'>Graunteed Liquidity for millons of users and Top Eratherm Applicatins</p>
        <div>
        <button className='m-2'>Use Nang</button>
        <button className='m-2 bg-transparent'>FAQ</button>
      </div>
      </div>
      <div>
        <p className='text-white text-center text-2xl'>Total Valume Secured:$42 735 4325 </p>
      </div>
    </div>
  )
}

export default Hero