import React from 'react';
import  { Input} from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { User2Icon } from 'lucide-react';
import UserCard from '@/components/UserCard';

export default function Users() {
  return (
    <div className='flex flex-col flex-grow w-full bg-white'>
      <div className='ps-10 p-5 font-extrabold text-2xl text-green-1'>
        Users (20)
      </div>
      <div className='flex flex-col w-full flex-grow '>
      <Input type="text" placeholder={'\uf002 Search Users'}  style={{ fontFamily: "Arial, FontAwesome" }} className='bg-gray-1 ms-9 me-9' />
      <div className='flex flex-col w-full overflow-auto max-height-1/2 mt-3 mb-3'>  <div className='flex flex-row w-full font-bold mb-3'>
          <div className='w-1/6 text-center'>Image</div>
          <div className='w-1/6 text-center'>Details</div>
          <div className='w-1/6 text-center'>Service Type</div>
          <div className='w-1/6 text-center'>Transaction</div>
          <div className='w-1/6 text-center'>Date</div>
          <div className='w-1/6 text-center'>Action</div>
        </div>
        <UserCard user={{image:"www.image.com",serviceType:"Transportation",details:["3468297249115","Mayank Jonwal","mayank.jonwal02@gmail.com"],transaction:"31392473928911",date:"22/01/25"}} />
        <UserCard user={{image:"www.image.com",serviceType:"Transportation",details:["3468297249115","Mayank Jonwal","mayank.jonwal02@gmail.com"],transaction:"31392473928911",date:"22/01/25"}} />
        <UserCard user={{image:"www.image.com",serviceType:"Transportation",details:["3468297249115","Mayank Jonwal","mayank.jonwal02@gmail.com"],transaction:"31392473928911",date:"22/01/25"}} />
        <UserCard user={{image:"www.image.com",serviceType:"Transportation",details:["3468297249115","Mayank Jonwal","mayank.jonwal02@gmail.com"],transaction:"31392473928911",date:"22/01/25"}} />
        <UserCard user={{image:"www.image.com",serviceType:"Transportation",details:["3468297249115","Mayank Jonwal","mayank.jonwal02@gmail.com"],transaction:"31392473928911",date:"22/01/25"}} />
      </div>
      </div>
    </div>
  );
}
