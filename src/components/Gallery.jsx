import React from 'react'
import galler1 from '../media/galler1.jpg';
import galler2 from '../media/galler2.jpg';
import galler3 from '../media/galler3.jpg';
import galler4 from '../media/galler4.jpg';
import galler5 from '../media/galler5.jpg';

const Gallery = () => {
    return (
        <div className='md:mb-60 md:flex md:items-center md:w-full' >
            <img className='p-5 h-2/5 md:w-4366' src={galler1} alt="woodframe" />
            <div className='md:flex md:flex-wrap md:justify-evenly m:w-3/5'>
                <img className='p-5 h-1/2 md:w-2/5' src={galler2} alt="woodframe" />
                <img className='p-5 h-1/2 md:w-2/5' src={galler3} alt="building" />
                <img className='p-5 h-1/2 md:w-2/5' src={galler4} alt="house" />
                <img className='p-5 h-1/2 md:w-2/5' src={galler5} alt="building" />
            </div>
        </div>
    )
}

export default Gallery