import React from 'react'
import {RECORDS} from "../constants/index";
import Records from './Records';


function About_us() {
  return (
    <div className='relative w-full h-full'> 
    <div className='bg-[url(bg/bgAbout2.jpg)] absolute inset-0 bg-cover bg-bottom -z-20 '> </div>
    <div className='bg-[url(bg/bgAbout.png)] absolute inset-0 bg-contain bg-no-repeat bg-right-top  -z-10'> </div>
    <div className='font-michroma text-gray-50'> 
        <div className='flex flex-col sm:px-28 px-5'> 
            <div id='about' className=''>
                <h1 className='sm:text-9xl text-5xl'>Modelo</h1>
            </div>
            <div className='flex flex-row justify-end text-8xl'>
                <div className='flex flex-col'>
                    <div className=''> 
                        <button>1</button>
                    </div>
                    <button>2</button>
                    <button>3</button> 
                </div>
            </div>
            <div  className='flex sm:w-80 pb-40 sm:text-xl text-sm leading-10 font-thin'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-xl'>Our Track Record:</h2>
                <div className='flex flex-row py-6'>
                    {RECORDS.map(e => (
                        <Records number = {e.number} description = {e.description} /> 
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About_us