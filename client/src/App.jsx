import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import MovieDetails from '../pages/MovieDetails'
import MyBooking from '../pages/MyBooking'
import Navbar from '../components/Navbar'
import Favorite from '../pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<MovieDetails/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App