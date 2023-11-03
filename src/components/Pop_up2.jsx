import React, { useState } from 'react'

function Pop_up2({name1, name2, name3, text}) {
    const[Pop_up, setPop_up] = useState(false)
    return (
     
    


      <div className="mt-2 flex flex-col ml-8 lg:ml-0 xl:ml-20  lg:mr-20 ">
        
        <button onClick={() => setPop_up (true)} className="cursor-pointer mb-3 med:max-sm:mt-5 sm:mb-0  mr-8  sm:mt-10  lg:mr-10 lg:mt-16 ">{name1}</button>
          
          <button onClick={() => setPop_up (true)} className="cursor-pointer ml-32 med:max-sm:ml-[9.5rem]  sm:ml-44 mt-2 lg:mr-0 lg:ml-80 lg:mt-12">{name2}</button>
           
            
          <button onClick={() => setPop_up (true)} className="cursor-pointer  sm:mr-36 mr-28 mb-5 lg:mt-0 lg:mb-2 xl:mb-0 lg:mr-60 xl:mr-48">{name3}</button>
          
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