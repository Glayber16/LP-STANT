import React from 'react'

function Cards({role, image, description}) {
  return (
    <div className='bg-card flex flex-row rounded-lg 2xl:w-[30rem] 2xl:h-[37rem] md:w-60 md:h-96 w-60 h-96 mb-8 lg:w-72 lg:h-96 justify-center text-center 2xl:px-5'>
        <div className='flex flex-col'> 
        <div className='flex justify-between xl:py-8 py-3 px-4'>
            <div className='rounded-sm border-gray-50 border h-6 flex xl:h-11 sm:h-6 px-2'> 
                <h2 className='xl:text-2xl text-sm'>{role}</h2>
            </div>
            <img src={image} alt="" />
        </div>
        <div className='xl:text-lg text-sm xl:py-16 py-7'>
            <p>{description}</p>
        </div>
        <div className='flex justify-around xl:text-3xl lg:px-10 xl:py-16'>
            <h1>100+</h1>
            <h1>5mil</h1>
        </div>
    </div>
    </div>
  )
}

export default Cards