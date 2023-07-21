'use client'
import React, { useState } from 'react'
import { HiArrowUpCircle } from "react-icons/hi2"

const UploadImage = ({ setFile }: any) => {
  const [selectedFile, setSelectedFile] = useState<HTMLObjectElement>();

  return (
    <div className='h-[450px] bg-[#e9e9e9] rounded-lg'>
      <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%]'>
        
        <HiArrowUpCircle className='text-[30px] text-[#696969]'/>
        <h2 className='font-[500] text-[14px] pt-5'>Click to upload</h2>
        <input 
          type="file" 
          id='dropzone-file' 
          className='hidden' 
          onChange={(e) => setFile(e?.target?.files?.[0])}
        />
      </label>
    </div>
  )
}

export default UploadImage