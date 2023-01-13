import React from "react";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/FormElements/Button";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>LOGIN</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="EMAIL"
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter a valid email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="PASSWORD"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="please enter a valid password (min. 5 character)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
