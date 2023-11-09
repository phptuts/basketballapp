import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>Home Page: {isLoggedIn ? "auth" : "not auth"}</div>;
};

export default Home;
