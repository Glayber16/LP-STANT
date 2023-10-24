import React from 'react'

function Navbar({name, go}) {
  return (
    <nav className=' flex flex-row py-5'>
        
        <div className='text-gray-50 bg-[#6E45F4] flex flex-row w-40 h-16 rounded-full items-center justify-center text-center'>
            <a href={go}>{name}</a>
        </div>
    </nav>
  )
}

export default Navbar