import { useState } from 'react'

import './App.css'
import { createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[]
  }
])  
function App() {
  return <div className='text-2xl'>Hello</div>
}

export default App
