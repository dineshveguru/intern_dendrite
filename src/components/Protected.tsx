import React, { useEffect, useRef } from "react";
import SideBar from "./Home/SideBar";
import Home from "./Home/Hero";
import Favourites from "./Home/Favourites";
import Playlists from "./Home/Playlists";
import Search from "./Home/Search";
import { useSelector } from "react-redux";
import { RootState, ViewOption } from "../store/types";
import * as jose from "jose";
import "./Home/home_styles.css";

interface Props {
  token: string | null;
}

async function authenticate(token: string) {
  const spki =
    "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmqh8oV9r6OOFVwd9JQ4TuLEFRTWj4e0OE4y7EG3/tHIRs16nUyZ0FUdqU+KFd8y0GAf1jrwEltzf4uT/jdROzWtv7nkSpYyq0N33tUnpYB56UfslIvteqMeApUDfRHL1dW3yagcX3ILgU0oBdrW8L/Lk5/qQhzxQ72EEpqc0TzKGG6hEzy/Dyy93sFtc7cTbWxUOke71LIoqUEoarUPyLQjVBZ0XogROUlZc53/4fH/0PDVDXNDoU4iS1Ivuf3kfPf3Y9aFJ52BSt3QN6CymGtUFlZ+l94PEwaBU6C45ADsexvPHRON1pBKQiiAUb5yVI8/3G76mEKmULSHowGX7PQIDAQAB-----END PUBLIC KEY-----";
  const alg = "RS256";
  const publicKey = await jose.importSPKI(spki, alg);
  const { payload, protectedHeader } = await jose.jwtVerify(token, publicKey);
  return payload;
}

const Protected: React.FC<Props> = ({ token }) => {
  const [data, setData] = React.useState<any>();
  useEffect(() => {
    if (token) {
      authenticate(token as string).then((payload) =>
        setData({
          [payload.preferred_username as string]: {
            playlists: [],
            favourites: [],
          },
        })
      );
    }
  }, [token]);
  const setIsFavourite = (id: string) => {
    const newData = { ...data };
    newData[Object.keys(newData as any)[0]].favourites.push(id);
    setData(newData);
  };

  const deleteIsFavourite = (id: string) => {
    const newData = { ...data };
    const index =
      newData[Object.keys(newData as any)[0]].favourites.indexOf(id);
    newData[Object.keys(newData as any)[0]].favourites.splice(index, 1);
    setData(newData);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const userName = data ? Object.keys(data as any)[0] : "";
  const selectedView = useSelector((state: RootState) => state.selectedView);
  const HomeView: ViewOption = "Home" as ViewOption;
  const FavouritesView: ViewOption = "Favourites" as ViewOption;
  const PlaylistsView: ViewOption = "Playlists" as ViewOption;
  const SearchView: ViewOption = "Search" as ViewOption;
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 d-flex protected--container">
        <SideBar />
        {selectedView === HomeView && (
          <Home
            userName={userName}
            setIsFavourite={setIsFavourite}
            deleteFavourite={deleteIsFavourite}
          />
        )}
        {selectedView === FavouritesView && (
          <Favourites
            favourites={data[userName].favourites}
            setFavourite={setIsFavourite}
            deleteFavourite={deleteIsFavourite}
          />
        )}
        {selectedView === PlaylistsView && <Playlists />}
        {selectedView === SearchView && (
          <Search
            setFavourite={setIsFavourite}
            deleteFavourite={deleteIsFavourite}
          />
        )}
      </div>
    </div>
  );
};

export default Protected;
