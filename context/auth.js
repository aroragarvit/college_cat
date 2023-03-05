import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookie, setCookie] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    //onboard function to validate cookie
    const res = true;
    setIsAuthenticated(res);
  }, [cookie]);

  return (
    <AuthContext.Provider
      value={{
        cookie,
        setCookie,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
