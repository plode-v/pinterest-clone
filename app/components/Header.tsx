'use client'

import React from 'react'
import Image from 'next/image'
import { HiSearch, HiBell, HiChat, HiChevronDown } from "react-icons/hi"
import { useState } from 'react'

const Header = () => {

  return (
    <div className='flex p-4 items-center'>
        <Image src='/logo.png' alt='Logo' width={50} height={50} className='hover:bg-gray-100 p-3 rounded-full cursor-pointer'/>
        <div className='gap-7 flex mr-7'>
            <button className='bg-black text-white py-3 px-4 rounded-full font-[600]'>Home</button>
            <button className='font-[600]'>Explore</button>
            <div className='flex items-center'>
                <button className='font-[600]'>Create</button>
                <HiChevronDown className='text-[18px]' />
            </div>
        </div>
        <div className='flex items-center gap-3 bg-[#e9e9e9] p-3 rounded-full w-full'>
            <HiSearch className='text-gray-600' />
            <input type="text" placeholder="search" className='bg-[#e9e9e9] active:border-0 w-full focus:outline-none' />
        </div>
        <div className='flex w-1/6 justify-evenly items-center'>
            <HiBell className='text-gray-600 text-[50px] cursor-pointer p-3 hover:bg-gray-200 rounded-full' />
            <HiChat className='text-gray-600 text-[50px] cursor-pointer p-3 hover:bg-gray-200 rounded-full' />
            <Image src='/man.png' alt='user-image' width={50} height={50} className='cursor-pointer p-3 hover:bg-gray-200 rounded-full' />
            <HiChevronDown className='cursor-pointer hover:bg-gray-100 text-[30px] p-1 rounded-full' />
        </div>
    </div>
)
}

export default Header