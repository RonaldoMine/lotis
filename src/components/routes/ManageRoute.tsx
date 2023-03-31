import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Missing from "./Missing";

const ManageRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth ? (
    location.pathname === "/" ? (
      <Navigate to="admin/lands" />
    ) : (
      <Missing />
    )
  ) : (
    <Navigate to="auth/sign-in" state={{ from: location }} replace />
  );
};

export default ManageRoute;
