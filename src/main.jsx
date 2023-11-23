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
import Admin, { adminLoader } from "./pages/Admin.jsx";
import AddGame, { addGameAction } from "./pages/AddGame.jsx";
import Logout from "./pages/Logout.jsx";
import UpdateScore, { gameLoader } from "./pages/UpdateScore.jsx";
import UpdateGame, { updateGameAction } from "./pages/UpdateGame.jsx";
import Game from "./pages/Game.jsx";

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
        element: <Game />,
        path: "/game/:gameId",
        loader: gameLoader,
      },
      {
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        path: "/admin",
        loader: adminLoader,
      },
      {
        element: (
          <ProtectedRoute>
            <UpdateScore />
          </ProtectedRoute>
        ),
        path: "/admin/game/:gameId/updatescore",
        loader: gameLoader,
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
      {
        element: (
          <ProtectedRoute>
            <UpdateGame />
          </ProtectedRoute>
        ),
        path: "/admin/game/:gameId",
        loader: gameLoader,
        action: updateGameAction,
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
