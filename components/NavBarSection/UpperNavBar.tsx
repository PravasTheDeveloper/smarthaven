import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgDollar } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";


export default function UpperNavBar() {
    return (
        <div className='w-full h-10 border-b border-slate-300 hidden lg:block'>
            <div className='w-full container h-full mx-auto flex items-center text-slate-600 group cursor-pointer '>
                {/* Left Side Section */}
                <div className='w-auto h-full flex items-center text-sm'>
                    <p>
                        Welcome to <span className='group-hover:text-y-200 duration-300'>SmartHaven</span>
                    </p>
                </div>
                {/* Right Side Section */}
                <div className='flex-1 h-full text-sm'>
                    <div className='w-full flex items-center h-full justify-end'>
                        <p className='pr-5 flex items-center cursor-pointer hover:text-y-200 duration-300'>
                            <span className='text-xl mr-3'>
                                <CiLocationOn />
                            </span>
                            <span>
                                Locate Store
                            </span>
                        </p>
                        <p className='px-5 border-l-2 flex cursor-pointer hover:text-y-200 duration-300'>
                            <span className='text-xl mr-3'>
                                <CiDeliveryTruck />
                            </span>
                            <span>
                                Track Your Order
                            </span>
                        </p>
                        <p className='px-5 border-l-2 flex cursor-pointer hover:text-y-200 duration-300'>
                            <span className='text-xl mr-3'>
                                <CgDollar />
                            </span>
                            <span>
                                Dollar
                            </span>
                        </p>
                        <p className='border-l-2 pl-5  flex cursor-pointer hover:text-y-200 duration-300'>
                            <span className='text-xl mr-3'>
                                <IoPersonOutline />
                            </span>
                            <span>
                                Registration | Sign In
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
