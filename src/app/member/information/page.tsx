import Slidebar from '@/src/components/layout/Slidebar';
import UserNavbar from '@/src/components/layout/UserNavbar';


import React from 'react'


function Information() {  

  return (
  <div>
    <Slidebar />
    <UserNavbar />
    <div className='pt-20 pl-64 min-h-screen bg-grey90'>
      <span>information</span>
    </div>
  </div>
  )
}

export default Information