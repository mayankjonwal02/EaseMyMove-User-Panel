"use client"
import Bottombar from '@/components/Bottombar';
import Topbar from '@/components/Topbar';
import React, { useEffect , useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('login') !== 'true') {
        router.push('/signin');
      }
      else {
        setIsClient(true);
      }
    }
  }, [router]);

  if (!isClient) {
    // Optionally render a loading state while determining if client-side
    return <div className='flex flex-col justify-center items-center w-full h-screen text-blue-800 text-6xl font-extrabold'>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <div className=" flex flex-grow w-full bg-black">
        {children}
       
      </div>
      <Bottombar />
    </div>
  );
}
