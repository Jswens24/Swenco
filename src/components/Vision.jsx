import React from 'react';
import visionImg from '../media/vision.jpg'

const Vision = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-10 p-5'>Our Vision</h1>
            <p className='pl-5 text-sm pr-5 font-normal pb-5'>At Swenco, we aspire to be the benchmark of construction excellence, setting new standards for innovation, quality, and client satisfaction. Our vision is to create lasting, harmonious spaces that enhance lives and communities, all while embodying the values of integrity, commitment, and a relentless pursuit of perfection. With a dedication to sustainable practices and a passion for pushing the boundaries of design, we’re committed to shaping the future of construction and making dreams a reality, one project at a time.</p>
            <img className='p-5' src={visionImg} alt="construction belt" />
        </div>
    )
}

export default Vision