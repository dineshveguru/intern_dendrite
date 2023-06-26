import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://localhost:8080/auth/",
  realm: "myrealm",
  clientId: "myclient",
};

const keycloak = new Keycloak({
  url: "http://127.0.0.1:8080",
  realm: "myrealm",
  clientId: "myclient",
});

export default keycloak;
