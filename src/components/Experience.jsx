import React from 'react'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import spring from '../assets/spring.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import reactnative from '../assets/reactnative.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'


const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: java,
            title: "JAVA",
            style: "shadow-red-500"
        },
        {
            id: 2,
            src: reactnative,
            title: "REACT NATİVE",
            style: "shadow-blue-500"
        },

        {
            id: 4,
            src: spring,
            title: "SPRING BOOT",
            style: "shadow-green-500"
        },
        {
            id: 5,
            src: javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 6,
            src: css,
            title: "CSS",
            style: "shadow-white"
        },
        {
            id: 7,
            src: html,
            title: "HTML",
            style: "shadow-red-500"
        },
        {
            id: 8,
            src: typescript,
            title: "TYPESCRIPT",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: tailwind,
            title: "TAILWIND CSS",
            style: "shadow-sky-500"
        },
        {
            id: 3,
            src: react,
            title: "REACT",
            style: "shadow-blue-500"
        },
    ]
    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                    {experiences.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-6">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience