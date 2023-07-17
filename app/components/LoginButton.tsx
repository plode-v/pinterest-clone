'use client'
import Image from 'next/image';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {

    const { data: session } = useSession()
    const userName = session?.user?.name ?? '';

    return (
        <>
            {session ? (
                <Image src={session.user?.image} alt="profile-picture" height={50} width={50} className='p-3 hover:bg-gray-200 rounded-full cursor-pointer' />
            ) : (
                <button className='font-[600]' onClick={() => signIn()}>Login</button>
            )}
        </>
    )
}

export default LoginButton