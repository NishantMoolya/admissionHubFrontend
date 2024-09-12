import React from 'react'
import StudentProfile from './pages/StudentProfile'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Applications from './pages/dashboard/Applications'
import StudentProfileEdit from './pages/StudentProfileEdit'
import SchoolProfileEdit from './pages/SchoolProfileEdit'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student/edit' element={<StudentProfileEdit />} />
        <Route path='/student/profile' element={<StudentProfile />} />
        <Route path='/school/edit' element={<SchoolProfileEdit />} />
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='applications' element={<Applications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App