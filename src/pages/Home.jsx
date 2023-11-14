import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

const Home = () => {
  const { isLoggedIn, email, userId } = useContext(AuthContext);
  return (
    <div>
      Home Page: {isLoggedIn ? "auth" : "not auth"}
      <ul>
        <li>Email: {email}</li>
        <li>UserId: {userId}</li>
      </ul>
    </div>
  );
};

export default Home;
