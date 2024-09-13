import React, { useState } from 'react'
import FormField from '../ui/FormField'
import FormRadio from '../ui/FormRadio'
import FormButton from '../ui/FormButton';

const StudentProfileEdit = ({ handleSubmit,handleCancel }) => {
    const [selectedGenderOption, setSelectedGenderOption] = useState('');
    const [selectedSplChildOption, setSelectedSplChildOption] = useState('');
  
    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ];

    const splchildOptions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ];

      const initialData = {
        name:'',
        age:1,
        gender:'male',
        phoneNoFather:0,
        phoneNoMother:0,
        email:'',
        dob:'',
        address:'',
        fatherName:'',
        motherName:'',
        nationality:'',
        religion:'',
        state:'',
        district:'',
        caste:'',
        studentClass: 5,
        //academicYear,
        //admissionNo,
        speciallyabledchild:'',
        studentpassword:''
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
        setuserData(prev => {
          handleSubmit({...prev,gender:selectedGenderOption,speciallyabledchild:selectedSplChildOption});
          return ({...prev,gender:selectedGenderOption,speciallyabledchild:selectedSplChildOption});
      });
      }

  return (
    <div className='sm:px-64 px-2 flex flex-col gap-2'>
        <p className='text-xl font-semibold text-center text-sky-500'>Students Profile</p>
        <p className='text-lg font-semibold'>Students Details</p>
        <form method='POST' className='flex flex-col gap-2 py-2' onSubmit={handleCreate} onChange={handleUserInput}>
            <FormField type='text' name={'name'} value={userData.name} label={'Student Full Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'age'} value={userData.age} label={'Age'} required={true} placeholder={'age'} />
            <FormRadio name={'gender'} label={'Gender'} required={true} selectedValue={selectedGenderOption} onChange={(e) => setSelectedGenderOption(e.target.value)} options={genderOptions} />
            <FormField type='email' name={'email'} value={userData.email} label={'Email ID'} required={true} placeholder={'email'} />
            <FormField type='date' name={'dob'} value={userData.dob} label={'Date of Birth'} required={true} placeholder={'Date of Birth'} />
            <FormField type='text' name={'address'} value={userData.address} label={'Residental Address'} required={true} placeholder={'Address'} />
            <FormField type='text' name={'studentClass'} value={userData.studentClass} label={'Student Class'} required={true} placeholder={'Class'} />
            <hr />
            <p className='text-lg font-semibold'>Parents Details</p>
            <FormField type='text' name={'fatherName'} value={userData.fatherName} label={'father Full Name'} required={true} placeholder={'name'} />
            <FormField type='text' name={'motherName'} value={userData.motherName} label={'mother Full Name'} required={true} placeholder={'name'} />
            <FormField type='number' name={'phoneNoFather'} value={userData.phoneNoFather} label={'father contact number'} required={true} placeholder={'phone'} />
            <FormField type='number' name={'phoneNoMother'} value={userData.phoneNoMother} label={'mother contact number'} required={true} placeholder={'phone'} />
            <hr />
            <p className='text-lg font-semibold'>Other Details</p>
            <FormField type='text' name={'nationality'} value={userData.nationality} label={'nationality'} required={true} placeholder={'India'} />
            <FormField type='text' name={'state'} value={userData.state} label={'state'} required={true} placeholder={'state'} />
            <FormField type='text' name={'district'} value={userData.district} label={'district'} required={true} placeholder={'district'} />
            <FormField type='text' name={'religion'} value={userData.religion} label={'religion'} required={true} placeholder={'religion'} />
            <FormField type='text' name={'caste'} value={userData.caste} label={'caste'} required={true} placeholder={'caste'} />
            <FormRadio name={'speciallyabledchild'} label={'specially abled'} required={true} selectedValue={selectedSplChildOption} onChange={(e) => setSelectedSplChildOption(e.target.value)} options={splchildOptions} />
            <FormField type='password' value={userData.studentpassword} name={'studentpassword'} label={'Student Password'} required={true} placeholder={'password'} />
                <div className='flex items-center gap-2 justify-end'>
            <FormButton text={'confirm'} type={'submit'} disabled={false} />
            <FormButton text={'cancel'} type={'button'} disabled={false} color='bg-red-500' handleClick={handleCancel} />
                </div>
        </form>
    </div>
  )
}

export default StudentProfileEdit