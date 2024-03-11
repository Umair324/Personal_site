import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-6 py-16 bg-black text-white text-center'>
        <h1>Join my Nang Cumunity</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="Email" placeholder='Enter your Email' />
            <button>Sign up</button>
        </div>
        <div className='flex justify-center items-center py-2'>
            <input className='mr-2' type="checkbox" />
            <p>Yes, i agree to recive email communacations from Nang</p>
        </div>
    </div>
  )
}

export default Subscribe