import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const AuthProtectedRoute = () => {
  const { session } = useSession();

  // If session exists, allow access to the child components.
  // Otherwise, redirect to the sign-in page.
  return session ? <Outlet /> : <Navigate to="/auth/sign-in" replace />;
};

export default AuthProtectedRoute;
