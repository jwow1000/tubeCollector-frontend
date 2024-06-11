import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./views/Root/Root.jsx";
import Login from "./views/Login/Login.jsx";
import SignIn from './components/SignIn.jsx';
import Register from './components/Register.jsx';
import Home from './views/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([

  {
    element: <Root />,
    path: "/",
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "home",
      },
      {
        element: <Login />,
        path: "login",
        children: [
          {
            element: <SignIn />,
            path: "signin",
            action: SignIn.action
          },
          {
            element: <Register />,
            path: "register",
            action: Register.action
          },

        ]
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals