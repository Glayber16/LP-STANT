import React, { useState } from 'react'

function Pop_ups({name, text, text2, text3, text4}) {
    const[Pop_up, setPop_up] = useState(false)
  return (
   
    <div className="mt-2"> 
        <button onClick={() => setPop_up (true)} className="cursor-pointer">{name}</button>
        {Pop_up && ( <div className='lg:w-screen h-screen fixed top-0 left-0 bottom-0 right-0 flex justify-center lg:left-0 items-center '>
            <div onClick={() => setPop_up (!Pop_up)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
            <div className='bg-white absolute text-sm rounded-full w-[40rem] h-[40rem] flex flex-col justify-center text-center px-12'>
                <p className='text-lblue'>{text} <br /> {text2} <br /> {text3} <br /> {text4}</p>
                <button onClick={() => setPop_up (false)} className='text-black '>Fechar</button>
            </div>
        </div> 
        )}
   
    </div>
  )
}

export default Pop_ups