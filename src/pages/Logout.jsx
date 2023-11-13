import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

const Logout = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }, []);

  return <Navigate to="/login" />;
};

export default Logout;
