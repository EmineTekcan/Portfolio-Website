import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Admin from '../assets/emine.jpg'
import { Link } from 'react-scroll'

const Home = () => {

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-3/5 text-white'>
                    <h2 className='text-4xl font-bold sm:text-6xl'>I'm Software Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Currently working mostly with React Native to
                        build mobile apps. I am more focused in back-end
                        technologies but also have useful experience with front-end
                        technologies. Always trying to apply the concepts and the experience
                        from Computer science in softwares in order to solve specific problems
                        and make life easier.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500}>
                            <button
                                className='flex group text-white w-fit px-6 py-3 my-2 rounded-md
                        items-center hover:scale-105
                         bg-gradient-to-r from-[#0033cc] to-[#6666ff]
                         '>
                                Portfolio
                                <span className='ml-3 group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={30} />
                                </span>
                            </button></Link>

                    </div>
                </div>
                <div>
                    <img alt="Admin" src={Admin} className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>

            </div>
        </div>
    )
}

export default Home