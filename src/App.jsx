import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className='container'>
    <div className='w-20'><Navbar/></div>
    <div className='w-50'>
      <Feed></Feed>
      </div>
    <div className='w-30'>
      <Suggestions></Suggestions>
    </div>
    </div>
  )
}

export default App
