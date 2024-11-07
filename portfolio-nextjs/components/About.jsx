import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16 '>
       <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
       <div className='col-span-2'>
        <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-gray-600'>// I am not your normal developer</p>

        <p className='py-2 text-gray-600'>I have spent the last 3 years in learning in web developments.I have always had a knack technology and working with computers. In 2019 I started working with HTML & CSS to make some minor edits on a small bussiness website that I was operating . What I thought was just a few small edits turned into a love for programming</p>
        <p className='py-2 text-gray-600'>Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript and was even more enthused with making website interactive. then i start finding freelancing for e-commerce. I I am now spending my time building projects with React Js , Firebase , and learning new technologies</p>
        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
       </div>

       <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
        <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       </div>
    </div>
  )
}

export default About