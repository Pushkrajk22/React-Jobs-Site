//type rafce for boiler plate
import React from 'react'
import Add from './components/Add'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Section from './components/Section'
import BrowseJobs from './components/BrowseJobs'
import ViewJobs from './components/ViewJobs'



 const App = () => {
  let empnos = ["Ram", "Remo", "Rahim"]
  return (
    <>
      <NavBar/>
      <Header/>
      <Section/>
      <BrowseJobs/>
      <ViewJobs/>
    </>
  )
}

export default App