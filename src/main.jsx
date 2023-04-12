import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/error-page";

import {Contactpage, FAQpage, Home, Peoplepage, Siselahendused, Survepesu, Work} from './Pages';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siselahendused",
    element: <Siselahendused />,
  },
  {
    path: "/survepesu",
    element: <Survepesu />,
  },
  {
    path: "/tood",
    element: <Work />,
  },
  {
    path: "/inimesed",
    element: <Peoplepage />,
  },
  {
    path: "/KKK",
    element: <FAQpage />,
  },
  {
    path: "/kontakt",
    element: <Contactpage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
