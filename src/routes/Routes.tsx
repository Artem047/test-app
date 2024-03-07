import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Auth from "../auth/Auth";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Work from "../pages/Work";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/work',
                element: <Work />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
])