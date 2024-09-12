import React, { useState } from 'react'
import FormField from '../ui/FormField'
import FormRadio from '../ui/FormRadio'
import FormButton from '../ui/FormButton';

const SchoolProfileEdit = () => {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Selected option:');
    };

  return (
    <div className='sm:px-40 px-2 flex flex-col gap-2'>
        <p className='text-xl font-semibold text-center text-sky-500'>School Profile</p>
        <p className='text-lg font-semibold'>School Details</p>
        <form method='POST' className='flex flex-col gap-2 py-2' onSubmit={handleSubmit}>
            <FormField type='text' name={'schoolname'} label={'School Full Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'uidsecode'} label={'UIDSE code'} required={true} placeholder={'UIDSE code'} />
            <FormField type='text' name={'principalname'} label={'Principal Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'schoolcontact'} label={'Contact Number'} required={true} placeholder={'phone'} />
            <FormField type='email' name={'schoolemail'} label={'Email ID'} required={true} placeholder={'email'} />
            <FormField type='text' name={'schooladdress'} label={'School Address'} required={true} placeholder={'address'} />
            <hr />
            <p className='text-lg font-semibold'>Parents Details</p>
            <FormField type='text' name={'fathername'} label={'father Full Name'} required={true} placeholder={'name'} />
            <FormField type='text' name={'mothername'} label={'mother Full Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'fatherphone'} label={'father contact number'} required={true} placeholder={'phone'} />
            <FormField type='number' name={'motherphone'} label={'mother contact number'} required={true} placeholder={'phone'} />
            <hr />
            <p className='text-lg font-semibold'>Other Details</p>
            <FormField type='text' name={'nationality'} label={'nationality'} required={true} placeholder={'India'} />
            <FormField type='text' name={'state'} label={'state'} required={true} placeholder={'state'} />
            <FormField type='text' name={'district'} label={'district'} required={true} placeholder={'district'} />
            <FormField type='text' name={'religion'} label={'religion'} required={true} placeholder={'religion'} />
            <FormField type='text' name={'caste'} label={'caste'} required={true} placeholder={'caste'} />
            {/* <FormRadio name={'speciallyabledchild'} label={'specially abled'} required={true} selectedValue={selectedSplChildOption} onChange={(e) => setSelectedSplChildOption(e.target.value)} options={splchildOptions} /> */}
                <div className='flex items-center gap-2 justify-end'>
            <FormButton text={'confirm'} type={'submit'} disabled={false} />
            <FormButton text={'cancel'} type={'button'} disabled={false} color='bg-red-500' />
                </div>
        </form>
    </div>
  )
}

export default SchoolProfileEdit