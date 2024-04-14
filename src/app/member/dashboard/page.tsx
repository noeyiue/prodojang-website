'use client';

import Slidebar from '@/src/components/layout/Slidebar';
import UserNavbar from '@/src/components/layout/UserNavbar';
import { updateUserData } from '@/src/lib/store/features/user/userSlice';
import { useAppDispatch } from '@/src/lib/store/hooks';

import React, { useEffect } from 'react'


function Dashboard() {  
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
  
  return (
  <div>
    <Slidebar />
    <UserNavbar />
    <div className='pt-20 pl-64 min-h-screen bg-grey90'>
      <span>dashboard</span>
    </div>
  </div>
  )
}

export default Dashboard