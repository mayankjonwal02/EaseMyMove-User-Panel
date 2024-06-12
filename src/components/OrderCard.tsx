import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { List } from 'postcss/lib/list'



interface orderDetails {
    trackingno: string,
    distance: string,
    route: string,
    est_time: string
}
export default function OrderCard({ order }: { order: orderDetails }) {
    return (
        <div className='flex flex-row w-full h-fit  mb-3 border-2 border-gray-2 pt-3 pb-3 rounded-3xl'>
            <div className='w-1/4 text-center flex flex-col justify-center items-center gap-3'>
                <div className='text-center items-center justify-center flex '><div className='bg-green-500 p-3 rounded-full me-2'></div>On route</div>
                <div className='text-2xl'>Tracking Number</div>
                <div >{order.trackingno}</div>
            </div>

            <div className='w-1/4 text-center items-center justify-center flex text-xl'>Distance {order.distance}</div>
            <div className='w-1/4 text-center items-center justify-center flex text-xl'>{order.route}</div>
            <div className='w-1/4 text-center flex flex-col justify-center items-center gap-3'>
                <div className='text-2xl'>Estimated delivery</div>
                <div >{order.est_time}</div>
            </div>        
            </div>
    )
}
