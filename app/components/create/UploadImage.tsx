'use client'
import React, { useState } from 'react'
import { HiArrowUpCircle } from "react-icons/hi2"
import Image from 'next/image'

const UploadImage = ({ setFile }: any) => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFile = (e: any) => {
    setFile(e.target.files[0])
    setSelectedFile(e.target.files[0])
  }

  return (
    <div className='h-[450px] bg-[#e9e9e9] rounded-lg'>
      <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%]'>
        {!selectedFile ? (
          <>
            <HiArrowUpCircle className='text-[30px] text-[#696969]'/>
            <h2 className='font-[500] text-[14px] pt-5'>Click to upload</h2>
          </>
        ) : (
          <div className='flex items-center'>
          <Image src={window.URL.createObjectURL(selectedFile)} alt="file" height={1000} width={800} className='object-contain h-[90%]' />
          </div>
        )}
        <input 
          type="file" 
          id='dropzone-file' 
          className='hidden' 
          onChange={handleFile}
        />
      </label>
    </div>
  )
}

export default UploadImage