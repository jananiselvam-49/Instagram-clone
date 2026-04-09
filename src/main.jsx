import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Viewstory from './Viewstory.jsx'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'

const route = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },{
    path : '/Viewstory',
    element : <Viewstory/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {route}></RouterProvider>
  </StrictMode>,
)
