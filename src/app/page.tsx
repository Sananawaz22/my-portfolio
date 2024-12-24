import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Contact from "./contact/page";
import Projects from "@/components/Projects";
import About from "@/components/About";



export default function Home() {
  return (
    
    <main>
    <Navbar />
    <Hero />
    <About />
    <Projects/>
     <Contact />
    <Footer/>
    </main>
    
  );


}