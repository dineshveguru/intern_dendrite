import React from "react";
import Card from "./utilities/Card";
import axios from "axios";
interface Props {
  favourites: string[];
  setFavourite: (id: string) => void;
  deleteFavourite: (id: string) => void;
}

async function getData(id: string) {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/songs/get-details",
    params: {
      key: id,
      locale: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "8f53f583f3msh10d9910bfe48574p1ca113jsn625093ecaf9e",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const Favourites: React.FC<Props> = ({
  favourites,
  setFavourite,
  deleteFavourite,
}) => {
  const [tracks, setTracks] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        favourites.map(async (id: string) => {
          const track = await getData(id);
          return track;
        })
      );
      setTracks(data);
    };
    fetchData();
  }, [favourites]);
  return (
    <section className="hero--container col-sm-10 p-0 flex-fill p-4">
      <h2>Favourites</h2>
      <hr />
      {/* {tracks.length > 0 ? (
        <section className="tracks--layout">
          {tracks.map((track: any) => {
            return (
              <Card
                image={track.images.background}
                title={track.title}
                url={track.url}
                id={track.key}
                setFavourite={setFavourite}
                deleteFavourite={deleteFavourite}
              />
            );
          })}
        </section>
      ) : (
        <h4>No Favourites Yet!</h4>
      )} */}
      {favourites.length === 0 ? (
        <h4>No Favourites Yet!</h4>
      ) : tracks.length > 0 ? (
        <section className="tracks--layout">
          {tracks.map((track: any) => {
            return (
              <Card
                image={track.images.background}
                title={track.title}
                url={track.url}
                id={track.key}
                setFavourite={setFavourite}
                deleteFavourite={deleteFavourite}
              />
            );
          })}
        </section>
      ) : (
        <h4>Loading your favourites...</h4>
      )}
    </section>
  );
};

export default Favourites;
