import React from 'react'
import port1 from '../../assets/port1.jpg'
import port2 from '../../assets/port2.jpg'
import port3 from '../../assets/port3.jpg'
import port4 from '../../assets/port4.jpg'
import port5 from '../../assets/port5.jpg'
import port6 from '../../assets/port6.jpg'



const Portfolio = () => {
  return (
    <div id='Portfolio'>
      
    <section className="text-gray-600 body-font bg-slate-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Rochic Portfolio</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port1} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port2} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black  mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port3} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black  mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port4} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black  mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port5} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={port6}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-200 opacity-0 hover:opacity-75">
           
            <h1 className="title-font text-lg font-medium text-black mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </div>
  )
}

export default Portfolio
