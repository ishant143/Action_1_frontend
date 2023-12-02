import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './component/Login';
import Home from './component/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home /> ,
  },{
    path:"/login",
    element:<Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} />
  );


