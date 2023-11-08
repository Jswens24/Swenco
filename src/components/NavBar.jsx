import React from 'react'
import logo from '../media/Swenco.png'

const NavBar = () => {
    return (
        <div className='flex flex-col justify-around items-center pb-3 pt-3'>
            <div className='flex sm:w-auto justify-around items-center'>
                <img className='h-16 sm:h-28' src={logo} alt='logo' />
                <div className='flex justify-around sm:w-full sm:p-10'>
                    <p className='cursor-pointer hover:underline p-3'>Home</p>
                    <p className='cursor-pointer hover:underline p-3'>Services</p>
                    <p className='cursor-pointer hover:underline p-3'>About</p>
                    <p className='cursor-pointer hover:underline p-3'>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar