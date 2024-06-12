"use client"
import React from 'react'
import Logo from '../assets/both.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { TopbarItems } from '@/constants/TopbarItems'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
export default function Topbar() {

  const router = useRouter();

  const pathname = usePathname();
  const isProfileActive = pathname === "/profile";
  return (
    <div>
      <div className='flex flex-col bg-white w-full h-fit justify-center items-center'>
        <Image src={Logo} alt="logo" className="" />
        <div className='flex flex-row bg-white w-full h-fit justify-around items-center mt-6 p-3'>
          {TopbarItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Button variant={isActive ? "Active" : "default"} className={cn('shadow-md p-8', { "bg-green-1 , text-white": isActive }, { "bg-white, text-black": !isActive })} style={{ minWidth: "200px" }} key={item.label} onClick={() => { router.push(item.path) }} >
                <FontAwesomeIcon icon={item.icons} style={{ fontSize: "20px" }} className='me-4' />
                {item.label}
                </Button>
            )
          }
          )}
         <Button variant={isProfileActive ? "Active" : "default"} className={cn('  shadow-md p-8', { "bg-green-1 , text-white": isProfileActive }, { "bg-white, text-black": !isProfileActive })} style={{ minWidth: "200px" }} key="Profile" onClick={() => {router.push("/profile") }} >
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} className='me-4' />
                Profile
                </Button>

        </div>
        
      </div>

    </div>
  )
}
