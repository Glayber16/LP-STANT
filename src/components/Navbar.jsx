import React from 'react'

function Navbar({name, go}) {
  return (
    <nav className=' flex flex-row'>
        
        <div className='text-gray-50 bg-[#6E45F4] flex flex-row'>
            <a href={go}>{name}</a>
        </div>
        
    </nav>
  )
}

export default Navbar