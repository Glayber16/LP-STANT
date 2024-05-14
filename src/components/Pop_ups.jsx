import React, { useState } from 'react'

function Pop_ups({name, text, text2, text3, text4, text5, text6, text7}) {
    const[Pop_up, setPop_up] = useState(false)
  return (
   
    <div className="mt-2"> 
        <button onClick={() => setPop_up (true)} className="cursor-pointer">{name}</button>
        {Pop_up && ( <div className='lg:w-screen h-screen fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center '>
            <div onClick={() => setPop_up (!Pop_up)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
            <div className='bg-white absolute text-[0.61rem] w-[19rem] h-[19rem] sm:text-lg rounded-full sm:w-[40rem] sm:h-[40rem] flex flex-col justify-center text-center sm:px-12 px-14'>
                <p className='text-lblue'>{text} <br /> {text2} <br /> {text3} <br /> {text4} <br /> {text5} <br /> {text6} <br /> {text7}</p>
                <button onClick={() => setPop_up (false)} className='text-black '>Fechar</button>
            </div>
        </div> 
        )}
   
    </div>
  )
}

export default Pop_ups