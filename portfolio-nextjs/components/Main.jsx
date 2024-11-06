import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn , FaGithub, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi,<span className='text-[#5651e5]'> Kyaw Ye Naing</span></h1>
                <h1 className='py-4 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto text-lg'>I'm a front-end web developer specializing in building (and occasionally designing)exceptional digital experiences. Currently,I'm focused on building reponsive front-end web applications while learning back-end technologies</p>
                <div className='flex items-center  justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main