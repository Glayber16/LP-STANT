import { useState } from "react"

function Vision() {
    const[Vision, setVision] = useState(false)
  return (

    <div className="mt-2"> 
        <button onClick={() => setVision (true)} className="cursor-pointer">Visão</button>
        {Vision && ( <div className='lg:w-screen h-screen fixed top-0 left-10 bottom-0 right-10 flex justify-center lg:left-0 items-center '>
            <div onClick={() => setVision (!Vision)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
            <div className='bg-white text-xs px-5 py-5 lg:text-xs lg:w-96 lg:px-7 lg:py-7 absolute leading-relaxed rounded-lg'>
                <p className='text-lblue'>"A nossa visão é criar um ecossistema empreendedor dinâmico e sustentável, impulsionado pela inovação e pela criação 
                de empresas disruptivas que resolvam os desafios mais prementes da sociedade."</p>
                <button onClick={() => setVision (false)} className='text-black py-3'>Fechar</button>
            </div>
        </div> 
        )}
   
    </div>
  )
}

export default Vision