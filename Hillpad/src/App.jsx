import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import Courses from './pages/courses'
import DashboardStaff from './pages/staff/dashboardStaff'
import DisciplineDetails from './pages/disciplineDetails'

function App() {
  return (
    < div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/dashboardStaff' element={<DashboardStaff />} />
          <Route path='/discipline' element={<DisciplineDetails />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
