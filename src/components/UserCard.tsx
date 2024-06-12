import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { List } from 'postcss/lib/list'



interface UserDetails {
    image: string,
    serviceType: string,
    details: Array<string>,
    transaction: string,
    date: string
}
export default function UserCard({user}:{user : UserDetails}) {
  return (
    <div className='flex flex-row w-full h-fit  mb-3 border-2 border-gray-1 pt-3 pb-3'>
          <div className='w-1/6 text-center flex justify-center'><div className='border-black border-2 w-fit rounded-full text-center p-3 m-2'><FontAwesomeIcon icon={faUser}/></div></div>
          <div className='w-1/6 text-center items-center justify-center flex'>
            <div></div>
            <div className='flex flex-col '>
              <div className='font-bold text-xl'>{user.details[0]}</div>
              <div className='text-sm text-gray-2'>{user.details[1]}</div>
              <div className='text-sm text-gray-2'>{user.details[2]}</div>
              </div>
          </div>
          <div className='w-1/6 text-center items-center justify-center flex'><div className='border-2 rounded-2xl border-gray-2 p-3'>{user.serviceType}</div></div>
          <div className='w-1/6 text-center items-center justify-center flex'><div className='border-2 rounded-2xl border-gray-2 p-3'>{user.transaction}</div></div>
          <div className='w-1/6 text-center items-center justify-center flex'><div className='border-2 rounded-2xl border-gray-2 p-3'>{user.date}</div></div>
          <div className='w-1/6 text-center items-center justify-center flex flex-row gap-2'>
            <div className='border-2 rounded-2xl border-gray-2 p-3'>View Details</div>
            <div className='border-2 rounded-2xl border-gray-2 p-3'>Orders</div>
          </div>
        </div>
  )
}
