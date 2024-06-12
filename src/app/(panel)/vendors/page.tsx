import React from 'react'
import { Input } from '@/components/ui/input'
import UserCard from '@/components/UserCard'
import VendorCard from '@/components/VendorCard'
const Vendors = () => {
  return (
    <div className='flex flex-col flex-grow w-full bg-white'>
    <div className='ps-10 p-5 font-extrabold text-2xl text-green-1 '>
      Vendors (20)
    </div>
    <div className='m-7'>
    <Input type="text" placeholder={'\uf002 Search Vendors'}  style={{ fontFamily: "Arial, FontAwesome" }} className='bg-gray-1' />
    <div className='flex flex-col w-full overflow-auto max-height-1/2 mt-8 mb-3'>  
    <div className='flex flex-row w-full font-bold mb-3'>
          <div className='w-1/5 text-center'>Customer Name</div>
          <div className='w-1/5 text-center'>Location</div>
          <div className='w-1/5 text-center'>Orders</div>
          <div className='w-1/5 text-center'>Requested</div>
          <div className='w-1/5 text-center'>Status</div>

        </div>
        <VendorCard vendor={{image:"",location:"Delhi",name:"Mayank Jonwal",orders:5,requested:"22/01/25",status:"Active"}} />
        <VendorCard vendor={{image:"",location:"Delhi",name:"Mayank Jonwal",orders:5,requested:"22/01/25",status:"Active"}} />
        <VendorCard vendor={{image:"",location:"Delhi",name:"Mayank Jonwal",orders:5,requested:"22/01/25",status:"Active"}} />
        <VendorCard vendor={{image:"",location:"Delhi",name:"Mayank Jonwal",orders:5,requested:"22/01/25",status:"Active"}} />
        <VendorCard vendor={{image:"",location:"Delhi",name:"Mayank Jonwal",orders:5,requested:"22/01/25",status:"Active"}} />

      </div>
    </div>
  </div>
  )
}

export default Vendors
