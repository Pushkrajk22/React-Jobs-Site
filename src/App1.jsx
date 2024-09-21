import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Jobs from './pages/Jobs'
import HomePage from './pages/HomePage'
import AddJobPage from './pages/AddJobPage'
import MainLayout from './layout/MainLayout'

const App1 = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path = '/jobs' element={<Jobs/>}/>
                <Route path = '/add-job' element={<AddJobPage/>}/>
            </Route>
        )
    )

  return <RouterProvider router={router}/>
}

export default App1