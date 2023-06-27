import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/home'
import Courses from './pages/courses'
import DisciplineDetails from './pages/disciplineDetails'
import SearchBar from './components/test'
import Header from './components/header'
import Countries from './pages/countries'
function App() {
  return (
    < div >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/discipline/' element={<DisciplineDetails />} />
          <Route path='/discipline/:name' element={<DisciplineDetails />} />
          <Route path='/test' element={<SearchBar/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/countries' element={<Countries />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
