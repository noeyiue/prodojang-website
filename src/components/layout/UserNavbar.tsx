'use client';

import { updateUserData } from '@/src/lib/store/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import React, { useEffect } from 'react'

function UserNavbar() {

  const dispatch = useAppDispatch();

  async function fetchData() {
    try {
      const response = await fetch('/api/get-user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resJson = await response.json();
      if (resJson.success) {
        dispatch(updateUserData(resJson.message));
      } 
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  useEffect(() => {
    fetchData(); 
  }, []);
  
  const userInfo = useAppSelector((state) => state.user.userInfo);
  
  return (
    <nav className="fixed top-0 z-40 w-full bg-basebg h-20 pl-64 border-b flex items-center justify-end">
      <div className='rounded-full bg-navy mx-5 p-4'>
        <div className='text-2xl text-white font-black items-center'>
          {userInfo.gym_name}
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar;