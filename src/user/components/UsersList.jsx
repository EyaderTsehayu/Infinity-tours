import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No User Found</h2>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user) => (
          <UserItem
            key={props.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        ))}
      </ul>
    );
  }
};

export default UsersList;
