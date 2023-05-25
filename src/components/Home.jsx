import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row'> 
                <div>
                    <h2>I'm React and React Native Developer</h2>
                    <p>
                        Currently working mostly with React Native to
                        build mobile apps. I am more focused in back-end
                        technologies but also have useful experience with front-end
                        technologies. Always trying to apply the concepts and the experience
                        from Computer science in softwares in order to solve specific problems
                        and make life easier.
                    </p>
                    <div>
                        <button>
                            Portfolio
                            <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home