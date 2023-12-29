import React from 'react'
import pro3 from '../../assets/pro3.jpg'
import pro2 from '../../assets/pro2.jpg'
import rev1 from '../../assets/rev1.png'
import rev2 from '../../assets/rev2.png'
import rev3 from '../../assets/rev3.png'
import rev4 from '../../assets/rev4.png'




const Project = () => {
  return (
    <div id='Project'>
       
 
            {/* project1 */}

            <h1 className='text-center font-semibold mt-24 text-5xl'>Our Projects</h1>
                  
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Asthetic Living Room
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn more</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={pro3} />
    </div>
  </div>
</section>
   

   {/* project2 */}


   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 gap-[5rem] py-24 md:flex-row flex-col items-center">
       
   <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={pro2} />
    </div>

    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Modren Living and study lounge
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn more</button>
        
      </div>
    </div>
    
  </div>
</section>
          
<section className="text-gray-600 body-font bg-slate-500">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <img src={rev1} alt='img' />
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <img src={rev2} alt='img' />
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <img src={rev3} alt='img' />
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <img src={rev4} alt='img' />
      </div>
      
    </div>
  </div>
</section>




    </div>
  )
}

export default Project
