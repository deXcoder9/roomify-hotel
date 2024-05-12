import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/homepage/Home.jsx';
import App from './App.jsx';
import AuthProvider from './auth provider/AuthProvider.jsx';
import SignIn from './Authentication/SignIn.jsx';
import Rooms from './components/roomPage/Rooms.jsx';
import RoomDetails from './components/roomPage/RoomDetails.jsx';
import Spinner from './spinner/Spinner.jsx';
import UserBookings from './components/mybookings/UserBookings.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
      path: '/',
      element: <Home></Home>
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>
      },
      {
        path: '/roomDetails/:id',
        element: <RoomDetails></RoomDetails>,
        loader: () => fetch("http://localhost:5000/rooms")
      },
      {
        path: '/bookings',
        element: <UserBookings></UserBookings>
      }
    ]
  },
  {
    path: '/signin',
    element:<SignIn></SignIn>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider fallbackElement={ <Spinner />} router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
