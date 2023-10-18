import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route';
import ErrorPage from './components/Page/ErrorPage/ErrorPage';
import Home from './components/Page/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home> 
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
