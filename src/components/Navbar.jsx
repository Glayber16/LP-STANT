import React from 'react'

function Navbar({name, go}) {
  return (
    <nav className=' flex flex-row py-5 sm:px-2 lg:px-5 xl:px-14  bg-[#6E45F4] rounded-full '>
        
        <div className='text-gray-50  text-[0.4rem] lg:text-base w-12 h-6 sm:text-xs flex flex-row xl:w-40  lg:w-32 sm:w-24 sm:h-16  items-center justify-center text-center '>
            <a  className='leading-6' href={go}>{name}</a>
        </div>
    </nav>
  )
}

export default Navbar