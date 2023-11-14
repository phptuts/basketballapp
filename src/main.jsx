import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AuthProvider from "./contexts/auth.context.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Admin from "./pages/Admin.jsx";
import AddGame, { addGameAction } from "./pages/AddGame.jsx";
import Logout from "./pages/Logout.jsx";
import UpdateScore, { updateScoreLoader } from "./pages/UpdateScore.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Logout />,
        path: "/logout",
      },
      {
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        path: "/admin",
      },
      {
        element: (
          <ProtectedRoute>
            <UpdateScore />
          </ProtectedRoute>
        ),
        path: "/admin/game/:gameId/updatescore",
        loader: updateScoreLoader,
      },
      {
        element: (
          <ProtectedRoute>
            <AddGame />
          </ProtectedRoute>
        ),
        path: "/admin/addgame",
        action: addGameAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
