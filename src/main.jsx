import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, Routes } from 'react-router'
import { Router } from './Components/Routes/Routes'
import FriendContext from './Components/FriendContext/FriendContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer />
    </FriendContext>
  </StrictMode>
)
