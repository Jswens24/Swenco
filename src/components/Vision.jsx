import React from 'react';
import visionImg from '../media/vision.jpg'

const Vision = () => {
    return (
        <div id='about' className='md:mt-72 md:flex md:items-center md:w-full md:h-72 md:mb-60'>
            <div className='md:flex md:flex-col md:px-10'>
                <h1 className='text-3xl font-semibold mt-10 p-5 md:text-5xl'>Our Vision</h1>
                <p className='pl-5 text-sm pr-5 font-normal pb-5 md:text-lg md:px-10'>At Swenco, we aspire to be the benchmark of construction excellence, setting new standards for innovation, quality, and client satisfaction. Our vision is to create lasting, harmonious spaces that enhance lives and communities, all while embodying the values of integrity, commitment, and a relentless pursuit of perfection. With a dedication to sustainable practices and a passion for pushing the boundaries of design, we’re committed to shaping the future of construction and making dreams a reality, one project at a time.</p>
            </div>
            <img className='p-5 md:w-auto md:h-72 md:mt-10 ' src={visionImg} alt="construction belt" />
        </div>
    )
}

export default Vision