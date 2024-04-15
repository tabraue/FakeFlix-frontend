import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Landing from '../pages/Landing.jsx';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';

const isAuthenticated = () => !localStorage.getItem("token") ? redirect("/login") : null


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
       { path: '/', element: <Landing/> },
       { path: '/login', element: <Login/> },
       { path: '/signup', element: <Signup/> },
       { path: '/home', element: <Home/>, /* loader: isAuthenticated */ },
       { path: '*', element: <NotFound/> },
    ],
  },
]);