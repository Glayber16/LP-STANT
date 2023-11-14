import React, { useState } from 'react'

function Pop_up2({name1, name2, name3, text}) {
    const[Pop_up, setPop_up] = useState(false)
    return (
     
    


      <div className=" xl:-mt-4 flex flex-col ml-8 lg:ml-0   lg:mr-20 xl:ml-20 xl:mr-10 3xl:mr-32 3xl:mt-2 ">
        
        <button onClick={() => setPop_up (true)} className="cursor-pointer med:max-sm:mt-5 sm:mb-0  mr-8    lg:mr-24   xl:mr-20 xl:mt-16 ">{name1}</button>
          
          <button onClick={() => setPop_up (true)} className="cursor-pointer ml-32 med:max-sm:ml-[9.5rem]  sm:ml-48 mt-2 lg:mr-5 xl:mr-0 lg:mt-10 xl:mt-12">{name2}</button>
           
            
          <button onClick={() => setPop_up (true)} className="cursor-pointer   sm:mr-36 mr-28  lg:mt-0  xl:mb-0 lg:mr-56 xl:mr-56">{name3}</button>
          
          {Pop_up && ( <div className='lg:w-screen h-screen fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center '>
              <div onClick={() => setPop_up (!Pop_up)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
              <div className='bg-white absolute text-[0.61rem] w-[19rem] h-[19rem] sm:text-sm rounded-full sm:w-[40rem] sm:h-[40rem] flex flex-col justify-center text-center sm:px-12 px-14'>
                  <p className='text-lblue'>{text}</p>
                  <button onClick={() => setPop_up (false)} className='text-black '>Fechar</button>
              </div>
          </div> 
          )}
     
      </div>
    )
}

export default Pop_up2