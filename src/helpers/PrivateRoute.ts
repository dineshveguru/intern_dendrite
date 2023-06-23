import React, { ReactNode } from "react";
import { useKeycloak } from "@react-keycloak/web";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  if (isLoggedIn) {
    return children as JSX.Element;
  } else {
    return null;
  }
};

export default PrivateRoute;
