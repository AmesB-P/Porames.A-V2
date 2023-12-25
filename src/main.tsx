import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import { ErrorPage } from './Components/error-page';
import Home from './Components/routes/Home';
import Introduction from './Components/routes/AboutMe';
import SkillAndEducation from './Components/routes/SkillAndEducation';
import { ThemeContextProvider } from './Components/theme/ThemContextProvider';
// import './index.css'
import './CSS/sass/main.scss'
import Contact from './Components/routes/Contact';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "*",
        element: <Navigate to="/Home" replace /> ,
        errorElement: <ErrorPage />,
      },
      {
        path: "Home",
        index : true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "About_me",
        element: <Introduction />,
        errorElement: <ErrorPage />,
      },
      {
        path: "SkillAndEducation",
        element: <SkillAndEducation />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ]
  }
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
