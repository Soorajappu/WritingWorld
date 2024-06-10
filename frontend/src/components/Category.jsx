import React from 'react'
// import HomeNav from '../pages/HomeNav'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Subfooter from './Subfooter';
// import Navfooter from './Navfooter'



const Category = () => {
  return (
    <>

        <div className='pt-16 pb-24'>
            <div>
              <div className='mt-3'>
                <FaSearch className='absolute ml-2 mt-2 lg:hidden' />
                <input type="search"  className='rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4] lg:hidden' placeholder='search..' />
                <h1 className='font-bold text-xl lg:text-4xl mt-2 ml-3'>Explore Different Genres</h1>
              </div>

              <div className=' ml-3 pt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
                <div>
                    <Link to={"/Genres/Action"} className='w-32 h-32 bg-red-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Action</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Adventure"} className='w-32 h-32 bg-orange-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Adventure</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Childrens"} className='w-32 h-32 bg-lime-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Children's Stories</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Comedy"} className='w-32 h-32 bg-yellow-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Comedy</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Drama"} className='w-32 h-32 bg-blue-900 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Drama</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Fantasy"} className='w-32 h-32 bg-green-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Fantasy</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Fairy"} className='w-32 h-32 bg-cyan-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Fairy Tale</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Historical"} className='w-32 h-32 bg-amber-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Historical Fiction</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Horror"} className='w-32 h-32 bg-black block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Horror</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Life"} className='w-32 h-32 bg-violet-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Life</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Magical"} className='w-32 h-32 bg-fuchsia-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Magical </h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Mystery"} className='w-32 h-32 bg-zinc-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Mystery</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Mythology"} className='w-32 h-32 bg-lime-950 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Mythology</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Novel"} className='w-32 h-32 bg-stone-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Novel</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Romance"} className='w-32 h-32 bg-rose-700 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Romance</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Sciencefiction"} className='w-32 h-32 bg-lime-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Science Fiction</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Shortstory"} className='w-32 h-32 bg-yellow-950 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Short Story</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Supernatural"} className='w-32 h-32 bg-purple-800 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Super Natural</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Suspense"} className='w-32 h-32 bg-yellow-500 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Suspense</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Thriller"} className='w-32 h-32 bg-neutral-500 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Thriller</h2>    
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link to={"/Genres/Timetravel"} className='w-32 h-32 bg-amber-600 block relative bg-cover rounded-xl'>
                        <div className='w-full bottom-0 absolute pt-2 px-2 text-white'>
                            <h2>Time Travel</h2>    
                        </div> 
                    </Link>
                </div>

              </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Category