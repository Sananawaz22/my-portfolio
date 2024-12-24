
export default function Contact() {
    return (
          
      <section className="py-16 bg-black-100" id="contact">
        <h2 className="text-3xl font-semibold text-center text-blue-700">Contact</h2>
    
        
            
             
        <form className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-700">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-700">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-blue-700">Message</label>
            <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md mt-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md">Submit</button>
        </form>
      </section>
    );
  }