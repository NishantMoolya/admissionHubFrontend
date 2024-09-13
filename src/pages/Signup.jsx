import React, { useState } from 'react'
import useRegister from '../hooks/useRegister';
//import StudentForm from '../components/StudentForm';
//import SchoolForm from '../components/SchoolForm';
import StudentProfileEdit from './StudentProfileEdit';
import SchoolProfileEdit from './SchoolProfileEdit';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let initialData = {
    name:'',
    email:"",
    password:"",
    type:'student'
  }

  const { formData,handleUserInput,registerData} = useRegister(initialData);
  const baseURL = 'http://localhost:8000/api/v1';
  const [isStudent, setIsStudent] = useState('student');
  const navigate = useNavigate();

  const handleEnter = (e) => { 
    if (e.key.toLowerCase() === 'enter') {
      handleSignup(e);
    }
  }

  const handleSignup = async (userData) => {
    try {
      //const { name,email,password,type } = formData;
      //e.preventDefault();
      let data;
      if (isStudent === 'student') {
          data = await registerData(baseURL+'/students','POST',userData,201);
      }else{
          data = await registerData(baseURL+'/schools','POST',userData,201);
      }
      if (!data) {
        throw new Error();
      }
      if(data.status === 200){
        //dispatch(showToast({ message:'User already registered',type:'info'}));
        //return setIsLogin(true);
        alert('user registred');
        return navigate('/');
      }else if(data.status === 201){
        //dispatch(showToast({ message:'User account created',type:'success'}));
        //return setIsLogin(true);
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`En error occurred in registering user:${err}`);
      //dispatch(showToast({ message:'An error occurred in server',type:'error'}));
    }
  }

  const changeForm = (e) => {
    if (e.target.value === 'student') {
      setIsStudent('student');
    }else{
      setIsStudent('school');
    }
  }

  const handleCancel = () => {
    navigate('/login');
  }

  return (
    <div className=''>
      <div className='flex items-center gap-2 justify-center'>
      <label htmlFor="type">Select Role</label>
      <select name="type" id="type" className='outline-none border border-slate-200 py-1 px-3 rounded-lg focus:border-slate-900 placeholder:capitalize placeholder:text-slate-500' value={isStudent} onChange={changeForm}>
                <option value="student">Student</option>
                <option value="school">School</option>
      </select>
      </div>
      <div className='flex flex-col gap-2'>
      {/* <p className='text-lg font-semibold text-center'>Signup Form</p> */}
      {
        isStudent === 'student' ?<StudentProfileEdit handleSubmit={handleSignup} handleCancel={handleCancel} />:<SchoolProfileEdit handleSubmit={handleSignup} handleCancel={handleCancel} />
      }
      </div>
    </div>
  )
}

export default Signup