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
import AddCardPage from './components/Page/AddCardPage/AddCardPage';
import CardDetails from './components/Page/Home/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home> 
      },
      {
        path:'/addproduct',
        element:<AddCardPage></AddCardPage>
      },
      {
        path: "/food/:id",
        element:<CardDetails></CardDetails>,
        loader: ()=> fetch('http://localhost:5000/food')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
