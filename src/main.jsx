import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Contactpage, FAQpage, Home, Peoplepage, Siselahendused, Survepesu, Work} from './Pages';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/avaleht",
    element: <Home />,
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
