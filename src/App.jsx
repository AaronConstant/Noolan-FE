import { useState } from 'react'
import supabase from './supabaseclient'
import './App.css'
import { Routes, Route } from 'react-router'
import EditUser from './Components/EditUser'
import NewUser from './Components/NewUser'
import ViewAllUsers from './Components/ViewAllUsers'
import HomePage from './Components/HomePage'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='edit/:id'element={<EditUser/>}/>
      <Route path='/add'element={<NewUser/>}/>
      <Route path='/view'element={<ViewAllUsers/>}/>
     </Routes>
    </>
  )
}

export default App
