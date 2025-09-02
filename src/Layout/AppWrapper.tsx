import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

export default function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
