import React from 'react';
import insta from '../media/social-media/insta.png'
import facebook from '../media/social-media/fb.png'
import xLogo from '../media/social-media/X-Logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-10 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold p-2'>Swenco Construction</h2>
                <p className='pl-5 text-sm pr-5 font-normal pb-1 text-center'>Your Dream, Our Dedication - Building Tomorrow Together</p>
                <p className='pl-5 text-sm pr-5 font-normal pb-4 text-center'>(555) 555-5555</p>
            </div>
            <div className='w-3/5 flex justify-around mb-5'>
                <Link to='https://www.instagram.com/'>
                    <img className='h-8' src={insta} alt="instagram" />
                </Link>
                <Link to='https://www.facebook.com/'>
                    <img className='h-8' src={facebook} alt="facebook" />
                </Link>
                <Link to='https://twitter.com/'>
                    <img className='h-6' src={xLogo} alt="x" />
                </Link>
            </div>
            <p className='pl-5 text-sm pr-5 font-normal mb-10 text-center'>Designed by <Link to='https://jessica-swenson.com'>SLC Site Sculptors LLC©️</Link></p>
        </div >
    )
}

export default Footer