import React from 'react';
import choose1 from '../media/chooseUs1.jpg';
import choose2 from '../media/chooseUs2.jpg';
import choose3 from '../media/chooseUs3.jpg';

const ChooseUs = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-10 p-5'>Why choose us</h1>
            <div>
                <img className='p-5' src={choose1} alt="grinder" />
                <h3 className='font-bold p-5'>Expertise</h3>
                <p className='pl-5 text-sm pr-5 font-normal pb-5'>Our extensive experience and knowledge in construction ensure top-notch quality and precision in every project</p>
            </div>
            <div>
                <img className='p-5' src={choose2} alt="blueprints" />
                <h3 className='font-bold p-5'>Reliability</h3>
                <p className='pl-5 text-sm pr-5 font-normal pb-5'>Count on us to deliver on time and within budget, providing peace of mind for your construction needs.</p>
            </div>
            <div>
                <img className='p-5' src={choose3} alt="concrete" />
                <h3 className='font-bold p-5'>Commitment</h3>
                <p className='pl-5 text-sm pr-5 font-normal pb-5'>We are dedicated to understanding your unique vision and going the extra mile to exceed your expectations, making your project our priority</p>
            </div>
        </div>
    )
}

export default ChooseUs