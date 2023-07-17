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
function App() {
  const [userName , setUserName] = useState('Logged')
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch() 
  // const callApi = async () => {
  //   axios.defaults.withCredentials = true;
  //   const details = await axios.get('https://54.221.177.186/api/account/detail');
  //   const result = details.data;
  //   const res = { email: result.email, firstName: result.first_name, lastame: result.last_name};
  //   dispatch(update(res));
  // }
  useEffect( () => {
      dispatch(fetchUser2())    
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
          <Route path='/discipline/' element={<DisciplineDetails />} />
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
