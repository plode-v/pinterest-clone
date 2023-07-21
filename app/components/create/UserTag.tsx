'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';

const UserTag = () => {
    const { data: session } = useSession();
  return (
    <div>
        {session && (
            <div className='mt-8'>
                <Image 
                    src={ session?.user?.image as string }
                    alt='userImage'
                    width={50}
                    height={50}
                    className='rounded-full'
                />
                <h2 className='text-[14px] font-[500]'>{session?.user?.name}</h2>
                <h2 className='text-[12px]'>{session?.user?.email}</h2>
            </div>
        )}
    </div>
  )
}

export default UserTag