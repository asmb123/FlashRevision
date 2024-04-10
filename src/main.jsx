import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx';
import Bookmarks from './Bookmarks.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Bookmarks",
    element: <Bookmarks/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
