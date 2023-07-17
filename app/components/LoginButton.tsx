'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import app from "../shared/firebaseConfig"
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const LoginButton = () => {

    const { data: session } = useSession()
    const router = useRouter();

    const db = getFirestore(app);

    
    useEffect(() => {
        const saveUserInfo = async () => {
            if (session?.user) {
                try {
                    const userExists = await checkIfUserExists(session.user.email as string);
                    if (!userExists) {
                        const docRef = await addDoc(collection(db, "users"), {
                            username: session.user.name,
                            email: session.user.email,
                            userImage: session.user.image
                        });
                        console.log("Document written with ID: ", docRef.id);
                    }
                } catch (err) {
                    console.error("Error Adding document: ", err);
                }
            }
        }
    
    const checkIfUserExists = async (email: string) => {
        const q = query(collection(db, "users"), where("email", "==", email))
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    }

    saveUserInfo();
}, [session, db])


    return (
        <>
            {session?.user ? (
                <Image 
                    src={session.user?.image as string} 
                    alt="profile-picture" 
                    height={50} 
                    width={50} 
                    className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'
                    onClick={() => router.push(`/${session?.user?.email}`)}
                />
            ) : (
                <button className='font-[600]' onClick={() => signIn()}>Login</button>
            )}
        </>
    )
}

export default LoginButton