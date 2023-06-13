import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import Courses from './pages/courses'
import DashboardStaff from './pages/staff/dashboardStaff'
import DisciplineDetails from './pages/disciplineDetails'
import StaffCountries from './pages/staff/staffCountries'
import StaffCourses from './pages/staff/staffCourses'
import StaffDegree from './pages/staff/staffDegree'
import StaffDisciplines from './pages/staff/staffDiscipline'
import StaffSchools from './pages/staff/staffSchools'

function App() {
  return (
    < div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/staff' element={<DashboardStaff />} >
            <Route path='countries' element={<StaffCountries />} />
            <Route path='courses' element={<StaffCourses />} />
            <Route path='/staff/degree' element={<StaffDegree />} />
            <Route path='disciplines' element={<StaffDisciplines />} />
            <Route path='schoools' element={<StaffSchools />} />
          </Route>
          <Route path='/discipline' element={<DisciplineDetails />} />
        </Routes>
    </div>
  )
}

export default App
