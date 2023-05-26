import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    const [nav, setNav] = useState(false)

    return (
        <div className='flex w-full h-20 bg-black items-center justify-between text-white fixed px-6'>
            <div>
                <h1 className='text-5xl font-greatVibes'>Developer</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer
                    capitalize text-gray-400 hover:scale-105'>{link}</li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-400 z-10  md:hidden " >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col absolute w-full h-screen top-0 left-0 items-center justify-center
                bg-gradient-to-b from-black to-gray-800 md:hidden '>
                    {links.map(({ link, id }) => (
                        <li key={id} className='px-4 cursor-pointer
                        capitalize text-gray-400 hover:scale-105 text-4xl my-5'>{link}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar