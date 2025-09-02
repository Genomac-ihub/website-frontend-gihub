import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import MyLearning from './components/MyLearning';
import NotFound from './pages/NotFound';
import NothingToSee from './components/NothingToSee';
import Layout from './Layout/Layout';
import AppWrapper from './Layout/AppWrapper';
import WebinarLandingPage from './components/WebinarLandingPage';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Form from './pages/Form';

const router = createBrowserRouter([
  {
    element: <AppWrapper />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          {
            path: "/courses",
            element: <Courses />
          },
          { path: "/my-learning", element: <MyLearning /> },
          {
            path: "/webinar",
            element: <WebinarLandingPage />
          },
          {
            path: "/event",
            element: <Landing
            //  darkMode={darkMode} switchTheme={switchTheme}
            />
          },
        ]
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/form",
        element: <Form />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: '/webinar',
        element: <WebinarLandingPage />
      }
    ]
  }
]);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const switchTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return <RouterProvider router={router} />;
}

export default App;
