// context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("admin_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("admin_token"));

  const login = (userData, jwtToken) => {
    localStorage.setItem("admin_user", JSON.stringify(userData));
    localStorage.setItem("admin_token", jwtToken);
    setUser(userData);
    setToken(jwtToken);
  };

  const logout = () => {
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
