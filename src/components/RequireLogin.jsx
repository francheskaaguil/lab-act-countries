import { Navigate, Outlet, useLocation } from "react-router";

const isLoggedIn = false; // Replace with your actual authentication logic

const RequireLogin = () => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireLogin;