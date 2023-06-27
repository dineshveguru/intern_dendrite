import React from "react";
import SideBar from "./Home/SideBar";
import Home from "./Home/Hero";
import Favourites from "./Home/Favourites";
import Playlists from "./Home/Playlists";
import Search from "./Home/Search";
import { useSelector } from "react-redux";
import { RootState, ViewOption } from "../store/types";

const Protected = () => {
  const selectedView = useSelector((state: RootState) => state.selectedView);
  const HomeView: ViewOption = "Home" as ViewOption;
  const FavouritesView: ViewOption = "Favourites" as ViewOption;
  const PlaylistsView: ViewOption = "Playlists" as ViewOption;
  const SearchView: ViewOption = "Search" as ViewOption;
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 d-flex" style={{ height: "100vh" }}>
        <SideBar />
        {selectedView === HomeView && <Home />}
        {selectedView === FavouritesView && <Favourites />}
        {selectedView === PlaylistsView && <Playlists />}
        {selectedView === SearchView && <Search />}
      </div>
    </div>
  );
};

export default Protected;
