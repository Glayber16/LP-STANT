import React from 'react'

function Records({number, description}) {
  return (
    <div className=''>
        <div className='flex flex-col px-16 justify-center text-center'>
            <h1 className='text-6xl'>{number}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    </div>
  )
}

export default Records