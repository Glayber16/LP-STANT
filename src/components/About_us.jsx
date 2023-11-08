import React from 'react'
import {RECORDS} from "../constants/index";
import Records from './Records';
import { POP_UPS2 } from '../constants/index';
import Pop_up2 from './Pop_up2';

function About_us() {
  return (
    <div className='relative w-full h-full font-michroma text-gray-50'> 
    <div className='  bg-[url(bg/bgAbout2.jpg)] bg-cover inset-0 bg-bottom absolute -z-20'> </div>
    <div className=' lg:bg-[url(bg/bgAbout.png)] bg-[length:460px_1000px]  bg-no-repeat -top-24 lg:left-[30rem] xl:left-[55.7rem] 3xl:bg-[length:500px_1100px] 3xl:bg-right 3xl:-top-80 3xl:right-36 inset-0 -z-10 absolute '> </div>

    
        <div className='flex flex-col sm:px-28 px-5 pt-10'> 
            <div id='about' className=''>
                <h1 className='xl:text-[150px] text-6xl md:text-8xl'>Modelo</h1>
            </div>
            <div className='flex lg:flex-row flex-col justify-between'>
                    
             <div  className='flex sm:w-[23.8125rem] pb-20 lg:pb-40 text-[22px] pt-48 font-normal xl:text-justify tracking-wider  '>
                <p className='leading-[2.7rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          
            <div className='flex flex-row text-4xl md:text-5xl lg:text-7xl sm:py-40 py-36 lg:py-0 bg-[url(bg/bgAbout.png)] lg:bg-none bg-contain bg-no-repeat'>
            
                <div className='flex flex-col justify-around  lg:ml-0 xl:mr-10 xl:h-[24rem] lg:h-[34rem] 3xl:h-[28rem]'> 
              
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