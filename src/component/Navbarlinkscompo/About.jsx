import React from 'react'
import Ab from '../../assets/Ab.jpg'
import female1 from '../../assets/female1.jpg'
import female2 from '../../assets/female2.jpg'
import male1 from '../../assets/male1.jpg'
import Boxicon from 'boxicons'
import male2 from '../../assets/male2.jpg'

const About = () => {
  return (
    <div id='About'>
           <div className='h-[350px] left-0 right-0 bg-slate-900'>
              <h1 className='top-5 text-9xl font-extrabold flex justify-center opacity-45 tracking-normal'>ABOUT</h1>
              <h2 className='mt-[-5rem] flex justify-center text-5xl font-semibold absloute text-white'>Our Company</h2>
           </div>
           <div className='flex justify-center bg-slate-100'>
           <img src={Ab} className="img-container shadow-md  h-[400px] w-[60rem] rounded-xl mt-[-12rem]" alt="..."/>
           </div>

          <section className="text-gray-600 body-font bg-slate-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p className="leading-relaxed text-lg text-black">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.
        Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span className="inline-block h-1 w-3/4 rounded bg-indigo-500 mt-8 mb-6" />
      <p className="text-black font-bold text-xl">CEO</p>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font bg-slate-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={male2} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
            <h3 className="text-gray-500 mb-3">Development manager</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
              <box-icon type='solid' name='chat' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon type='logo' name='facebook' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 ">
              <box-icon name='twitter' type='logo' color='#716c6c' ></box-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={female1}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Alper Kamu</h2>
            <h3 className="text-gray-500 mb-3">graphic designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
              <box-icon type='solid' name='chat' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon type='logo' name='facebook' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon name='twitter' type='logo' color='#716c6c' ></box-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={female2} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Atticus Finch</h2>
            <h3 className="text-gray-500 mb-3">manager</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
              <box-icon type='solid' name='chat' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon type='logo' name='facebook' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon name='twitter' type='logo' color='#716c6c' ></box-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={male1} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Henry Letham</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
              <box-icon type='solid' name='chat' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon type='logo' name='facebook' color='#716c6c'></box-icon>
              </a>
              <a className="ml-2 text-gray-500">
              <box-icon name='twitter' type='logo' color='#716c6c' ></box-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



                 


                 

    </div>
  )
}

export default About
