import React from 'react'
import logo from '../media/Swenco.png'

const NavBar = () => {
    return (
        <div className='flex flex-col justify-around items-center pb-3 pt-3 md:text-2xl md:fixed md:top-0 md:bg-white md:w-full md:pb-0'>
            <div className='flex sm:w-auto  justify-around items-center md:w-full md:pl-20 md:pr-20'>
                <img className='h-16 sm:h-28' src={logo} alt='logo' />
                <div className='flex justify-around sm:w-full sm:p-10'>
                    <p onClick={() => {
                        const anchor = document.querySelector('#home')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} className='cursor-pointer hover:underline p-3'>Home</p>
                    <p onClick={() => {
                        const anchor = document.querySelector('#services')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} className='cursor-pointer hover:underline p-3'>Services</p>
                    <p onClick={() => {
                        const anchor = document.querySelector('#about')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} className='cursor-pointer hover:underline p-3'>About</p>
                    <p onClick={() => {
                        const anchor = document.querySelector('#contact')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} className='cursor-pointer hover:underline p-3'>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar