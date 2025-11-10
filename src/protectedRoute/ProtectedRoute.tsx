// ProtectedRoute component
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserDetail from "../tanstack/useUserDetail";
import UserContactInfo from "../pages/UserContactAffiliateInfo";
type Props = { children?: React.ReactNode };

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: user, isLoading } = useUserDetail();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-3">
          <div
            className="h-10 w-10 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"
            aria-label="Loading"
          ></div>
          <p className="text-sm text-gray-600 animate-pulse">G-ihub's security checkpoint...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`}
        replace
      />
    );
  }

  // Gate the /earn route behind contact info completion in localStorage
  if (location.pathname === "/earn") {
    const completed = localStorage.getItem("isCompleted") || false;


    if (!completed) {
      return <Navigate
        to={`/affiliate-info`}
        replace
      />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;