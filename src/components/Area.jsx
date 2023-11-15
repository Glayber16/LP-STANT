import React from 'react'
import {CARD} from '../constants/index';
import Cards from './Cards';

function Area() {
  return (
    <div id='area' className='bg-gradient-to-b from-area to-[#3728b4] font-michroma text-gray-50 flex flex-col py-24 '>
        <div className=' lg:text-[82px] 3xl:text-[105px] md:text-4xl text-xl flex justify-center text-center  md:justify-end lg:pb-16 md:pr-11 xl:pr-28 3xl:pr-40 '> 
            <h1>Áreas de atuação</h1>
        </div>
        <div className='flex flex-col md:flex-row py-5 justify-center items-center md:justify-around 2xl:px-20 3xl:px-36'> 
    {CARD.map(e =>(
        <Cards role ={e.role} image = {e.image} description = {e.description} />
    ))}
    </div>
    </div>
    
  )
}

export default Area