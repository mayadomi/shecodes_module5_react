import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import NavBar from './components/NavBar/NavBar.jsx';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />
  // },
  {
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);



//import App from './App.jsx'
//import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
