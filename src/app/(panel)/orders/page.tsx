import React from 'react'
import { Input } from '@/components/ui/input'
import OrderCard from '@/components/OrderCard'

const Orders = () => {
    return (
        <div className='flex flex-col flex-grow w-full bg-white'>
            <div className='ps-10 p-5 font-extrabold text-2xl text-green-1'>
                Orders (20)
            </div>
            <div className='ps-9 pe-9 flex flex-col gap-8 '>
                <div className='flex flex-row gap-5 '>

                    <Input type="text" placeholder={'\uf002 Orders'} style={{ fontFamily: "Arial, FontAwesome" }} className='bg-gray-1' />
                    <Input type="text" placeholder={'\uf002 Time'} style={{ fontFamily: "Arial, FontAwesome" }} className='bg-gray-1' />
                </div>
                <div className='flex flex-col w-full overflow-auto max-height-1/2 mt-3 mb-3'>
                <OrderCard order={{ trackingno:"387240710471", distance:"200Km", route:"Delhi-Jodhpur", est_time:"2 Hours 42 mins" }} />  
                <OrderCard order={{ trackingno:"387240710471", distance:"200Km", route:"Delhi-Jodhpur", est_time:"2 Hours 42 mins" }} />
                <OrderCard order={{ trackingno:"387240710471", distance:"200Km", route:"Delhi-Jodhpur", est_time:"2 Hours 42 mins" }} />
                <OrderCard order={{ trackingno:"387240710471", distance:"200Km", route:"Delhi-Jodhpur", est_time:"2 Hours 42 mins" }} />
                <OrderCard order={{ trackingno:"387240710471", distance:"200Km", route:"Delhi-Jodhpur", est_time:"2 Hours 42 mins" }} />
                </div>



            </div>
        </div>
    )
}

export default Orders
