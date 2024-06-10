import React, {useState} from 'react'
import Logo from '../assets/images/logo.png'
import { SlOptionsVertical } from "react-icons/sl";
import {FaTimes} from 'react-icons/fa'
import teb from '../assets/images/teb.png'
import tei from '../assets/images/tei.png'
import teu from '../assets/images/teu.png'
import teal from '../assets/images/teal.png'
import teac from '../assets/images/teac.png'
import tear from '../assets/images/tear.png'
import teaj from '../assets/images/teaj.png'
import teimg from '../assets/images/teimg.png'
import tem from '../assets/images/tem.png'
import Subfooter from './Subfooter';




const Writingpad = ({username}) => {

    const [nav, setNav] = useState(false)
    const handileClick = () => setNav(!nav)

  return (
    <>
    {/* Navbar */}
        <div className='shadow-md'>
            <div className=''>
                <div className='flex px-4 mt-5'>
                    <div className='pt-3'>
                        <span className='hidden font-bold text-lg mx-2 md:block'>
                            Write Your Stories
                        </span>
                    </div>
                    <div className='flex ml-auto'>
                        <div className='flex'>
                            <button className='hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 text-orange-600'>
                                Publish
                            </button>
                            <button className='hidden hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Save
                            </button>
                            <button className='hidden hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Preview
                            </button>
                            <button className='hidden hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Delete
                            </button>
                        </div>


                        <div className='flex'>
                            <div onClick={handileClick} className='md:hidden z-10 cursor-pointer pt-4'>
                                {!nav ? <SlOptionsVertical/> : <FaTimes />}
                            </div>
                            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col backdrop-blur-sm justify-center items-center'}>
                                <button className='hover:bg-orange-600 hover:text-white rounded-full p-1 px-4 text-orange-600'>
                                    SAVE
                                </button>
                                <button className='hover:bg-orange-600 hover:text-white rounded-full p-1 px-4 text-orange-600'>
                                    PREVIEW
                                </button>
                                <button className='hover:bg-orange-600 hover:text-white rounded-full p-1 px-4 text-orange-600'>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header */}
        <div className='mx-16 bg-zinc-200 mt-4 mb-28'>
            <div>
                <div className='grid grid-flow-col '>
                    <div className=' col-span-4'></div>
                    <div className='p-2 col-span-1'>
                        <div className=''>
                            <div>
                                <div className='flex gap-1 justify-end'>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teb} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={tei} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teu} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teal} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teac} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={tear} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teaj} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={teimg} alt="" />
                                    </button>
                                    <button className='p-2 bg-zinc-100 rounded-md hover:scale-75'>
                                        <img className='w-4' src={tem} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Writing pad */}
            <div>
                <div>
                    <div className='p-3 lg:ml-3 lg:-mt-12 -pb-[14px] lg:flex gap-4'>
                        <input className=' w-full lg:w-[250px]' type="text" placeholder="Title" />
                        <input className=' w-full lg:w-[250px] mt-3 lg:mt-0' type="text" placeholder="Genre" />
                    </div>
                    <div className='p-3 pb-10'>
                        <textarea className='p-1 w-full' name="story" id="story" cols="30" rows="20"></textarea>
                    </div>
                    <div className='p-3 lg:absolute right-16 lg:-mt-12 -pb-[14px]'>
                        <input className=' w-full lg:w-[250px] ' type="text" placeholder="Auther" value={username} />
                    </div>
                </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Writingpad