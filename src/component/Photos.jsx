import React from 'react'
import house from '../assets/house.jpg'
import sample from '../assets/sample.jpg'
import nordic from '../assets/nordic.jpg'
import inside from '../assets/inside.jpg'
import inside2 from '../assets/inside2.jpg'
import inspired from '../assets/inspired.jpg'

const gellary = () => {
  return (
    <div>
     

<section className="text-gray-400 top-[30rem] bg-white body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-slate-900 lg:w-1/3 lg:mb-0 mb-4">Our Posts</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-slate-600 text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={inside} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={inside2} />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={house} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={sample} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={inspired} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={nordic} />
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default gellary
