import React from 'react';
import bannerImg from '../media/banner.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col items-center text-center'>
            <img src={bannerImg} alt='construction-tools' className='pb-2' />
            <h1 className='font-medium text-4xl p-5'>From Blueprint to Brilliance - Transforming Ideas into Reality</h1>
            <p className='pl-8 pr-8 pt-2 pb-7 font-light'>Step into a world of innovation and precision as we take your ideas from initial concept to the realization of your dreams. Our expert team is dedicated to turning blueprints into brilliant structures that stand as testaments to quality and creativity.</p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-auto">Get a Quote</button>
        </div>
    )
}

export default Banner