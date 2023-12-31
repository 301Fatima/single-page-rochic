import React from 'react'
import Background from '../assets/Background.jpg'

const Bg_img = () => {
  return (
    <div>
        <div className='relative'>
            <div style={{ backgroundImage:`url(${Background})`}} className='bg-local bg-no-repeat bg-cover mt-[6.4rem] h-[800px]' >
            <section className="text-white body-font pt-[10rem]">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-start">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">The full-service <br />interior design <br />studio
                                </h1>
                                <p className="mb-8 leading-relaxed"> Leading the digital transformation of railway With decades of maintenance
                        of way expertise and experience, no one knows the rail like Loram. Today,
                        analytics and intelligence with real-time monitoring and the most
                        precise application of maintenance of way activities.</p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn more</button>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            </div>
    </div>
  )
}

export default Bg_img
