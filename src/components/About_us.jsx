import React from 'react'
import {RECORDS} from "../constants/index";
import Records from './Records';
import { POP_UPS2 } from '../constants/index';
import Pop_up2 from './Pop_up2';

function About_us() {
  return (
    <div className='relative w-full h-full font-michroma text-gray-50'> 
    <div className='  bg-[url(bg/bgAbout2.jpg)] bg-cover inset-0 bg-bottom absolute  -z-20'> </div>
    <div className='bg-[url(bg/bgAbout.png)] bg-contain bg-no-repeat inset-0 bg-right absolute  -z-20'> </div>

    
        <div className='flex flex-col sm:px-28 px-5 '> 
            <div id='about' className=''>
                <h1 className='sm:text-9xl text-5xl'>Modelo</h1>
            </div>
            <div className='flex flex-row justify-end lg:text-8xl'>
                <div className='flex flex-col'> 
            {POP_UPS2.map(e => (
                <Pop_up2 name = {e.name} text = {e.text}   />
            ))}
            </div>
            </div>
            <div  className='flex sm:w-[23.9rem] pb-40 sm:text-xl text-sm  [word-spacing:0.9rem]	 font-normal align-middle '>
                <p className='leading-[2.7rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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