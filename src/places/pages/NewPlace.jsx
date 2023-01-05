import React from "react";
import Input from "../../shared/FormElements/Input";

import "./NewPlace.css";

const NewPlace = () => {
  return (
    <div className="place-form">
      <Input
        element="input"
        type=""
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </div>
  );
};

export default NewPlace;
