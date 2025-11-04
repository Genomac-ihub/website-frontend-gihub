import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserDetail from "../tanstack/useUserDetail";

type Props = { children?: React.ReactNode };

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: user, isLoading } = useUserDetail();
  const location = useLocation();
  // const whatsappGroupUrl = "https://chat.whatsapp.com/BcZ96RFKRet5sCwvaMF5e0?mode=wwt";

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

  if (user) return <>{children}</>;
  //   window.location.href = whatsappGroupUrl
  // return null
  return (
    
    <Navigate
      to={`/login?redirect=${encodeURIComponent(
        location.pathname + location.search
      )}`}
      replace
    />
    
  );
};

export default ProtectedRoute;