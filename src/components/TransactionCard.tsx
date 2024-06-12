import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { List } from 'postcss/lib/list'



interface TransactionDetails {
 
    name: string,
    id: string,
    amt_recv: number,
    date: string,
    time: string
}
export default function TransactionCard({transaction}:{transaction : TransactionDetails}) {
  return (
    <div className='flex flex-row w-full h-fit  mb-3 border-2 border-gray-2 pt-6 pb-6 rounded-3xl'>
          <div className='w-1/5 text-center flex flex-row justify-center items-center'>
            <div className=' text-2xl'>{transaction.name}</div>
            </div>
          
          <div className='w-1/5 text-center items-center justify-center flex text-2xl'>{transaction.id}</div>
          <div className='w-1/5 text-center items-center justify-center flex text-2xl'>{transaction.amt_recv}</div>
          <div className='w-1/5 text-center items-center justify-center flex text-2xl'>{transaction.date}</div>
          <div className='w-1/5 text-center items-center justify-center flex text-2xl'>{transaction.time}</div>        </div>
  )
}
