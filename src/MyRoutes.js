import React from 'react'
import{ BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './Login'
import Home from './pages/Home'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home></Home>}/>
        <Route path='/signin' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes