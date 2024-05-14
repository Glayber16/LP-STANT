import React from 'react'

function Cards({role, image, description}) {
  return (
    
    <div className='bg-card flex flex-row rounded-lg 2xl:w-[24rem] 3xl:w-[30rem] lg:w-72 lg:h-[60rem] w-60 h-[68rem] mb-8 xl:w-80  justify-center text-center px-3 xl:px-5'>
        <div className='flex flex-col'> 
        <div className='flex justify-between xl:py-8 py-3 '>
            <div className='rounded-sm border-gray-50 border h-6 lg:h-11 sm:h-6 px-2 flex justify-center tracking-widest items-center'> 
                <h2 className=' lg:text-xl text-sm leading-10'>{role}</h2>
            </div>
            <img src={image} alt="" />
        </div>
        <div className='3xl:text-lg 2xl:text-[15px] text-xs py-7 tracking-widest '>
            <p className='leading-7'>{description}</p>
            
        </div>
        <div className='hidden justify-around xl:text-[27px]  lg:px-10  leading-[3.35rem]'>
            <h1>100+</h1>
            <h1>5mil</h1>
        </div>
        
    </div>
    
    </div>
    
  )
}

export default Cards