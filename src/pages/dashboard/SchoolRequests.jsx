import React from 'react'
import SchoolRequestTable from '../../components/SchoolRequestTable'

const SchoolRequests = () => {
  return (
    <div className='flex flex-col gap-4'>
         <div className='flex flex-col gap-2'>
         <p className='text-lg font-semibold '>School Requests for Student Admission</p>
         <SchoolRequestTable />
         </div>
    </div>
  )
}

export default SchoolRequests