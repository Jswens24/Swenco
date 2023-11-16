import React from 'react';
import bannerImg from '../media/banner.jpg'

const Banner = () => {
    return (
        <div id='home' className='flex flex-col items-center text-center md:mt-20'>
            <img src={bannerImg} alt='construction-tools' className='pb-2 md:h-2/5' />
            <h1 className='font-medium text-4xl p-5 md:pt-20 md:text-6xl'>From Blueprint to Brilliance - Transforming Ideas into Reality</h1>
            <p className='pl-8 pr-8 pt-2 pb-7 font-light md:text-lg md:px-60'>Step into a world of innovation and precision as we take your ideas from initial concept to the realization of your dreams. Our expert team is dedicated to turning blueprints into brilliant structures that stand as testaments to quality and creativity.</p>
            <button onClick={() => {
                const anchor = document.querySelector('#contact')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-auto md:text-xl md:mb-60">Get a Quote</button>
        </div>
    )
}

export default Banner