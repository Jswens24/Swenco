import React from 'react';
import insta from '../media/social-media/insta.png'
import facebook from '../media/social-media/fb.png'
import xLogo from '../media/social-media/X-Logo.png'


const Footer = () => {
    return (
        <div className='mt-10 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold p-2'>Swenco Construction</h2>
                <p className='pl-5 text-sm pr-5 font-normal pb-5 text-center'>Your Dream, Our Dedication - Building Tomorrow Together</p>
            </div>
            <div className='w-3/5 flex justify-around mb-5'>
                <img className='h-8' src={insta} alt="instagram" />
                <img className='h-8' src={facebook} alt="facebook" />
                <img className='h-6' src={xLogo} alt="x" />
            </div>
            <p className='pl-5 text-sm pr-5 font-normal pb-10 text-center'>Designed by SLC Site Sculptors©️</p>
        </div>
    )
}

export default Footer