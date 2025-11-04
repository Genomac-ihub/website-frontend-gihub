// Top-level: lazy imports and Suspense
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { useEffect, useState, Suspense, lazy } from "react";
import './App.css';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const MyLearning = lazy(() => import('./components/MyLearning'));
const NotFound = lazy(() => import('./pages/NotFound'));
const NothingToSee = lazy(() => import('./components/NothingToSee'));
const Layout = lazy(() => import('./Layout/Layout'));
const AppWrapper = lazy(() => import('./Layout/AppWrapper'));
const WebinarLandingPage = lazy(() => import('./components/WebinarLandingPage'));
const Courses = lazy(() => import('./pages/Courses'));
const Landing = lazy(() => import('./pages/Landing'));
const Form = lazy(() => import('./pages/Form'));
const Program = lazy(() => import('./pages/Program'));
const EventStart = lazy(() => import('./components/EventStart'));
const BursaryForm = lazy(() => import("./components/BursaryForm"));
const Earn = lazy(() => import('./pages/Earn'));
const Earn2 = lazy(() => import('./components/Earn'));
const ProtectedRoute = lazy(() => import('./protectedRoute/ProtectedRoute'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ReferralPolicy = lazy(() => import('./pages/ReferralPolicy'));

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
            element: <Program />
          },
          {
            path: '/program',
            element: <Earn />
          },

          {
            path: "/earn",
            element: (
              <ProtectedRoute>
                <Earn2 />
              </ProtectedRoute>
            ),
          },
          {
            path: "/referral-policy",
            element: <ReferralPolicy />
          },
          {
            path: "/event",
            element: <Landing
            //  darkMode={darkMode} switchTheme={switchTheme}
            />
          }
        ]
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/bursary-form",
        element: <BursaryForm />
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
