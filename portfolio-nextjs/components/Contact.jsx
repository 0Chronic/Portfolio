import React from 'react'
import { FaLinkedin , FaGithub ,FaInstagram} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/*left*/}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full '>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                        </img>
                    </div>
                    <div>
                        <h2 className='py-2'>Kyaw Ye Naing</h2>
                        <p>Front-End Developer</p>
                        <p>I am available for freelance or full-time positions. Contact me and Let's talk</p>
                    </div>

                    <div>
                    <p className='uppercase '>Contact With Me</p>
                    <div className='flex items-center justify-between py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedin/>
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



                 {/*right*/}



            </div>

        </div>

    </div>
  )
}

export default Contact