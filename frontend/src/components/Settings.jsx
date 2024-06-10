import { FaPowerOff } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Subfooter from "./Subfooter";

const Settings = ({logoutUser}) => {

    

  return (
    <>
        
        <section className=' mt-20 w-full mb-96'>
            <div className='pr-4 pl-4'>
                <div className='-mr-4 -ml-4'>
                    <div className='pr-4 pl-4'>
                        <div className='flex justify-between items-center mb-7'>
                            <div className=' text-lg font-bold text-left border-l-[3px] border-solid border-orange-500 pl-[10px] mt-[10px] mb-0'>
                                Settings
                            </div>
                            <button onClick={logoutUser} className='text-red-700 mt-[10px] text-sm bg-[#e9e9e9] p-1 rounded-2xl pl-3 pr-3 flex gap-2 cursor-pointer'>
                                <FaPowerOff className='mt-1'/>
                                Sign Out
                            </button>
                        </div>
                        <div className='my-0 relative'>
                            <div className=' border-b pt-2 pb-3 px-0 text-left overflow-hidden w-full overflow-x-auto whitespace-nowrap'>
                            <a className=' hover:text-orange-500 hover:border-orange-500 text-sm hover:border-b-2 border-solid pt-[5px] pb-3 px-[5px] cursor-pointer'>
                                Profile
                            </a>

                            <a className=' hover:text-orange-500 hover:border-orange-500 text-sm hover:border-b-2 border-solid pt-[5px] pb-3 px-[5px] cursor-pointer'>
                                Notifications
                            </a>

                            <a className=' hover:text-orange-500 hover:border-orange-500 text-sm hover:border-b-2 border-solid pt-[5px] pb-3 px-[5px] cursor-pointer'>
                                Update Password
                            </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Subfooter />
    </>
  )
}

export default Settings