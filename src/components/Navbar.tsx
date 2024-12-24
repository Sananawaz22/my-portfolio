import Contact from '@/app/contact/page';
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="container pt-8">
       <div className="flex justify-between items-center ">
        
        <div className="text-2xl font-medium text-blue-700">Sana Nawaz</div>


        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink "><a href="#">Home</a></li>
           <li className="menuLink"><a href='about'>About</a></li>
           
           <li className="menuLink"><a href='projects'>Projects</a></li>
           <li className="menuLink"><a href="contact">Contact</a></li>
        </ul>
        </div>
        </div>
        
  )
}

export default Navbar