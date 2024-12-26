import { useState } from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
