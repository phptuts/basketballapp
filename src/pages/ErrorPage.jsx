import React from "react";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col">
            <h1>Error: {error.message}</h1>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default ErrorPage;
