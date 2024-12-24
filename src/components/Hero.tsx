import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="flex-cols justify-center items-center min-h-screen ">
    <div className="container max-auto ">
      <Image
         src="/picture.jpg"
         alt="pictute"
         width={300}
         height={300}
         className="rounded-full"/>
    </div>
    

    
  <div className="container mx-auto flex px-10 py-8 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2  md:-10 flex flex-col md:items-center md:text-left mb:10 md:mb-0 items-center ">
    
         <h1 className="text-4xl font-bold justify-between flex reveal-text text-blue-700">Hey!!<span>S</span><span>a</span><span>n</span><span>a</span><span>N</span><span>a</span><span>w</span> <span>a</span><span>z</span></h1>
         <br></br>
        <p className="text-lg text-center justify-between flex max-w-md">A passionate web developer exploring the world of coding and creativity. This is a simple Next.js application for practice.</p>
        
  
        
      <br></br>
        <div className="flex justify-center">
      <button  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a  href="button">Button</a>
          
        </button>
        
        
           
        
      
  
          
        
      
          
          
      </div>
    </div>
    </div>
    </div>
  


  )
}

    
    export default Hero
      
  
   
    
  
