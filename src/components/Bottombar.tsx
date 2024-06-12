'use client'
import React from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/navigation'


export default function Bottombar() {
    const router = useRouter();
  return (
    <div>
      <div>
        <div className='flex flex-row bg-gray-1 w-full h-30 justify-end items-center '>
        <div className='flex flex-row bg-gray-1 w-fit h-30 justify-end items-center ps-4' onClick={() => {
            localStorage.setItem('login', 'false');
          router.push("/")
          }}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <div className='me-4 ps-2 p-4'>Logout</div>
          </div>
        </div>
      </div>
    </div>
  )
}
