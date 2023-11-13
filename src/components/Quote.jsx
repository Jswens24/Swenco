import React from 'react'

const Quote = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold mt-10 p-5'>Get a Quote</h1>
            <p className=' text-center pl-5 text-sm pr-5 font-normal'>We'd love to talk to you!  Drop us a line below and we'll do our best to get back to you within one business day.</p>
            <form className='flex flex-col items-center' action="">
                <input className='rounded border border-black p-3 m-5' type="text" placeholder='First Name (required)' />
                <input className='rounded border border-black p-3 mb-5' type="text" placeholder='Last Name (required)' />
                <input className='rounded border border-black p-3 mb-5' type="text" placeholder='Phone Number (required)' />
                <textarea className='rounded border border-black p-3 mb-5' placeholder='Message' cols="30" rows="10"></textarea>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-auto'>Send</button>
            </form>
        </div>
    )
}

export default Quote