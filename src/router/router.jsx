import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Landing from '../pages/Landing.jsx';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';
import Films from '../pages/Films.jsx';
import FilmDetail from '../pages/FilmDetail.jsx';
import Profile from '../pages/Profile.jsx';

const isAuthenticated = () => !localStorage.getItem("token") ? redirect("/login") : null


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
       { path: '/', element: <Landing/> },
       { path: '/login', element: <Login/> },
       { path: '/signup', element: <Signup/> },
       { path: '/home', element: <Home/>, loader: isAuthenticated },
       { path: '/films/:genreId', element: <Films/>, loader: isAuthenticated  },
       { path: '/film/:movieId', element: <FilmDetail/>, loader: isAuthenticated },
       { path: '/profile', element: <Profile/>, loader: isAuthenticated },
       { path: '*', element: <NotFound/> },
    ],
  },
]);