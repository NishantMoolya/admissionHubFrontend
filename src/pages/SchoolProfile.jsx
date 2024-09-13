// SchoolProfile.jsx
import React, { useEffect, useState } from 'react';
import school_logo from '../assets/school_logo.jpg';
import SchoolGallery from '../components/SchoolGallery';
import SchoolOverview from '../components/SchoolOverview';
import { useFetcher } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const SchoolProfile = ({ schoolId='66e3b35e327a8fd275cdffbd' }) => {
  const [isGallery, setIsGallery] = useState(true);

  const getData = useFetch();

  const [schooldata, setSchooldata] = useState(null);
  useEffect(() => {
    getData('http://localhost:8000/api/v1/schools/'+schoolId).then(data =>{ setSchooldata(data?.school)
      console.log(data);
    });
  },[]);

  return (
    <div className="sm:px-28 px-0">
      <div className={'h-24 w-full sm:rounded shadow relative schoolBanner bg-cover'}>
        <img
          src={school_logo}
          alt="School Logo"
          className="rounded-full shadow h-24 w-24 absolute -bottom-9 left-5"
        />
      </div>
      <div className="mt-9 p-4 bg-white rounded-lg shadow-md font-semibold relative">
        <h1 className="text-xl font-bold mb-2">{schooldata.schoolName}</h1>
        <p className="text-sm mb-1 font-semibold">
          <strong>UDISE Code:</strong> {schooldata.UDISECode}
        </p>
        <p className="text-sm font-bold mb-1">CBSE, State Board</p>
        <div className="flex items-center gap-1 text-sm mb-1">
        <i class="fa-solid fa-location-dot"></i>
        <span>{schooldata.address}</span>
        </div>
        <div className="flex items-center gap-1 text-sm mb-1">
        <i class="fa-solid fa-envelope"></i>
          <span>example@school.com</span>
        </div>
        <div className="flex items-center text-sm mb-1">
        <i class="fa-solid fa-phone"></i>
          <span>+123 456 7890</span>
        </div>
        {/* apply for admission button */}
        <button disabled={false} className='py-1 px-3 bg-sky-500 text-white font-semibold text-base shadow rounded capitalize hover:bg-sky-600 absolute right-4 bottom-4 flex items-center'>Apply</button>
      </div>

      {/* overview and gallery */}
      <div className='w-full'>
        <button className={`w-1/2 py-1 px-3  ${isGallery?'bg-sky-500':'bg-sky-400'} text-white font-semibold text-base shadow capitalize hover:bg-sky-600`} onClick={() => setIsGallery(true)}>Overview</button>
        <button className={`w-1/2 py-1 px-3  ${isGallery?'bg-sky-400':'bg-sky-500'} text-white font-semibold text-base shadow capitalize hover:bg-sky-600`} onClick={() => setIsGallery(false)}>Gallery</button>
      </div>
      <div>
      
        {
          !isGallery?<SchoolGallery />:<SchoolOverview />
        }
      </div>
      </div>
  );
};

export default SchoolProfile;