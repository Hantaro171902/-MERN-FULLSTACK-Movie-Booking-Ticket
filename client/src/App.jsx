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
import SeatLayout from '../pages/SeatLayout'
import AddShows from '../pages/admin/AddShows'
import Dashboard from '../pages/admin/Dashboard'
import ListShows from '../pages/admin/ListShows'
import ListBookings from '../pages/admin/ListBookings'
import Layout from '../pages/admin/Layout'

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
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-shows' element={<AddShows/>}/>
          <Route path='list-shows' element={<ListShows/>}/>
          <Route path='list-bookings' element={<ListBookings/>}/>
        </Route>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App