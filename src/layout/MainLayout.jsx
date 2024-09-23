import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SwiperComponent from '../components/Swiper'
import ResponsiveNavbar from '../components/ResponsiveNavbar'

const MainLayout = () => {
  return (
    <>
        <ResponsiveNavbar />
        {/* <NavBar/> */}
        {/* <Outlet/> */}
        <SwiperComponent />
        <SwiperComponent />
    </>
  )
}

export default MainLayout