import React, { useState } from 'react'

function Mission() {
    const[Mission, setMission] = useState(false)
  return (
    
    <div className="mt-2"> 
        <button onClick={() => setMission (true)} className="cursor-pointer">Missão</button>
        {Mission && ( <div className='lg:w-screen h-screen fixed top-0 left-10 bottom-0 right-10 flex justify-center lg:left-0 items-center '>
            <div onClick={() => setMission (!Mission)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
            <div className='bg-white text-xs px-5 py-5 lg:text-sm lg:w-96 lg:px-7 lg:py-7 absolute leading-relaxed rounded-lg '>
                <p className='text-lblue'>"A nossa missão é identificar, incubar e acelerar startups promissoras, fornecendo recursos, conhecimento e 
                expertise necessários para transformar ideias em negócios de sucesso. Nós capacitamos empreendedores a realizar seu potencial e contribuir para um mundo melhor."</p>
                <button onClick={() => setMission (false)} className='text-black py-3'>Fechar</button>
            </div>
        </div> 
        )}

    </div>
  )
}

export default Mission