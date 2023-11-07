import React from 'react'
import logo from '../media/Swenco.png'

const NavBar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div className='flex w-auto justify-around items-center'>
                <img className='h-28' src={logo} alt='logo' />
                <div className='flex justify-around w-full p-10'>
                    <p className='cursor-pointer hover:underline p-3'>Home</p>
                    <p className='cursor-pointer hover:underline p-3'>Services</p>
                    <p className='cursor-pointer hover:underline p-3'>About</p>
                    <p className='cursor-pointer hover:underline p-3'>Contact</p>
                </div>
            </div>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-auto">Get a Quote</button>
        </div>
    )
}

export default NavBar