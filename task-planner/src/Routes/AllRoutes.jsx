import React from 'react'
import CreateSprints from './CreateSprints'
import Dashboard from './Dashboard'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/sprint" element={<CreateSprints></CreateSprints>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
  )
}

export default AllRoutes