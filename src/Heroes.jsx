import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { Admin, Analitics, Dashborad, Home, Landing } from './pages'
import StatePage from './pages/StatePage'

const Heroes = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    //creamos un usuarion con usario con roles 
    setUser({
      id: 1,
      userName: 'Jefry',
      permision: ['analize'],
      roles: ['admin']

    })
  }

  const logout = () => {
    setUser(null)
  }

  const Navigation = () => {


    return <nav>
      <ul>
        <li>
          <Link to={'dashboard'}>Dashborad</Link>


        </li>
        <li>
          <Link to={'home'}>home</Link>

        </li>
        <li>

          <Link to={'analytics'}>analitics</Link>

        </li>
        <li>

          <Link to={'admin'}>admin</Link>

        </li>
        <li>

          <Link to={'landing'}>landing</Link>


        </li>
      </ul>

    </nav>
  }


  return (
    <BrowserRouter>
      <Navigation />
      <hr />
      {
        user ? <button onClick={logout}>logout</button> : <button onClick={login}>login</button>
      }

      <Routes>

        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />

        {/* rutas protegisdas */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashborad />} />

        </Route>
        <Route path='/analytics' element={
          <ProtectedRoute isAllowed={!!user && user.permision.includes('analize')} redirectTo="/home">


            <Analitics />
          </ProtectedRoute>


        } />


        {/* <Route path='/state' element={<StatePage />} /> */}

        <Route path='/admin' element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} redirectTo='/home'>

            <Admin />
          </ProtectedRoute>
        } />




      </Routes>

    </BrowserRouter>

  )
}
export default Heroes