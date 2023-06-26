import React, { useState, useEffect, useRef } from "react";
import Keycloak, { KeycloakInstance } from "keycloak-js";
// const client = new Keycloak({
//   url: "http://127.0.0.1:8080",
//   realm: "myrealm",
//   clientId: "myclient",
// });

interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
}

const keyCloakConfig: KeycloakConfig = {
  url: "http://127.0.0.1:8080",
  realm: "myrealm",
  clientId: "myclient",
};

const keycloak: KeycloakInstance = new Keycloak(keyCloakConfig);

const useAuth = (): [boolean, string | null] => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    keycloak
      .init({ onLoad: "login-required" })
      .then((res) => {
        setLogin(res);
        if (keycloak.token) {
          setToken(keycloak.token);
        } else {
          setToken(null);
        }
      })
      .catch((err) => alert(err));
  }, []);
  return [isLogin, token];
};

export default useAuth;
