import React, { useState } from 'react'
import FormField from '../ui/FormField'
import FormRadio from '../ui/FormRadio'
import FormButton from '../ui/FormButton';

const SchoolProfileEdit = ({ handleSubmit,handleCancel }) => {

  const initialData = {
    schoolName:'',
    UDISECode:'',
    principalName:'',
    mobileNumber:'',
    email:'',
    address:'',
    // boardAffiliated:'',
    // affiliation:'',
    // intakeCapacity:'',
    // labs:'',
    // classes:'',
    // teachersCount:'',
    // studentCount:'',
    schoolpassword:'',
    aboutUs:''
  };

  const [userData, setuserData] = useState(initialData);

      const handleUserInput = (e) => {
        const { name,value } = e.target;
        setuserData({
          ...userData,[name]:value
        });
      }

      const handleCreate = (e) => {
        e.preventDefault();
        handleSubmit(userData);
      }

  return (
    <div className='sm:px-64 px-2 flex flex-col gap-2'>
        <p className='text-xl font-semibold text-center text-sky-500'>School Profile</p>
        <p className='text-lg font-semibold'>School Details</p>
        <form method='POST' className='flex flex-col gap-2 py-2' onSubmit={handleCreate} onChange={handleUserInput}>
            <FormField type='text' name={'schoolName'} value={userData.schoolName} label={'School Full Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'UDISECode'} value={userData.UDISECode} label={'UIDSE code'} required={true} placeholder={'UIDSE code'} />
            <FormField type='text' name={'principalName'} value={userData.principalName} label={'Principal Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'mobileNumber'} value={userData.mobileNumber} label={'Contact Number'} required={true} placeholder={'phone'} />
            <FormField type='email' name={'email'} value={userData.email} label={'Email ID'} required={true} placeholder={'email'} />
            <FormField type='text' name={'address'} value={userData.address} label={'School Address'} required={true} placeholder={'address'} />
            <FormField type='password' name={'schoolpassword'} value={userData.schoolpassword} label={'School Password'} required={true} placeholder={'password'} />
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
          About Us<span className="text-red-500">*</span>
        </label>
            <textarea rows={3} name='aboutUs' value={userData.aboutUs} className='block w-full py-1 px-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:capitalize' ></textarea>
            </div>
            {/* <hr /> */}
            {/* <p className='text-lg font-semibold'>Facility Details</p> */}
                <div className='flex items-center gap-2 justify-end'>
            <FormButton text={'confirm'} type={'submit'} disabled={false} />
            <FormButton text={'cancel'} type={'button'} disabled={false} color='bg-red-500'  handleClick={handleCancel}/>
                </div>
        </form>
    </div>
  )
}

export default SchoolProfileEdit