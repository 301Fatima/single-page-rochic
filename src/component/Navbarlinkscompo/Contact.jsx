import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form data after submission if needed.
    setFormData({ name: '', email: '', message: '' });
  };
  
  


  return (
    <div id='Contact'>
    <section className="text-black bg-slate-200   body-font relative">
      <h1 className='text-4xl px-[10rem] py-12'>Contact Us</h1>
      <div className="container px-5 mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Your form inputs */}
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-600  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-20 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="pb-[5rem]  w-full">
            <button
              type="submit"
              className="flex mt-4 text-white bg-indigo-500 border-0 py-2
               px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
      </div>
  );
};

export default Contact;
