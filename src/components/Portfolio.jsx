import React from 'react'
import resim from '../assets/emine.jpg'
import arrayDestruct from '../assets/arrayDestruct.jpg'
const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: arrayDestruct
        },
        {
            id: 3,
            src: arrayDestruct
        },
        {
            id: 4,
            src: arrayDestruct
        },
        {
            id: 5,
            src: arrayDestruct
        },
        {
            id: 6,
            src: arrayDestruct
        },
    ]

    return (
        <div name="portfolio" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-16'>
            <div className='max-w-screen-lg  m-auto p-4 justify-center w-full pb-8'>

                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolios.map(({ id, src }) => (

                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg scale-80'>
                            <img className='rounded-md duration-200 hover:scale-105' alt='' src={src}/>
                            <div className='flex flex-row justify-around items-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Portfolio