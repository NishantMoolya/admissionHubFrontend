//SchoolGallery.jsx
import React from 'react'
import school1 from '../assets/school_bg.jpg'
import school2 from '../assets/school_bg.jpg'

const SchoolGallery = ({ imageList = [school1,school2,school1] }) => {
  return (
    <div className='flex flex-col'>
    {
        imageList?.map((img,ind) => {
            return <>
            <img src={img} key={ind} alt="schoolimage" className='w-full object-cover' />
            <div className='h-[2px] bg-black w-full'></div>
            </>
        })
    }
    </div>
  )
}

export default SchoolGallery