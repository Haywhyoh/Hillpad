import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/home'
import Courses from './pages/courses'
import DisciplineDetails from './pages/disciplineDetails'
import SearchBar from './components/test'
import Header from './components/header'
import Countries from './pages/countries'
import CountryDetail from './pages/countryDetails'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { fetchUser2, update } from './redux/userSlice'
import axios from 'axios'
import CourseDetails from './pages/courseDetails'
import Disciplines from './pages/discipline'
import School from './pages/school'
import { fetchCountry } from './redux/countrySlice'
import { fetchCourses } from './redux/courseSlice'
function App() {
  const [userName , setUserName] = useState('Logged')
  const user = useSelector((state) => state.user);
  const countries = useSelector((state) => state.country.countryList);
  const dispatch = useDispatch() 
  const dispatch2 = useDispatch();
  const courses = useDispatch();

  
  useEffect( () => {
      dispatch(fetchUser2())
      dispatch2(fetchCountry())
      courses(fetchCourses())
      return () => {
      if (user.userInfo.firstName) {
        setUserName(user.userInfo.firstName)
      }
    }
  }, [])
  return (
    < div >
        <Header props={user}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/school/:name' element={<School  props={user} />} />
          <Route path='/course/:name' element={<CourseDetails props={user}/>} />
          <Route path='/discipline/' element={<Disciplines />} />
          <Route path='/discipline/:name' element={<DisciplineDetails />} />
          <Route path='/test' element={<SearchBar/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:name' element={<CountryDetail />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
