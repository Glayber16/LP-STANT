import React from 'react'
import {NAV} from "../constants/index";
import Navbar from './Navbar';

function Header() {
  return (
    <div className='bg-[url(/bg/bgHeader.jpg)] 3xl:bg-[length:2000px_830px] bg-cover bg-top font-michroma py-6 pb-20'>
        <div className='flex flex-row justify-around py-4 align-middle items-center xl:px-5'>
        <img src="simbol.svg" alt="" className='w-16 h-10 sm:w-[10.7rem] sm:h-[6.7rem]'/>
        <div className='flex flex-row justify-around '> 
        {NAV.map(e => (
            <Navbar name = {e.name} go = {e.go} />
        ))} 
        </div>
        <div className='text-gray-50 rounded-lg cursor-pointer	 border-gray-50 border lg:w-40 sm:h-12 md:w-20  w-12 h-6 text-[0.4rem] sm:text-xs lg:text-base flex justify-center text-center items-center'>
            <a href='#contact'>Contato</a> 
        </div>
        </div>
        <div className='flex flex-col text-gray-50 justify-center text-start px-8 mt-48'>
            <div className='ml-9 leading-10 tracking-[0.5rem] '> 
                <h1 className='sm:text-7xl lg:text-[80px] mb-10'>“Building Innovation,</h1>
                <h1 className='sm:text-7xl lg:text-[80px] mb-10'>Shaping the Future”</h1>
            </div>
            <div className='rounded-lg border-gray-50 border h-12 px-2 flex justify-center items-center m-9 text-center w-[13.15rem] '> 
                <p className='leading-6'>Conheça o futuro</p>
            </div>
        </div>
    </div>
  )
}

export default Header