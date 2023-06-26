import React from "react";
import "./home_styles.css";
import Option from "./utilities/Option";

const SideBar = () => {
  const options = [
    {
      url: "home.png",
      name: "Home",
    },
    {
      url: "favourite.png",
      name: "Favourites",
    },
    {
      url: "playlist.png",
      name: "Playlists",
    },
    {
      url: "search.png",
      name: "Search",
    },
  ];
  return (
    <section className="sidebar--container col-sm-2 p-0 flex-fill d-flex flex-column justify-content-center align-items-center">
      {options.map((item) => (
        <Option name={item.name} url={item.url} />
      ))}
    </section>
  );
};

export default SideBar;
