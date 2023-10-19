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
import UpdateProduct from './components/Page/UpdateProduct/UpdateProduct';
import AllFood from './components/Page/Home/AllFood/AllFood';
import Login from './components/Page/Login/Login';
import Registration from './components/Page/Registration/Registration';
import AuthProvider from './components/Provider/AuthProvider';

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
        path: '/addproduct',
        element: <AddCardPage></AddCardPage>
      },
      {
        path: '/allfood',
        element: <AllFood></AllFood>
      },
      {
        path: "/food/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
        loader: ()=> fetch('http://localhost:5000/user')
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
