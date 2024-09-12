import React, { useState } from 'react'
import avatar from '../assets/person1.jpg'
import ParentsDetails from '../components/ParentsDetails'
import SchoolDetails from '../components/SchoolDetails'
import DocumentsDetails from '../components/DocumentsDetails'
import Chip from '../ui/Chip'
import { NavLink } from 'react-router-dom'

const StudentProfile = ({ studentImage = avatar, name = 'King maker', age = '8 years', email = 'email@gmail.com', fatherPhone = '1234567890', MotherPhone = '1234567890', fatherName = 'name', MotherName = 'name' }) => {
  const [tabindex, setTabindex] = useState(0);
  const tabs = {
    0:<ParentsDetails />,
    1:<SchoolDetails />,
    2:<DocumentsDetails />,
  }
  return (
    <div className="sm:px-28 px-0">
      <div className='h-24 w-full bg-sky-500 relative z-10'>
         <div className='absolute -bottom-12 left-5'>
          <img src={studentImage} alt="avatar" className='rounded-full shadow h-24 w-24' />
          <button className='absolute right-0 bottom-0 rounded-full py-1 px-2 text-white bg-sky-500'><i className="fa-solid fa-upload"></i>
          </button>
        </div>
        </div>
      <div className="p-4 pt-12 bg-white shadow-md font-semibold relative">
        <h1 className="text-xl font-bold mb-2">Student Name</h1>
        <p className="text-sm mb-1 font-semibold">
          <span className='font-bold'>Age</span>: 12
        </p>
        <p className="text-sm mb-1 font-semibold">
        <span className='font-bold'>Date of birth</span>: 20th July 2004
        </p>
        <p className='mb-1'><Chip text={'male'} /></p>
        <div className="flex items-center text-sm mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
          <span>123 School Lane, Education City, State, ZIP</span>
        </div>
        <div className="flex items-center text-sm mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
          <span>example@school.com</span>
        </div>
        <div className="flex items-center text-sm mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
          <span>+123 456 7890</span>
        </div>
        <div className='absolute top-4 right-8'><NavLink to={'/student/edit'}><span className='text-sky-500 text-xl'><i className="fa-solid fa-pen-to-square"></i></span></NavLink></div>
      </div>

      {/* overview and gallery */}
      <div className='w-full flex'>
        <button className={` py-1 px-3 flex-1 ${tabindex === 0?'bg-sky-500':'bg-sky-400'} text-white font-semibold text-base shadow capitalize hover:bg-sky-600`} onClick={() => setTabindex(0)}>Parents Details</button>
        <button className={`flex-1 py-1 px-3  ${tabindex === 1?'bg-sky-500':'bg-sky-400'} text-white font-semibold text-base shadow capitalize hover:bg-sky-600`} onClick={() => setTabindex(1)}>School Details</button>
        <button className={`flex-1 py-1 px-3  ${tabindex === 2?'bg-sky-500':'bg-sky-400'} text-white font-semibold text-base shadow capitalize hover:bg-sky-600`} onClick={() => setTabindex(2)}>Documents Details</button>
      </div>
      <div className='p-2'>
        {/* render content */}
        {
          tabs[tabindex]
        }
      </div>
      </div>
  )
}

export default StudentProfile