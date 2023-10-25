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
import CourseDetails from './pages/courseDetails'
import Disciplines from './pages/discipline'
import School from './pages/school'
import { fetchCountry } from './redux/countrySlice'
import { fetchCourses } from './redux/courseSlice'
import { fetchDisciplines } from './redux/disciplineSlice'
import { fetchBachelors } from './redux/bachelorsSlice'
import { fetchMasters } from './redux/mastersSlice'
import { fetchDoctorates } from './redux/doctoratesSlice'
import { fetchDegreeTypes } from './redux/degreeTypeSlice'
import { fetchCurrencies } from './redux/currencySlice'
import Explore from './pages/explore'
import DisciplinesList from './components/test'
import CountrySearch from './pages/countrySearch'
import SearchPage from './pages/searchPage'
import ReturnUp from './components/returnUp'
import DisciplineSearchPage from './pages/disciplineSearch'
function App() {
  const [userName , setUserName] = useState('Logged')
  const user = useSelector((state) => state.user);
  const allCourses = useSelector((state) => state.courses.coursesList);
  const allCoursesCount = useSelector((state) => state.courses.count);
  const bachelorsCourses = useSelector((state) => state.bachelors.bachelorsList);
  const bachelorsCount = useSelector((state) => state.bachelors.count);
  const mastersCourses = useSelector((state) => state.masters.mastersList);
  const mastersCount = useSelector((state) => state.masters.count);
  const doctoratesCourses = useSelector((state) => state.doctorates.doctoratesList);
  const doctoratesCount = useSelector((state) => state.doctorates.count);

  const dispatch = useDispatch() 
  const dispatch2 = useDispatch();
  const courses = useDispatch();
  const disciplines = useDispatch();
  const bachelors = useDispatch();
  const masters = useDispatch();
  const doctorates = useDispatch();
  const degree = useDispatch();
  const country = useDispatch();
  const currency = useDispatch();


  useEffect( () => {
      dispatch(fetchUser2())
      dispatch2(fetchCountry())
      courses(fetchCourses())
      disciplines(fetchDisciplines())
      bachelors(fetchBachelors())
      masters(fetchMasters())
      doctorates(fetchDoctorates())
      degree(fetchDegreeTypes())
      currency(fetchCurrencies())
      country(fetchCountry())
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
          <Route path='/explore' element={<Explore />} />
          <Route path='/courses' element={<Courses props={{courses: allCourses, count: allCoursesCount}}/>} >
            <Route path=':id' element={<Courses />} />
          </Route>

          <Route path='/coursefinder' element={<SearchPage />} />
          
          <Route path='/search-discipline/' element={<DisciplineSearchPage />} />


          <Route path='/search' element={<CountrySearch />} />
          <Route path='/search/:country_code' element={<CountrySearch />} />
          
          <Route path='/bachelors' element={<Courses props={{ programme: 'bachelors', courses: bachelorsCourses, count: bachelorsCount}}/>}>
            <Route path=':id' element={<Courses  props={{url: '?programme=bachelors&discipline=', programme: 'bachelors'}} />} />
          </Route>

          <Route path='/masters' element={<Courses props={{  programme: 'masters', courses: mastersCourses, count: mastersCount}}/>} >
            <Route path=':id' element={<Courses  />} />
          </Route>

          <Route path='/doctorates' element={<Courses props={{programme: 'doctorates', courses: doctoratesCourses, count: doctoratesCount}}/>} >
            <Route path=':id' element={<Courses  />} />
          </Route>

          <Route path='/school/:name' element={<School  props={user} />} />
          <Route path='/course/:slug' element={<CourseDetails/>} />
          <Route path='/discipline/' element={<Disciplines />} />
          <Route path='/discipline/:name' element={<DisciplineDetails />} />
          <Route path='/test' element={<DisciplinesList/>} />
          <Route path='*' element={<h1 className='my-40'>Not Found</h1>} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:name' element={<CountryDetail />} />
        </Routes>
        <ReturnUp />
        <Footer />
    </div>
  )
}

export default App
