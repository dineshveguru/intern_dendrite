import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "react-auth",
  clientId: "songs_app",
});

export default keycloak;
