import { createContext, useState } from "react";

export const authContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user_details")) || null
  );

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <authContext.Provider
      value={{ token, setToken, logout, userData, setUserData }}
    >
      {children}
    </authContext.Provider>
  );
}
