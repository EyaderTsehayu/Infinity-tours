import React from "react";
import Input from "../../shared/FormElements/Input";

import "./NewPlace.css";

const NewPlace = () => {
  return (
    <div className="place-form">
      <Input element="input" type="text" label="Title" />
    </div>
  );
};

export default NewPlace;
