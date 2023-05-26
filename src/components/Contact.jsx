import React from 'react'

const Contact = () => {
    
    return (
        <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen'>
            <div className='max-w-screen-lg w-full text-white flex flex-col m-auto px-4 md:py-24'>
                <div>
                    <p className='text-4xl inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div>
                    <form
                        className='flex flex-col gap-3'
                        action="https://getform.io/f/70fef039-44fa-4030-b3db-cd70dfc3ebee"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className=' w-full bg-transparent rounded-md md:h-12 sm:h-10 p-2 border-2'
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Enter your email'
                            className='w-full bg-transparent rounded-md md:h-12 sm:h-10 p-2 border-2'
                        />
                        <textarea
                            name='message'
                            type="text"
                            placeholder='Enter your message'
                            className='w-full h-40 bg-transparent rounded-md md:h-52 p-2 border-2'
                        />
                        <button
                            type="submit"
                            className='bg-gradient-to-r from-[#0033cc] to-[#6666ff] w-2/4 self-center h-10 rounded-md mb-2 md:h-14'
                        >
                            Lets Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact