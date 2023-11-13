import React from 'react'
import galler1 from '../media/galler1.jpg';
import galler2 from '../media/galler2.jpg';
import galler3 from '../media/galler3.jpg';
import galler4 from '../media/galler4.jpg';
import galler5 from '../media/galler5.jpg';

const Gallery = () => {
    return (
        <div>
            <img className='p-5 h-1/2' src={galler1} alt="woodframe" />
            <img className='p-5 h-1/2' src={galler2} alt="woodframe" />
            <img className='p-5 h-1/2' src={galler3} alt="building" />
            <img className='p-5 h-1/2' src={galler4} alt="house" />
            <img className='p-5 h-1/2' src={galler5} alt="building" />
        </div>
    )
}

export default Gallery