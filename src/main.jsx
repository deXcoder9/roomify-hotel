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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
      path: '/',
      element: <Home></Home>
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
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
