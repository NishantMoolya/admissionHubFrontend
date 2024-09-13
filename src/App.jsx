import React from 'react'
import StudentProfile from './pages/StudentProfile'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Applications from './pages/dashboard/Applications'
import StudentProfileEdit from './pages/StudentProfileEdit'
import SchoolProfileEdit from './pages/SchoolProfileEdit'
import SchoolRequests from './pages/dashboard/SchoolRequests'
import Explore from './pages/Explore'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SchoolProfile from './pages/SchoolProfile'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-16'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student/edit' element={<StudentProfileEdit />} />
        <Route path='/student/profile' element={<StudentProfile />} />
        <Route path='/school/profile' element={<SchoolProfile />} />
        <Route path='/school/edit' element={<SchoolProfileEdit />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='applications' element={<Applications />} />
        <Route path='schoolrequests' element={<SchoolRequests />} />
        </Route>
      </Routes>
      </div>
    </div>
  )
}

export default App