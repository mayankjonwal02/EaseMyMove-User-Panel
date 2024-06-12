"use client"
import React , { useState , useEffect} from 'react'
import { Input } from '@/components/ui/input'

const Profile = () => {
    const [user, setUser] = useState<any>({})
    useEffect(() => {
        // This code runs only on the client side
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        setUser(userData || '');
      }, []);
  return (
    <div className='flex flex-col flex-grow w-full bg-white'>
    <div className='ps-10 p-5 font-extrabold text-2xl text-green-1'>
      Profile
    </div>
    <div className='bg-white m-8 flex flex-grow flex-row rounded-3xl border-gray-2 border-2'>
        <div className='bg-white flex flex-col w-1/2 rounded-3xl m-3 p-1 ps-3 gap-6'>
            <div className='text-3xl font-bold ms-8 mt-6'>Personal Details</div>
            <div className='flex flex-row w-3/4 flex-grow ms-10 '>
                <div className='flex flex-col w-full flex-grow font-extrabold gap-2'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone No.</div>
                    
                    <div>Status</div>
                    <div>Pincode</div>
                    <div>Category</div>
                </div>
                <div className='flex flex-col w-full flex-grow gap-2'>
                <div>: {user.name || "Undefined" }</div>                    
                <div>: {user.email || "Undefined" }</div>
                <div>: {user.contact || "Undefined" }</div>
                  
                <div>: {user.verified?"Verified":"Not Verified" }</div>
                    <div>: {user.pincode || "Undefined" }</div>
                    <div>: {user.category || "Undefined" }</div>
                </div>
            </div>
            
        </div>
        {/* <div className='bg-white flex flex-col w-1/2 rounded-3xl m-3 p-1 ps-3 gap-6'>
            <div className='text-3xl font-bold ms-8 mt-6'>Business Details</div>
            <div className='flex flex-row w-3/4 flex-grow ms-10 '>
                <div className='flex flex-col w-full flex-grow font-extrabold gap-2'>
                    <div>Account Holder Name</div>
                    <div>IFSC code</div>
                    <div>Account No.</div>
                    <div>GST No.</div>
                    <div>PAN No.</div>
                   
                </div>
                <div className='flex flex-col w-full flex-grow gap-2'>
                    <div>: Mayank </div>
                    <div>: SDLK29310</div>
                    <div>: ******2345</div>
                    <div>: LDBSVLA90323</div>
                    <div>: DANAK2001</div>
                    
                </div>
            </div>
            
        </div> */}
        
    </div>
  </div>
  )
}

export default Profile
