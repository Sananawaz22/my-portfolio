
export default function About() {
    return (
      <section className="min-h-screen bg-black-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-blue-900">About Me</h1>
          <p className="mt-4 text-lg text-white-700">
            Hello! I'm [Sana Nawaz], a passionate web developer. I love building modern and
            interactive web applications using the latest technologies. Currently, I'm focusing on
            improving my skills in full-stack development and user experience design.
          </p>
          <p className="mt-4 text-lg text-white-700">
            I started coding because I was always fascinated by how websites work and how I could
            create things that users can interact with. Over time, I’ve honed my skills in HTML, CSS,
            JavaScript, and popular frameworks like React and Next.js.
          </p>
          
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-800">Technologies I Use</h2>
            <div className="flex justify-center gap-6 mt-4">
              <div className="text-center">
                <span className="block text-4xl">⚡</span>
                <p className="mt-2">JavaScript</p>
              </div>
              <div className="text-center">
                <span className="block text-4xl">⚡</span>
                <p className="mt-2">React</p>
              </div>
              <div className="text-center">
                <span className="block text-4xl">⚡</span>
                <p className="mt-2">Next.js</p>
              </div>
              <div className="text-center">
                <span className="block text-4xl">⚡</span>
                <p className="mt-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}