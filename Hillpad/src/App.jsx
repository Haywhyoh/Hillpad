import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import Courses from './pages/courses'
function App() {
  return (
    < div className=''>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
