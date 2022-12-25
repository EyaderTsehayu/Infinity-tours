import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACE = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "http://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5902947920099eda52c5ac82/5a01f46bd63352b3be374974/1554667940303/?format=1500w",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "http://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5902947920099eda52c5ac82/5a01f46bd63352b3be374974/1554667940303/?format=1500w",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlace = DUMMY_PLACE.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlace} />;
};

export default UserPlaces;
