import React from 'react'
import resim from '../assets/emine.jpg'
import arrayDestruct from '../assets/arrayDestruct.jpg'
import gotravel from '../assets/gotravel.png'
import scrape from '../assets/scrape.jpg'
import istatiksel from '../assets/istatiksel.png'
import shop from '../assets/shop.png'
import todo from '../assets/todo.png'
import personal from '../assets/personal.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: gotravel,
            link:"https://github.com/EmineTekcan/GoTravel"
        },
        {
            id: 2,
            src: scrape,
            link:"https://github.com/EmineTekcan/TwitterScrapingProject"
        },
        {
            id: 3,
            src: istatiksel,
            link:"https://github.com/EmineTekcan/-Statistical-Programming"
        },
        {
            id: 4,
            src: shop,
            link:"https://github.com/EmineTekcan/Shopping-App"
        },
        {
            id: 5,
            src: todo,
            link:"https://github.com/EmineTekcan/Todo-App"
        },
        {
            id: 6,
            src: personal,
            link:"https://github.com/EmineTekcan/Portfolio-Website/tree/master"
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

                    {portfolios.map(({ id, src,link }) => (

                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg scale-80'>
                            <img className='rounded-md duration-200 hover:scale-105 w-full h-40 self-center' alt='' src={src} />
                            <div className='flex flex-row justify-around items-center'>
                                <a href='https://expo.dev/accounts/eminetekcan/projects/go-travel/builds/30b34bb4-ea9f-4813-ad3b-9172e38a0eb3'><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                                <a target='_blank' href={link}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Portfolio