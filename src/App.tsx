// Top-level: lazy imports and Suspense
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NothingToSee = lazy(() => import("./components/NothingToSee"));
const Layout = lazy(() => import("./Layout/Layout"));
const AppWrapper = lazy(() => import("./Layout/AppWrapper"));
// const Landing = lazy(() => import("./pages/Landing"));
const Program = lazy(() => import("./pages/Program"));
const Platform = lazy(() => import("./pages/Platform"));
const Research = lazy(() => import("./pages/Research"));
const Contact = lazy(() => import("./pages/Contact"));
const ProtectedRoute = lazy(() => import("./protectedRoute/ProtectedRoute"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const MyLearning = lazy(() => import("./components/MyLearning"));
// const ReferralPolicy = lazy(() => import("./pages/ReferralPolicy"));
const UserContactAffiliateInfo = lazy(
  () => import("./pages/UserContactAffiliateInfo")
);

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
            path: "/platform",
            element: <Platform />,
          },
          { path: "/my-learning", element: <MyLearning /> },
          {
            path: "/program",
            element: <Program />,
          },
          {
            path: "/research",
            element: <Research />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/event",
            element: <Program />,
          },
          // {
          //   path: "/earn-with-genomac",
          //   element: <Earn />,
          // },

          // {
          //   path: "/earn",
          //   element: (
          //     <ProtectedRoute>
          //       <Earn2 />
          //     </ProtectedRoute>
          //   ),
          // },

          // {
          //   path: "/referral-policy",
          //   element: <ReferralPolicy />,
          // },
          // {
          //   path: "/event",
          //   element: (
          //     <Landing
          //     //  darkMode={darkMode} switchTheme={switchTheme}
          //     />
          //   ),
          // },
        ],
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        path: "/affiliate-info",
        element: (
          <ProtectedRoute>
            <UserContactAffiliateInfo />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
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
