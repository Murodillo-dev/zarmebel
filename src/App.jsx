import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Spalniy from './Pages/Spalniy/Spalniy'
import Stol from './Pages/Stol_Stul/Stol'
import Yumshoq from './Pages/Yumshoq/Yumshoq'
import Shkaf from './Pages/Shkaf/Shkaf'
import Penal from './Pages/Penal/Penal'
import Toqilgan from './Pages/Toqilgan/Toqilgan'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Spalniy />
        },
        {
          path: 'stolstul',
          element: <Stol />
        },
        {
          path: 'yumshiq',
          element: <Yumshoq />
        },
        {
          path: 'shkaf',
          element: <Shkaf />
        },
        {
          path: 'penal',
          element: <Penal />
        },
        {
          path: 'toqilgan',
          element: <Toqilgan />
        }
      ]
    }
  ])
  return (
    <div className='max-w-[1440px] w-[100%] h-auto mx-auto'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App