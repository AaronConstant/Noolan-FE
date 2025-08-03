import { useState } from 'react'
import supabase from './supabaseclient'
import './App.css'
import { Routes, Route } from 'react-router'
import EditUser from './Components/EditUser'
import NewUser from './Components/NewUser'
import ViewAllUsers from './Components/ViewAllUsers'
import AddUser from './Components/AddUser'


function App() {

  return (
    <>
     <Routes>
      <Route element={<AddUser/>}/>
      <Route element={<EditUser/>}/>
      <Route element={<NewUser/>}/>
      <Route element={<ViewAllUsers/>}/>
     </Routes>
    </>
  )
}

export default App
