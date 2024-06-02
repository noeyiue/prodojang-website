import Slidebar from '@/src/components/layout/Slidebar'
import UserNavbar from '@/src/components/layout/UserNavbar'
import React from 'react'

function allMember() {
  return (
    <div>
    <Slidebar />
    <UserNavbar />
    <div className='pt-20 pl-64 min-h-screen'>
      <span>all-member</span>
    </div>
  </div>
  )
}

export default allMember