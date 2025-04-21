import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts';
import AuthLayout from './Layouts/AuthLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Components/Admin';
import AuthProvider from './Provider/AuthProvider';
import HomePage from './Pages/HomePage';
import SubmitInfo from './Components/SubmitInfo';
import DetailsUser from './Components/DetailsUser';
import ContactUs from './Components/ContactUs';
import MyProfile from './Components/MyProfile';
import UpdateProfile from './Components/UpdateProfile';
import PrivateRouter from './Provider/PrivateProvider';
import AddData from './Components/AddData';
import AboutUs from './Components/AboutUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:5000/datas"),
      },
      {
        path: "/users/:id",
        element:
          <PrivateRouter>
            <DetailsUser></DetailsUser>
          </PrivateRouter>
        ,
        loader: ({ params }) => fetch(`http://localhost:5000/datas/${params.id}`)
      }
    ]
  },

  {
    path: "/admin",
    element: <Admin></Admin>,
    loader : ()=> fetch('http://localhost:5000/datas')
  },
  {
    path: "/addData",
    element: <AddData></AddData>
  },
  {
    path: "/submitInfo",
    element: <SubmitInfo></SubmitInfo>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>
  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>
  },
  
  {
    path: "/myProfile",
    element: <MyProfile></MyProfile>
  },
  {
    path: "/updateProfile",
    element: <UpdateProfile></UpdateProfile>
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
