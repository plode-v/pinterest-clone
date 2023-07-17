'use client'
import Image from 'next/image';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {

    const { data: session } = useSession()
    const userName = session?.user?.name ?? '';

    if (session) {
        console.log(session.user)
        return (
            <div className='bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer' onClick={() => signOut()}>
                <p>{userName[0]}</p>
            </div>
        )
    }
    return (
        <>
            <button onClick={() => signIn()} className='font-[600]'>Sign in</button>
        </>
    )
}

export default LoginButton