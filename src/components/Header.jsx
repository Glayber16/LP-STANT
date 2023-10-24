import React from 'react'
import {NAV} from "../constants/index";
import Navbar from './Navbar';

function Header() {
  return (
    <div className='bg-[#030A6233] font-michroma'>
        <div className='flex flex-row'>
        <img src="simbol.svg" alt="" />
        {NAV.map(e => (
            <Navbar name = {e.name} go = {e.go} />
        ))} 
        <div className='text-gray-50'>
            <a href='#'>Contato</a> 
        </div>
        </div>
        <div className='flex flex-col text-gray-50 justify-center text-start'>
            <div className='ml-9'> 
                <h1 className='text-7xl '>“Building Innovation,</h1>
                <h1 className='text-7xl '>Shaping the Future”</h1>
            </div>
            <div className='rounded-lg border-gray-50 border h-8 px-2 flex justify-center items-center m-9 text-center w-2/12'> 
                <p>Conheça o futuro</p>
            </div>
        </div>
    </div>
  )
}

export default Header