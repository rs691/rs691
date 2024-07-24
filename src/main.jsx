import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom';
import About from '../routes/About.jsx';
import Contact from '../routes/Contact.jsx';
import Projects from '../routes/Projects.jsx';
import Project1 from '../routes/Project1.jsx';
import Project2 from '../routes/Project2.jsx';
import Project3 from '../routes/Project3.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';




const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },

  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/projects', element: <Projects /> },
  { path: '/project1', element: <Project1 /> },
  { path: '/project2', element: <Project2 /> },
  { path: '/project3', element: <Project3 /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)