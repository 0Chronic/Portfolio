import React from 'react'
import { FaLinkedin , FaGithub ,FaInstagram} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import {HiOutLineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
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

                 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'> 
                                 <div className='flex flex-col'> 

                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text '/>

                                 </div>

                                 <div className='flex flex-col'> 

                                 <label className='uppercase text-sm py-2'>Phone Number</label>
                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text '/>

                                 </div>


                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercasse text-sm py-2' htmlFor="">Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email '/>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercasse text-sm py-2' htmlFor="">Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text '/>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercasse text-sm py-2' htmlFor="">Message</label>
                              <textarea className='border-2 rounded-lg border-gray-300 ' rows={10}></textarea>

                              <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </div>
                        </form>

                    </div>

                 </div>



            </div>

            <div className='flex justify-center py-12'>
                <Link href='/'>
                <div>
         
                </div>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Contact