import { useContext } from "react";
import { authContext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(authContext);
  const location = useLocation();
  if (token === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
