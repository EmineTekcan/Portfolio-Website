import React from 'react'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import spring from '../assets/spring.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import reactnative from '../assets/reactnative.png'
import git from '../assets/git.png'
import typescript from '../assets/typescript.png'


const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: java
        },
        {
            id: 2,
            src: reactnative
        },
        {
            id: 3,
            src: react
        },
        {
            id: 4,
            src: spring
        },
        {
            id: 5,
            src: javascript
        },
        {
            id: 6,
            src: css
        },
        {
            id: 7,
            src: html
        },
        {
            id: 8,
            src: typescript
        },
        {
            id: 9,
            src: git
        }
    ]
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg m-auto'>
                
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='my-4'>These are the technologies I'have worked with</p>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Experience