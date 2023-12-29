import React from 'react'
import Background from '../assets/Background.jpg'

const Bg_img = () => {
  return (
    <div>
       <div className='relative'>
                <img src={Background} alt='img' className='bg-fixed bg-no-repeat bg-cover mt-[6.4rem] opacity-95 blur-[1px]' />

                <div className='h-[10rem] md:w-[30rem] sm:w-full absolute z-10 lg:mt-[-35rem] lg:ml-[10rem] md:ml-[10rem] md:mt-[-23rem] sm:ml-6 sm:mt-[-18rem] '>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-lg font-semibold leading-tight text-white'>
                        The full-service <br />interior design <br />studio
                    </h1>
                    <br></br>
                    <p className='text-lg leading-5 text-white font-thin'>
                        Leading the digital transformation of railway With decades of maintenance
                        of way expertise and experience, no one knows the rail like Loram. Today,
                        analytics and intelligence with real-time monitoring and the most
                        precise application of maintenance of way activities.
                    </p>
                    <br></br>
                    <button className='btn bg-slate-600 text-white font-semibold px-3 py-1 rounded'>
                        Book Now
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Bg_img
