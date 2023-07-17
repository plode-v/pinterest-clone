'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface UserInfoTypes {
    username: string;
    email: string;
    userImage: string;
}

const UserInfo = ({ userInfo }: { userInfo: UserInfoTypes }) => {

    const [username, setUsername] = useState<string[]>([]);

    useEffect(() => {
        const handleSplitEmail = () => {
            const word: string[] = userInfo.email.split("@");
            setUsername(word);
        }
        handleSplitEmail();
    }, [userInfo.email])

    if (!userInfo) {
        return (
            <p>User not logged in</p>
        )
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
                src={userInfo.userImage}
                alt='profile-pic'
                height={130}
                width={130}
                className='rounded-full mt-5'
            />
            <h1
                className='font-[500] text-[2rem] text-center mt-5'
            >
                {userInfo.username}
            </h1>
            <p className='text-gray-600 font-[300] text-[0.9rem] mt-1'>@{username[0]}</p>

            <div className='flex gap-2 mt-4'>
                <button className='bg-gray-200 px-4 py-3 rounded-full font-[500] text-[0.95rem]'>
                    Share
                </button>
                <button className='bg-gray-200 px-4 py-3 rounded-full font-[500] text-[0.95rem]'>
                    Edit Profile
                </button>
            </div>
        </div>
    )
}

export default UserInfo