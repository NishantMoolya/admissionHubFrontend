import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/login.css';
import { login } from '../redux/reducers/userReducer';
import { getUserProfile } from '../redux/api/userApi';
import useRegister from '../hooks/useRegister';
import { showToast } from '../redux/reducers/toastReducer';

const InputField = ({ label,name,type='text' }) => {
  return(
    <input type={type} name={name} id={name} placeholder={label} className='outline-none border border-slate-200 py-1 px-3 rounded-lg focus:border-slate-900 placeholder:capitalize placeholder:text-slate-500' required autoComplete='off' />
  )
}
const AuthButton = ({ label,type='button' }) => {
  return(
    <input type={type} value={label} className='outline-none border-none py-1 mt-4 capitalize bg-sky-500 hover:bg-sky-600 hover:scale-95 text-white rounded' />
  )
}
const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth) return navigate('/');
  },[auth]);

  let initialData = {
    email:"",
    password:"",
    type:'student'
  }

  const baseURL = 'http://localhost:8000/api/v1';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email,password,type } = formData;
      const data = await registerData(baseURL+'/login','POST',{ email,password,type },200);
      if (!data) {
        throw new Error();
      }
      if(data.status === 200){
        dispatch(login());
        //dispatch(showToast({ message:'Login successful',type:'success'}));
        dispatch(getUserProfile());
        return navigate('/');
      }else if(data.status === 400){
         return //dispatch(showToast({ message:'Invalid credentials',type:'info'}));
      }else if(data.status === 401){
        //dispatch(showToast({ message:'Not a registered user',type:'info'}));
        //return setIsLogin(false);
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`An error occurred in login user:${err}`);
      dispatch(showToast({ message:'An error occurred in server',type:'error'}));
    }
  }

  const { formData,handleUserInput,registerData} = useRegister(initialData);

  const handleEnter = (e) => { 
    if (e.key.toLowerCase() === 'enter') {
      handleLogin(e);
    }
  }

        return (
           <div className='signup_frame'>
            <form className='flex flex-col gap-2 p-4 rounded-md shadow sm:w-80 w-72' method='POST' onSubmit={handleLogin} onChange={handleUserInput} onKeyDown={handleEnter}>
              <h2 className='font-bold text-3xl text-sky-500 capitalize text-center mb-1'>{"Welcome back😀"}</h2>
              <InputField type={'email'} name={'email'} label={'email'}  />
              <InputField type={'password'} name={'password'} label={'password'}  />
              <select name="type" id="type" className='outline-none border border-slate-200 py-1 px-3 rounded-lg focus:border-slate-900 placeholder:capitalize placeholder:text-slate-500' value={formData.type}>
                <option value="student">Student</option>
                <option value="faculty">School</option>
              </select>
              <AuthButton type={'submit'} label={`login`} />
             <p className='text-sm font-semibold text-center'>Don't have an account?<NavLink to={'/signup'}><span className='text-sky-500'>Signup</span></NavLink></p>
                {/* : <p className='text-sm font-semibold text-center'>Already have an account? <span onClick={() => setIsLogin(true)} className='text-sky-500'>Login</span></p>}  */}
            </form>
           </div>
        )
    }

export default Login;