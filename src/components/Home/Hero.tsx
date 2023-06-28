import React, { useEffect } from "react";
import "./home_styles.css";
import axios from "axios";
import Card from "./utilities/Card";

interface Props {
  userName: string;
  setIsFavourite: (id: string) => void;
  deleteFavourite: (id: string) => void;
}

async function getData() {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/charts/track",
    params: {
      locale: "en-US",
      pageSize: "50",
      startFrom: "0",
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

const Home: React.FC<Props> = ({
  userName,
  setIsFavourite,
  deleteFavourite,
}) => {
  const [data, setData] = React.useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData().then((data) => setData(data));
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <section className="hero--container col-sm-10 p-4 flex-fill">
      <h3>Welcome, {userName}</h3>
      <h5 className="mt-4">Tracks for you!</h5>
      <hr />
      {/* {data && data.tracks.map((track: any) => <p>{track.title}</p>)} */}
      <section className="tracks--layout">
        {data ? (
          data.tracks.map((track: any) => {
            return (
              <Card
                image={track.images.background}
                title={track.title}
                url={track.url}
                id={track.key}
                setFavourite={setIsFavourite}
                deleteFavourite={deleteFavourite}
              />
            );
          })
        ) : (
          <h4>Loading...</h4>
        )}
      </section>
    </section>
  );
};

export default Home;
