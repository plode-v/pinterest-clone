'use client'
import React, { useState } from 'react'
import { UploadImage, UserTag } from "./";
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import app from '@/app/shared/firebaseConfig';

const CreateForm = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [link, setLink] = useState<string>();
  const [file, setFile] = useState<any>();
  const [titleChar, setTitleChar] = useState<number>();
  const [descChar, setDescChar] = useState<number>();

  const storage = getStorage(app, "gs://pinterest-clone-56645.appspot.com");

  const handleSave = () => {
    console.log(`
      Title: ${title}
      Desc: ${desc}
      Link: ${link}
    `)
    console.log("file: ", file.name)
    uploadFile();
  }

  const uploadFile = () => {
    const storageRef = ref(storage, `${file.name}`)
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(snapshot)
      })
  }



  const handleTitleChar = (e: any, count: number) => {
    const value = e.target.value.length;
    const charLeft = value - count;
    setTitleChar(charLeft * -1)
  }

  const handleDescChar = (e: any, count: number) => {
    const value = e.target.value.length;
    const charLeft = value - count;
    setDescChar(charLeft * -1)
  }

  return (
    <div className='bg-white rounded-2xl sm:w-1/2 w-full h-min px-10 py-12'>
      <div className='md:flex justify-end mb-6 flex'>
        <button className='bg-[#f00128] px-3 py-2 text-white rounded-lg' type='submit' onClick={handleSave}>Save</button>
      </div>
      <div className='flex'>
        <div className='w-1/3 mx-10'>
          <UploadImage setFile={(file:any) => setFile(file)} />
        </div>
        <div className='flex flex-col'>
          <div>
            <input 
              type="text" 
              className='border-b border-gray-400 mt-10 text-[35px] focus:border-blue-500 focus:border-b-2 focus:outline-none placeholder:text-[35px] placeholder:font-[700] placeholder:text-gray-500 w-full' 
              placeholder='Add your title' 
              onChange={e => {
                setTitle(e.target.value);
                handleTitleChar(e, 40);
              }}
              maxLength={40}
              />
                <p className='flex justify-end pr-2 text-[14px]'>{titleChar}</p>
          </div>
          <UserTag />
          <div>
            <textarea 
              rows={2}
              placeholder='tell everyone what your Pin is about' 
              className='mt-8 border-b border-gray-400 resize-y focus:outline-none focus:border-b-blue-500 focus:border-b-2 w-full'
              onChange={e => {
                setDesc(e.target.value);
                handleDescChar(e, 100);
              }}
              maxLength={100}
            />
            <p className='flex justify-end text-[14px] pr-2 -mt-1'>{descChar}</p>
          </div>
          <button 
            className='w-[120px] bg-[#e9e9e9] mt-4 rounded-full h-[50px] font-[500] hover:bg-[#d9d9d9]'
          >
            Add alt text
          </button>
          <input 
            type="text" 
            placeholder='Add destination link' 
            className='border-b mt-6 p-2 border-b-gray-400 focus:border-b-blue-500 focus:outline-none focus:border-b-2'  
            onChange={e => setLink(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateForm