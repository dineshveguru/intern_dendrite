import React from "react";
import axios from "axios";
import Card from "./utilities/Card";

interface Props {
  setFavourite: (id: string) => void;
  deleteFavourite: (id: string) => void;
}

async function getData(term: string) {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: {
      term: term,
      locale: "en-US",
      offset: "0",
      limit: "20",
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

const Search: React.FC<Props> = ({ setFavourite, deleteFavourite }) => {
  const [search, setSearch] = React.useState<string>("");
  const [tracks, setTracks] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData(search);
      if (data && data.tracks && data.tracks.hits) {
        setTracks(data.tracks.hits);
      }
    };
    fetchData();
  }, [search]);
  return (
    <section className="hero--container col-sm-10 p-4 flex-fill">
      <h2>Search</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="form-control"
      />
      <hr />
      {tracks && tracks.length > 0 ? (
        <section className="tracks--layout">
          {tracks.map((track: any) => {
            return (
              <Card
                image={track.track.images.background}
                title={track.track.title}
                url={track.track.url}
                id={track.track.key}
                setFavourite={setFavourite}
                deleteFavourite={deleteFavourite}
              />
            );
          })}
        </section>
      ) : (
        <h3>No tracks found</h3>
      )}
    </section>
  );
};

export default Search;
