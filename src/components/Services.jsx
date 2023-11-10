import React, { useState } from 'react'

const Services = () => {
    const [isCollapsedOne, setIsCollapsedOne] = useState(true);
    const [isCollapsedTwo, setIsCollapsedTwo] = useState(false);
    const [isCollapsedThree, setIsCollapsedThree] = useState(false);
    const [isCollapsedFour, setIsCollapsedFour] = useState(false);

    return (
        <div>
            <h1 className='text-3xl font-semibold mt-10 p-5'>Our Services</h1>
            <button className='font-medium text-xl pb-3 pl-5' onClick={() => setIsCollapsedOne(!isCollapsedOne)}>
                {isCollapsedOne ? '▼ Residential Remodeling' : '► Residential Remodeling'}
            </button>
            {isCollapsedOne && <p className='pl-5 text-sm pr-5 font-normal pb-5'>Transform your existing home into your dream space with our residential remodeling services. We specialize in kitchen and bathroom renovations, basement finishing, and more, ensuring that your living environment suits your evolving needs and style.</p>}
            <hr className=' bg-slate-600 h-0.5 mb-5 ml-3 mr-5' />
            <button className='font-medium text-xl pb-3 pl-5' onClick={() => setIsCollapsedTwo(!isCollapsedTwo)}>
                {isCollapsedTwo ? '▼ New Home Construction' : '► New Home Construction'}
            </button>
            {isCollapsedTwo && <p className='pl-5 text-sm pr-5 font-normal pb-5'>Trust us to bring your vision to life by building a new, custom home that meets your exact specifications. From design to construction, we provide a seamless process that delivers a beautiful, functional, and unique residence.</p>}
            <hr className='bg-slate-600 h-0.5 mb-5 ml-3 mr-5' />
            <button className='font-medium text-xl pb-3 pl-5' onClick={() => setIsCollapsedThree(!isCollapsedThree)}>
                {isCollapsedThree ? '▼ Commercial Renovations' : '► Commercial Renovations'}
            </button>
            {isCollapsedThree && <p className='pl-5 text-sm pr-5 font-normal pb-5'>Enhance the functionality and aesthetic appeal of your business space with our commercial renovation expertise. We work closely with you to revitalize your office, retail store, or commercial facility, optimizing its layout and design to improve productivity and customer experience.</p>}
            <hr className='bg-slate-600 h-0.5 mb-5 ml-3 mr-5' />
            <button className='font-medium text-xl pb-3 pl-5' onClick={() => setIsCollapsedFour(!isCollapsedFour)}>
                {isCollapsedFour ? '▼ General Contracting Services' : '► General Contracting Services'}
            </button>
            {isCollapsedFour && <p className='pl-5 text-sm pr-5 font-normal pb-5'>Simplify your construction projects with our comprehensive general contracting services. We manage every aspect of your job, from project planning and subcontractor coordination to budget management and quality control, ensuring a smooth and successful construction experience.</p>}
        </div>
    );
}

export default Services