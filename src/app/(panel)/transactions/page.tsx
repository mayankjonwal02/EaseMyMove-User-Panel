import React from 'react'
import { Input } from '@/components/ui/input'
import TransactionCard from '@/components/TransactionCard'

const Transactions = () => {
  return (
    <div className='flex flex-col flex-grow w-full bg-white'>
    <div className='ps-10 p-5 font-extrabold text-2xl text-green-1'>
      Transactions (20)
    </div>
    <div className='ps-9 pe-9'>
    {/* <Input type="text" placeholder={'\uf002 Search Transactions'}  style={{ fontFamily: "Arial, FontAwesome" }}  /> */}
    <div className='flex flex-col w-full overflow-auto max-height-1/2 mt-3 mb-3'>
    <TransactionCard transaction = {{name:"Mayank Jonwal",id:"3490124893101",amt_recv:"Rs45000.00",date:"13/11/2024",time:"22:05"}}/>
    <TransactionCard transaction = {{name:"Mayank Jonwal",id:"3490124893101",amt_recv:"Rs45000.00",date:"13/11/2024",time:"22:05"}}/>
    <TransactionCard transaction = {{name:"Mayank Jonwal",id:"3490124893101",amt_recv:"Rs45000.00",date:"13/11/2024",time:"22:05"}}/>
    <TransactionCard transaction = {{name:"Mayank Jonwal",id:"3490124893101",amt_recv:"Rs45000.00",date:"13/11/2024",time:"22:05"}}/>
    <TransactionCard transaction = {{name:"Mayank Jonwal",id:"3490124893101",amt_recv:"Rs45000.00",date:"13/11/2024",time:"22:05"}}/>

    </div>
    </div>
  </div>
  )
}

export default Transactions
