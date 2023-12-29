import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Boxicon from 'boxicons'




const Navigation = () => {
        
   
    let [open, setOpen] = useState(false);

    return (
        <>
            <div className='shadow-2xl w-full bg-slate-800 fixed top-0 left-0 z-20'>
                <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
                    {/* logo section */}
                    <div className='font-bold text-2xl text-slate-200 cursor-pointer flex items-center gap-1'>
                        <img src={logo} alt='img' />
                        <span>Rochic</span>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <box-icon name='x'></box-icon> : <box-icon name='menu'></box-icon>
                        }
                    </div>
                    {/* linke items */}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[6rem]' : 'top-[-490px]'}`}>


                        <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl flex justify-between'>
                            <button data-target="home" role='button' tabIndex={0} className= 'scroll-link text-slate-200 hover:text-blue-400 duration-500'>
                                Home
                            </button>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl flex justify-between'>
                            <button data-target="About"  className='scroll-link text-slate-200 hover:text-blue-400 duration-500'>About</button>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl flex justify-between'>
                            <button data-target="Project"  className='scroll-link  text-slate-200 hover:text-blue-400 duration-500'>Project</button>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl flex justify-between'>
                            <button data-target="Portfolio" className='scroll-link  text-slate-200 hover:text-blue-400 duration-500'>Portfolio</button>
                        </li>

                        <button data-target="Contact"  className='scroll-link btn bg-slate-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Contact</button>
                    </ul>

                </div>
            </div>
                 
               
               
                  
        </>
    )
}

export default Navigation
