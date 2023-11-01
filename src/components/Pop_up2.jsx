import React, { useState } from 'react'

function Pop_up2({name1, name2, name3, text}) {
    const[Pop_up, setPop_up] = useState(false)
    return (
     
    


      <div className="mt-2 flex flex-col ml-8 lg:ml-0 xl:ml-20  lg:mr-20 ">
        
          <button onClick={() => setPop_up (true)} className="cursor-pointer  mr-12 sm:mr-80  lg:mr-0 lg:mt-16 ">{name1}</button>
          
          <button onClick={() => setPop_up (true)} className="cursor-pointer ml-24 sm:mr-24 lg:mr-0 sm:ml-12 lg:ml-80 lg:mt-12">{name2}</button>
           
            
          <button onClick={() => setPop_up (true)} className="cursor-pointer  mr-32 mt-8 lg:mt-0 sm:mr-96 lg:mr-48">{name3}</button>
          
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