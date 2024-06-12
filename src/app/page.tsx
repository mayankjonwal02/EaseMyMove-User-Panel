'use client'
import Image from "next/image";
import React, { useState } from 'react'
import Logo from '../assets/Easemymovelogo.png'
import TitleImage from '../assets/EasemymoveTitle.png'
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
export default function Home() {

  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className='bg-gray-1 h-screen w-full  flex flex-col justify-center items-center'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={Logo}
            alt="Description of my image"
            width={300} // Desired width in pixels
            height={300} // Desired height in pixels
          />
        </motion.div>

        <Image
          className='mt-10'
          src={TitleImage}
          alt="Description of my image"
          width={500} // Desired width in pixels
          height={300} // Desired height in pixels
        />

<Button className="bg-green-1 mt-9" onClick={() => {router.push('/signin');}}>Enter</Button>

      </div>
    </main>
  );
}
