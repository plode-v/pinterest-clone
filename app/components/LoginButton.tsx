'use client'
import Image from 'next/image';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton: React.FC = () => {

    const { data: session } = useSession()
    if (session) {
        console.log(session.user)
        return (
            <>
            <Image src='/man.png' alt='user-profile' width={50} height={50} className='cursor-pointer p-3 hover:bg-gray-200 rounded-full' onClick={() => signOut()} />
            </>
        )
    }
    return (
        <>
            <button onClick={() => signIn()} className='font-[600]'>Sign in</button>
        </>
    )
}

export default LoginButton