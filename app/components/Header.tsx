'use client'

import React from 'react'
import Image from 'next/image'
import "./index.css"
import { HiSearch, HiBell, HiChat, HiChevronDown } from "react-icons/hi"
import { LoginButton } from "./"
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

interface HeaderProps {
	routerPaths: {
		asPath: string;
		push: (path: string) => void;
	}
}

const Header: React.FC<HeaderProps> = ({ routerPaths }) => {

	const router = useRouter();
	const navigationItems = [
		{ path: "/", label: "Home" },
		{ path: "/explore", label: "Explore"},
		{ path: "/create", label: "Create" }
	];


	const handleSignOut = async () => {
		try {
			signOut();
			router.push("/");
		} catch (err) {
			console.error(err);
		}
	}

  return (
	<div className='flex p-4 items-center w-screen'>
		<Image 
			src='/logo.png' 
			alt='Logo' 
			width={50} 
			height={50} 
			className='hover:bg-gray-100 p-3 rounded-full cursor-pointer'
			onClick={() => router.push('/')}	
		/>
		{/* <div className='gap-7 flex mr-7'>
			<button className='bg-black text-white py-3 px-4 rounded-full font-[600]'>Home</button>
			<button className='font-[600]'>Explore</button>
			<div className='flex items-center'>
				<button className='font-[600]'>Create</button>
				<HiChevronDown className='text-[18px]' />
			</div>
		</div> */}


		<div className='gap-2 flex mr-7'>
			{/* FIXME: button black bg when active */}
			{navigationItems.map(item => (
				<button
					key={item.path}
					className={`py-2 px-3 border rounded-full font-[600] ${routerPaths.asPath === item.path ? 'active' : ''}`}
					onClick={() => router.push(item.path)}
				>{item.label}</button>
			))}
		</div>

		<div className='flex items-center gap-3 bg-[#e9e9e9] p-3 rounded-full w-full'>
			<HiSearch className='text-gray-600' />
			<input type="text" placeholder="search" className='bg-transparent active:border-0 w-full focus:outline-none' />
		</div>
		<div className='flex w-1/4 justify-evenly items-center'>
			<div className='w-[50px]'>
				<HiBell className='text-gray-500 text-[50px] cursor-pointer p-3 hover:bg-gray-200 rounded-full' />
			</div>
			<div className='w-[50px]'>
				<HiChat className='text-gray-500 text-[50px] cursor-pointer p-3 hover:bg-gray-200 rounded-full' />
			</div>
			<LoginButton />
			<div className='w-[30px]'>
				<HiChevronDown className='cursor-pointer hover:bg-gray-100 text-[30px] rounded-full' onClick={handleSignOut} />
			</div>
		</div>
	</div>
)
}

export default Header