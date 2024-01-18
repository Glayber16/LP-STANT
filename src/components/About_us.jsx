import React from 'react'
import {RECORDS} from "../constants/index";
import Records from './Records';
import { POP_UPS2 } from '../constants/index';
import Pop_up2 from './Pop_up2';

function About_us() {
  return (
    <div className='relative w-full h-full font-michroma text-gray-50'> 
    <div className='  bg-[url(bg/bgAbout2.jpg)] bg-cover inset-0 bg-bottom absolute -z-20'> </div>
    <div className=' lg:bg-[url(bg/bgAbout.png)] 2xl:bg-[length:500px_1000px] lg:bg-[length:470px_1000px] bg-no-repeat 2xl:-top-[117rem] lg:-top-[114rem] lg:mr-16 2xl:mr-20 3xl:mr-0  bg-right 3xl:bg-[length:500px_1100px] 3xl:bg-right 3xl:-top-[113rem] 3xl:right-36 inset-0 -z-10 absolute '> </div>

    
        <div className='flex flex-col sm:px-28 px-5 pt-10'> 
            <div id='about' className=''>
                <h1 className='2xl:text-[150px] text-6xl md:text-8xl'>Modelo</h1>
            </div>
            <div className='flex lg:flex-row flex-col justify-between'>
                    
             <div  className='flex sm:w-[23.8125rem] pb-20 lg:pb-40 text-[22px] pt-48 font-normal xl:text-justify tracking-wider  '>
                <p className='leading-[2.7rem]'>A Santo Antônio é fruto da união de profissionais com grande experiência empreendedora, aliada a vivência executiva em empresas do setor de energia e tecnologia da informação e que uniram forças com um escritório de advocacia com grande experiência no setor de inovação e M&A do ecossistema Catarinense. Temos uma visão não de consultoria, mas sim de construtores de projetos, um conceito de “Venture Builder”, onde atuamos em todo o processo de estruturação e construção da caminhada dos empreendimentos. Apoiamos os empreendedores na busca de seus objetivos efetivamente. Em parceria com outros players deste segmento, temos condições de trazer os melhores recursos para os projetos, de forma otimizada e eficiente. A captação de recursos financeiros, buscando investidores e/ou através de estruturação de fundos específico, que com assessoria em processos de M&A complementam nossos objetivos e competências. </p>
            </div>
          
            <div className='flex flex-row text-4xl md:text-5xl lg:text-7xl sm:py-40 py-36 lg:py-0 bg-[url(bg/bgAbout.png)] lg:bg-none bg-contain bg-no-repeat'>
            
                <div className='flex flex-col justify-around  lg:ml-0 xl:mr-10 2xl:h-[24rem] lg:h-[32rem] 3xl:h-[28rem]'> 
              
            {POP_UPS2.map(e => (
                <Pop_up2 name1 = {e.name1} name2={e.name2} name3={e.name3} text = {e.text}   />
                
            ))}
            </div>
            </div>
            </div>
           
            <div className='flex justify-center items-center flex-col  font-thin sm:tracking-[0.2rem]'>
                <h2 className='text-xl'>Our Track Record:</h2>
                <div className='flex flex-row pt-6 pb-16'>
                    {RECORDS.map(e => (
                        <Records number = {e.number} description = {e.description} /> 
                    ))}
                </div>
            </div>
        
    </div>
   </div>
  )
}

export default About_us