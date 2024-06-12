import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { List } from 'postcss/lib/list'



interface VendorDetails {
    image: string,
    name: string,
    location: string,
    orders: number,
    requested: string,
    status: string
}
export default function VendorCard({vendor}:{vendor : VendorDetails}) {
  return (
    <div className='flex flex-row w-full h-fit  mb-3 border-2 border-gray-2 pt-3 pb-3 rounded-3xl'>
          <div className='w-1/5 text-center flex flex-row justify-center items-center'>
            <div className='border-black border-2 w-fit rounded-full text-center p-3 m-2'><FontAwesomeIcon icon={faUser}/></div>
            <div>{vendor.name}</div>
            </div>
          
          <div className='w-1/5 text-center items-center justify-center flex'>{vendor.location}</div>
          <div className='w-1/5 text-center items-center justify-center flex'>{vendor.orders}</div>
          <div className='w-1/5 text-center items-center justify-center flex'>{vendor.requested}</div>
          <div className='w-1/5 text-center items-center justify-center flex '><div className='bg-green-500 p-3 rounded-full me-2'></div>{vendor.status}</div>
        </div>
  )
}
