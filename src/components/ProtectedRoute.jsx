// components/ProtectedRoute.jsx
// This entire app is admin-only, so we just check for a valid session —
// no role branching needed (unlike the public student/teacher app).

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAuth();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
