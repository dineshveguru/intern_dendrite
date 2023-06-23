import React from "react";
import "./App.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import Home from "./pages/Homepage";
import Secured from "./pages/Securedpage";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/secured",
      element: <Secured />,
    },
  ]);
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <RouterProvider router={router} />
        <h1>Dinesh</h1>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
