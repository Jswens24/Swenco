import React from 'react'

const Quote = () => {
    return (
        <div id='contact' className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold mt-10 p-5 md:text-5xl'>Get a Quote</h1>
            <p className=' text-center pl-5 text-sm pr-5 font-normal md:text-base'>We'd love to talk to you!  Drop us a line below and we'll do our best to get back to you within one business day.</p>
            <form action="https://formsubmit.co/jessica.swenson.dev@gmail.com" method="POST" className='flex flex-col items-center'>

                <input type="hidden" name="_subject" value="[SWENCO] Quote Request!" />
                <input type="hidden" name="_autoresponse" value="Thank you for reaching out, we will get back with you shortly." />
                <input type="hidden" name="_next" value="https://swenco.construction" />

                <div className='flex flex-col items-center '>
                    <input className='rounded border border-black p-3 m-5 w-full' name='name' type="text" placeholder='Name (required)' required />
                    <input name='phoneNumber' className='rounded border border-black p-3 mb-5 w-full' type="text" placeholder='Phone Number (required)' minLength={10} required />
                    <input name='email' className='rounded border border-black p-3 mb-5 w-full' type="email" placeholder='Email (required)' required />
                </div>
                <textarea name='message' required className='rounded border border-black p-3 mb-5' placeholder='Message' cols="30" rows="10"></textarea>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-auto md:text-xl'>Send</button>
            </form>
        </div>
    )
}

export default Quote