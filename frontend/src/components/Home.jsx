import { React, useEffect, useMemo, useState } from 'react'
import AxiosInstance from './AxiosInstance'
import { Box } from '@mui/material'
import { FaSearch, FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import bg4 from '../assets/images/bg4.jpg'
import { MdLibraryBooks } from "react-icons/md";
import Subfooter from './Subfooter';

const Home = () => {

  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get("users/").then((res) => {
      setMyData(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div>
      {/* { loading ? <p>Loading...</p> :
      <div>
        {myData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', p: 2, m: 2, boxShadow: 3 }}>
            <div className=' text-red-500'>
              {item.username}
            </div>
          </Box>
        ))}
      </div>
      } */}

        <section className='pt-[62px] pb-16'>
          <div>
              <div className='mt-3'>
                <button>
                  <FaSearch className='absolute ml-2 -mt-3 lg:hidden ' />
                </button>
                <input type="search"  className=' lg:hidden rounded-full p-1 pl-8 text-black w-full pb-2 outline-none bg-[#e4e4e4]' placeholder='search..' />
                <h1 className='font-bold text-2xl mt-2 ml-3 lg:text-4xl'>Read Stories</h1>
              </div>
              <div>
                <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-transparent'>
                  <h1 className='ml-3 lg:text-xl'>Top Trending Stories</h1>
                  <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
                </div>

                <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-0 ml-3 mr-3'>
                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 47 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 56 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 67 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 40 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>
                </div>

                <div className='mt-3 w-full flex font-bold bg-[#f0efef] lg:bg-transparent'>
                  <h1 className='ml-3 lg:text-xl'>New Stories</h1>
                  <IoIosArrowForward className='mt-[6px] right-0 absolute lg:text-xl' />
                </div>

                <div className='flex gap-4 overflow-x-auto scrollbar-hide mt-0 ml-3 mr-3 pb-10'>
                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400 place-items-end'>
                        <MdLibraryBooks /> 47 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 56 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 67 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>

                  <div>
                    <a href="/Bookdetails" className=''>
                      <div className='flex items-center gap-1 bg-[#404142] w-14 rounded-md relative top-11 text-yellow-400 pl-1'>
                        <FaStar /> 5.0
                      </div>
                      <img src={bg4} alt="" className=' max-w-[150px] w-[150px]' />
                      <div className='flex items-center gap-1 relative bottom-8 justify-center text-yellow-400'>
                        <MdLibraryBooks /> 40 Parts
                      </div>
                      <div className='-mt-6'>
                        Book Name
                      </div>
                      <p className='text-zinc-600 -mt-2'>Genres</p>
                      <p className='text-zinc-600 -mt-2'>45k+ Readers</p>
                    </a>
                  </div>
                </div>

              </div>
          </div>
      </section>
      <Subfooter />

    </div>
  )
}

export default Home