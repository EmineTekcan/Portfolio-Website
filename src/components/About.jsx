import React from 'react'

const About = () => {

  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          My name is Emine. I'm studying computer engineering.
          I am working on Java, React and React Native and I am implementing
          projects using these technologies
        </p>

        <br />
        <p className='text-xl'>
          Currently working mostly with React Native to build mobile apps.
          I am more focused in back-end technologies but also have useful experience with
          front-end technologies. Always trying to apply the concepts and the experience from
          Computer science in softwares in order to solve specific problems and make life easier.
        </p>
      </div>
    </div>
  )
}

export default About