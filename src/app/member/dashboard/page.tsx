import Slidebar from '@/src/components/layout/Slidebar';
import UserNavbar from '@/src/components/layout/UserNavbar';
import { updateUserData } from '@/src/lib/store/features/user/userSlice';
import { useAppDispatch } from '@/src/lib/store/hooks';

import React, { useEffect } from 'react'


function Dashboard() {  
  
  return (
  <div>
    <Slidebar />
    <UserNavbar />
    <div className='pt-20 pl-64 min-h-screen'>
      <span>dashboard</span>
    </div>
  </div>
  )
}

export default Dashboard