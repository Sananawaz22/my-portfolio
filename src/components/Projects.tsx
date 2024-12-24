import React from 'react'

const Projects = () => {
  return (
    <div>
        {/* Projects Section */}
      <section id="projects" className="bg-black-200 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Project 1 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-semibold mb-4">Project 1</h3>
              <div className="relative">
               <img src="/project1.jpg"
               alt="project"
               width={900}
               height={900}
              className="object cover"/>
               
              
         
              <p className="text-white-700">A web application I built using React and Node.js. It allows users to manage their tasks and collaborate with others.</p>
               
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-semibold mb-4">Project 2</h3>
              <div className="relative">
               <img src="/project2.jpg"
               alt="project"
               width={900}
               height={900}
              className="object cover"/>
               
              <p className="text-white-700">A portfolio website I created using Next.js and Tailwind CSS to showcase my skills and projects.</p>
            </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-semibold mb-4">Project 3</h3>
              <div className="relative">
               <img src="/project3.jpg"
               alt="project"
               width={900}
               height={900}
              className="object cover"/>
              <p className="text-white-700">An e-commerce website built using React and Firebase. It includes product listings, a shopping cart, and payment integration.</p>
            </div>
            </div>

            {/* Project 4 */}
            <div className="bg-black p-6 rounded-lg shadow-lg ">
            <h3 className="text-4xl font-semibold mb-14">Project4</h3> 
            <div className="relative">
               <img src="/project4.jpg"
               alt="project"
               width={900}
               height={900}
              className="object cover"/>
            <p className="text-white-700">Technologies Used: Next.js,  HTML, CSS, Tailwind CSS, </p>
            
               </div>
                </div> 
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects