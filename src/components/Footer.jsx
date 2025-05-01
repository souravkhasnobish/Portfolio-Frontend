import React from 'react'
import {FaSquareInstagram,FaLinkedin,FaGithub,FaTelegram } from "react-icons/fa6"
const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
     <div className=' flex flex-col items-center justify-center'>
      <div className='flex space-x-4'>
        <FaSquareInstagram size={24}/>
        <FaLinkedin size={24}/>
        <FaGithub size={24}/>
        <FaTelegram  size={24}/>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
       <p className='text-sm'>&copy; 2024 All rights reserved.</p>
       <p className='text-sm'>Supportive Partner ❤️ Sourav</p>
       
       
      </div>
     </div>
    </div>
    </footer>
    
    </>
  )
}

export default Footer
