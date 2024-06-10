import React from 'react'
import bg4 from '../assets/images/bg4.jpg'
import { FaStar } from "react-icons/fa";
import { TbTextPlus } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import Profile from '../assets/images/profile.png'
import {IoIosEye} from 'react-icons/io'
import Subfooter from './Subfooter'




const Bookdetails = ({username}) => {
  return (
    <>
        <div className=' w-full'>
            <div className=' bg-gradient-to-b from-yellow-400 h-[345px]'></div>
            <div className='mr-auto ml-auto pr-4 pl-4'>
                <div className='-mt-64 bg-slate-100 rounded-2xl px-4 py-4 h-72 md:h-96 shadow-2xl md:ml-auto md:mr-auto md:max-w-[768px] lg:max-w-[1024px]'>
                    <div className=' relative'>
                        <div className='pt-2 pb-2 flex'>
                            <a href="#"><img className='w-16 md:w-32 md:mb-2 lg:w-44' src={bg4} alt="" /></a>
                            <div className='ml-5'>
                                <h1 className=' font-bold text-lg mb-4'>Book Name</h1>
                                <div className='bg-white rounded-full pl-1 pr-1 mb-4'>
                                    <a href="#">
                                        <div>Genres</div>
                                    </a>
                                </div>
                                <div className='hidden md:block mb-6'>
                                     <p>
                                        Summary of your story
                                    </p>
                                </div>
                                <div className='hidden lg:block mb-4'>
                                    <div className=' flex gap-10 pb-1 w-full justify-around'>
                                        <div>
                                            <div className='flex items-center text-orange-500'>
                                                <FaStar />
                                                <span className='ml-1'>4.9</span>
                                            </div>
                                            <div className=' pl-[6px] items-center'>(1.4k)</div>
                                        </div>
                                        <div>
                                            <div className='ml-2 items-center text-orange-500'>
                                                43
                                            </div>
                                            <div><p>Pages</p></div>
                                        </div>
                                        <div>
                                            <div className='ml-4 items-center text-orange-500'>
                                                2234+
                                            </div>
                                            <div><p>Read Count</p></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='hidden py-3 cursor-pointer z-20 left-0 lg:block'>
                                    <button className='text-white font-bold text-base px-8 py-2.5 bg-orange-500 hover:bg-orange-600 border-none rounded-lg w-full mb-2.5'>
                                        Read Now
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className='my-2 md:hidden'>
                            <p>
                                Summary of your story
                            </p>
                        </div>
                        <div className='flex gap-10 pb-1 w-full justify-around lg:hidden'>
                            <div>
                                <div className='flex items-center text-orange-500'>
                                    <FaStar />
                                    <span className='ml-1'>4.9</span>
                                </div>
                                <div className=' pl-[6px] items-center'>(1.4k)</div>
                            </div>
                            <div>
                                <div className='ml-2 items-center text-orange-500'>
                                    43
                                </div>
                                <div><p>Pages</p></div>
                            </div>
                            <div>
                                <div className='ml-4 items-center text-orange-500'>
                                    2234+
                                </div>
                                <div><p>Read Count</p></div>
                            </div>
                        </div>
                        <div className=' h-[1px] w-full bg-zinc-300 rounded-lg'></div>
                        <div className='flex justify-around'>
                            <button className='mt-4 flex items-center flex-col cursor-pointer'>
                                <TbTextPlus />
                                <div>
                                    Library
                                </div>
                            </button>
                            <div className='mt-3 absolute h-12 w-[1px] bg-zinc-300 bg-opacity-[1] rounded-lg'></div>
                            <button className='mt-4 flex items-center flex-col cursor-pointer'>
                                <FiDownload />
                                <div>
                                    Download
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='px-4 py-3 bg-zinc-100 cursor-pointer w-full z-20 left-0 bottom-0 fixed lg:hidden'>
                        <button className='text-white font-bold text-base px-8 py-2.5 bg-orange-500 hover:bg-orange-600 border-none rounded-lg w-full mb-2.5'>
                            Read Now
                        </button>
                    </div>
                </div>    
                <div>
                    <div className='mt-6 bg-zinc-200 rounded-2xl px-4 py-4 h-20 shadow-xl flex md:ml-auto md:mr-auto md:max-w-[768px] lg:max-w-[1024px] lg:h-28'>
                        <div>
                            <img className='w-[40px] lg:w-12 mt-1 lg:mt-4 bg-white rounded-full' src={Profile} alt="" />
                        </div>
                        <div className='ml-3 lg:mt-2 lg:text-xl'>
                            <h1>Your Name</h1>
                            <p>783 Followers</p>
                        </div>
                        <div className='ml-auto lg:mt-3 lg:text-xl'>
                            <button className='text-orange-500 font-bold text-right mt-3'>
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-32 md:ml-auto md:mr-auto md:max-w-[768px] lg:max-w-[1024px]'>
                    <div className='mt-4'>
                        <h1 className=' font-bold lg:text-3xl'>Chapters</h1>
                    </div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                        <a href="#" className='mt-6 bg-zinc-200 rounded-2xl px-4 py-4 h-20 shadow-lg lg:h-28'>
                            <div className='-mt-2 flex'>
                                <span className='font-bold text-sm lg:text-xl'>
                                    1.
                                </span>
                                <div className='ms-4'>
                                    <h3 className='font-bold text-sm text-start lg:text-xl'>
                                        Title Name
                                    </h3>
                                    <span className='flex gap-7 mt-4 text-orange-600 lg:text-xl'>
                                        <div className='flex gap-1'>
                                            <IoIosEye className='mt-1' />2k+
                                        </div>
                                        <div className='flex gap-1'>
                                            <FaStar className=' text-sm mt-1' /> 5.0
                                        </div>
                                    </span>
                                </div>
                                <span className=' ms-auto text-xs text-right lg:text-base'>
                                        22 march 2024
                                </span>
                            </div>
                        </a>
                        <a href="#" className='mt-6 bg-zinc-200 rounded-2xl px-4 py-4 h-20 shadow-lg lg:h-28'>
                            <div className='-mt-2 flex'>
                                <span className='font-bold text-sm lg:text-xl'>
                                    2.
                                </span>
                                <div className='ms-4'>
                                    <h3 className='font-bold text-sm text-start lg:text-xl'>
                                        Title Name
                                    </h3>
                                    <span className='flex gap-7 mt-4 text-orange-600 lg:text-xl'>
                                        <div className='flex gap-1'>
                                            <IoIosEye className='mt-1' />2k+
                                        </div>
                                        <div className='flex gap-1'>
                                            <FaStar className=' text-sm mt-1' /> 5.0
                                        </div>
                                    </span>
                                </div>
                                <span className=' ms-auto text-xs text-right lg:text-base'>
                                        22 march 2024
                                </span>
                            </div>
                        </a>
                        <a href="#" className='mt-6 bg-zinc-200 rounded-2xl px-4 py-4 h-20 shadow-lg lg:h-28'>
                            <div className='-mt-2 flex'>
                                <span className='font-bold text-sm lg:text-xl'>
                                    3.
                                </span>
                                <div className='ms-4'>
                                    <h3 className='font-bold text-sm text-start lg:text-xl'>
                                        Title Name
                                    </h3>
                                    <span className='flex gap-7 mt-4 text-orange-600 lg:text-xl'>
                                        <div className='flex gap-1'>
                                            <IoIosEye className='mt-1' />2k+
                                        </div>
                                        <div className='flex gap-1'>
                                            <FaStar className=' text-sm mt-1' /> 5.0
                                        </div>
                                    </span>
                                </div>
                                <span className=' ms-auto text-xs text-right lg:text-base'>
                                        22 march 2024
                                </span>
                            </div>
                        </a>
                        <a href="#" className='mt-6 bg-zinc-200 rounded-2xl px-4 py-4 h-20 shadow-lg lg:h-28'>
                            <div className='-mt-2 flex'>
                                <span className='font-bold text-sm lg:text-xl'>
                                    4.
                                </span>
                                <div className='ms-4'>
                                    <h3 className='font-bold text-sm text-start lg:text-xl'>
                                        Title Name
                                    </h3>
                                    <span className='flex gap-7 mt-4 text-orange-600 lg:text-xl'>
                                        <div className='flex gap-1'>
                                            <IoIosEye className='mt-1' />2k+
                                        </div>
                                        <div className='flex gap-1'>
                                            <FaStar className=' text-sm mt-1' /> 5.0
                                        </div>
                                    </span>
                                </div>
                                <span className=' ms-auto text-xs text-right lg:text-base'>
                                        22 march 2024
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Bookdetails