'use client';

import { useAppSelector } from '@/src/lib/store/hooks';
import React from 'react'

function UserNavbar() {
  const userInfo = useAppSelector((state) => state.user.userInfo);


  return (
    <nav className="fixed top-0 z-40 w-full bg-basebg h-20 pl-64 border-b border-grey90 flex items-center justify-end">
      <div className='rounded-full bg-navy mx-5 p-4'>
        <div className='text-2xl text-white font-black items-center'>
          {userInfo.gym_name}
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar;