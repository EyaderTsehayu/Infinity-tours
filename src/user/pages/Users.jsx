import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "Eyader Tsehayu",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 2,
    },
  ];
  return <UsersList items={USER} />;
};

export default Users;
