import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './component/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<NavBar /> ,
  },{
    path:"/login",
    element:<Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} />
  );


