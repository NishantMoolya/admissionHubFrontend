import React from 'react'
import CounterWithText from '../../ui/Counter'
import ApplicationTable from '../../components/ApplicationTable'

const Applications = () => {
    const students = [
        { name: 'John Doe', schoolId: 'SCH001', status: 'Pending' },
        { name: 'Jane Smith', schoolId: 'SCH002', status: 'Pending' },
        { name: 'Mike Johnson', schoolId: 'SCH003', status: 'Pending' },
      ];

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-evenly items-center'>
       <CounterWithText text={'Total Applications'} number={150} />
       <CounterWithText text={'Total Applications'} number={100} />
       <CounterWithText text={'Total Applications'} number={50} />
        </div>
        <div className='flex flex-col gap-2'>
        <p className='text-lg font-semibold '>Admission Applications</p>
            <ApplicationTable students={students} />
        </div>
    </div>
  )
}

export default Applications