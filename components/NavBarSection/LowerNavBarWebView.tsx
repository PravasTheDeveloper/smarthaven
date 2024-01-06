import React, { use, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function LowerNavBarWebView() {

    const [useSearchBar, setuseSearchBar] = useState(false)

    return (
        <div className='w-full md:h-20 bg-y-200 md:bg-white'>
            <div className='w-full container h-20 md:h-full mx-auto flex items-center justify-between px-5 md:px-0'>
                <div className='text-slate-700 font-extrabold lg:text-3xl flex items-center'>
                    Smart Heaven <span className='text-y-200'>.</span>
                </div>
                <div className='flex-1 h-full md:block hidden'>
                    <div className='h-full w-full flex justify-center items-center'>
                        <input type="text" className='w-4/6 h-10 rounded-l-full border px-10 outline-y-200' placeholder="Search For Your Product" />
                        <button className='bg-y-200 w-16 h-10 flex justify-center items-center text-2xl rounded-r-full'>
                            <IoSearchSharp />
                        </button>
                    </div>
                </div>
                <div className='text-2xl flex justify-center items-center'>
                    <div className={`w-10 h-10 flex justify-center items-center rounded-full md:hidden ${useSearchBar === true ? "text-white" : "text-black"}`} onClick={()=>setuseSearchBar(!useSearchBar)}>
                        <IoSearchSharp />
                    </div>
                    <div className='w-10 h-10 flex justify-center items-center md:bg-slate-200 rounded-full '>
                        <FaRegHeart />
                    </div>
                    <div className='w-10 h-10 flex justify-center items-center md:bg-slate-200 rounded-full md:ml-5 relative'>
                        <MdOutlineShoppingCart />
                        <div className='w-5 h-5 md:bg-y-200 bg-white text-sm rounded-full flex justify-center items-center absolute top-[-5px] right-[-5px]'>
                            4
                        </div>
                    </div>
                </div>
            </div>

            {/* Secoundary Sarch Bar For Mobile View */}
            <div className={`h-20 w-full px-5 py-2 absolute right-0 duration-300 ${useSearchBar === true ? "opacity-100" : "opacity-0"}`}>
                <div className='bg-white w-full h-full shadow-md rounded-lg'>
                    <div className='h-full w-full flex justify-center items-center px-2'>
                        <input type="text" className='w-full h-10 rounded-l-full border px-4 outline-y-200' placeholder="Search For Your Product" />
                        <button className='bg-y-200 w-16 h-10 flex justify-center items-center text-2xl rounded-r-full'>
                            <IoSearchSharp />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
