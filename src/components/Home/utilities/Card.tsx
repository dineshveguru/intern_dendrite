import React from "react";

interface Props {
  title: string;
  image: string;
  url: string;
  id: string;
  setFavourite: (id: string) => void;
  deleteFavourite: (id: string) => void;
}

const Card: React.FC<Props> = ({
  title,
  image,
  url,
  id,
  setFavourite,
  deleteFavourite,
}) => {
  const handleClick = () => {
    window.location.href = url;
  };
  const [isFavourite, setIsFavourite] = React.useState<boolean>(false);
  return (
    <div className="card--container">
      <img
        src={image}
        alt={title}
        className="track--image"
        onClick={handleClick}
      />
      <div className="card--footer mt-2">
        <h6>{title}</h6>
        <div>
          {isFavourite ? (
            <img
              src={require("../../assets/heart_filled.png")}
              className="fav--icon"
              onClick={() => {
                setIsFavourite(!isFavourite);
                deleteFavourite(id);
              }}
            />
          ) : (
            <img
              src={require("../../assets/heart.png")}
              className="fav--icon"
              onClick={() => {
                setIsFavourite(!isFavourite);
                setFavourite(id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
