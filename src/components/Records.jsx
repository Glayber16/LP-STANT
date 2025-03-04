import React from 'react'

function Records({number, description}) {
  return (
    <div className=''>
        <div className='flex flex-col sm:px-14 justify-center text-center'>
            <h1 className='sm:text-6xl font-black'>{number}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    </div>
  )
}

export default Records