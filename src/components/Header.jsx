import React from 'react'
import {NAV} from "../constants/index";
import Navbar from './Navbar';

function Header() {
  return (
    <div className='bg-[url(bg/bgHeader.jpg)] bg-cover bg-top font-michroma py-6'>
        <div className='flex flex-row justify-around py-4 align-middle items-center lg:px-20 '>
        <img src="simbol.svg" alt="" className='w-16 h-10 sm:w-44 sm:h-24'/>
        {NAV.map(e => (
            <Navbar name = {e.name} go = {e.go} />
        ))} 
        <div className='text-gray-50 rounded-lg border-gray-50 border sm:w-36 sm:h-12  w-14 h-6 text-[0.5rem] flex justify-center text-center items-center'>
            <a href='#contact'>Contato</a> 
        </div>
        </div>
        <div className='flex flex-col text-gray-50 justify-center text-start px-8 py-40'>
            <div className='ml-9'> 
                <h1 className='sm:text-8xl '>“Building Innovation,</h1>
                <h1 className='sm:text-8xl '>Shaping the Future”</h1>
            </div>
            <div className='rounded-lg border-gray-50 border h-12 px-2 flex justify-center items-center m-9 text-center w-52 '> 
                <p>Conheça o futuro</p>
            </div>
        </div>
    </div>
  )
}

export default Header