import React, { useState } from 'react'

function Values() {
    const[Values, setValues] = useState(false)
  return (
    <div className="mt-2"> 
        <button onClick={() => setValues (true)} className="cursor-pointer">Valores</button>
        {Values && ( <div className='lg:w-screen h-screen fixed top-0 left-10 bottom-0 right-10 flex justify-center lg:left-0 items-center '>
        <div onClick={() => setValues (!Values)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
            <div className='bg-white text-xs px-5 py-5 lg:text-sm lg:w-96 lg:px-7 lg:py-7 absolute leading-relaxed rounded-lg'>
                <p className='text-lblue'>1. Colaboração Empreendedora: Trabalhamos em estreita parceria com fundadores e equipes, compartilhando conhecimento e recursos para alcançar o sucesso coletivo. <br />
                                            2. Mentoria e Desenvolvimento: Investimos no desenvolvimento de empreendedores e equipes, capacitando-os com as habilidades necessárias para ter sucesso a longo prazo. <br />
                                            3. Foco no Cliente: Colocamos as necessidades e desejos de nossos clientes e parceiros no centro de nossas atividades. <br />
                                            4. Persistência e Resiliência: Entendemos que empreender é um caminho repleto de desafios, e estamos comprometidos em superar obstáculos com determinação.</p>
                <button onClick={() => setValues (false)} className='text-black py-3'>Fechar</button>
            </div>
        </div> 
        )}
   
    </div>
  )
}

export default Values