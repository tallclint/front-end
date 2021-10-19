import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupLoginSchema as schema } from "../yup/yupLoginSchema";

export default function Login() {
  const initialLoginValues = {
    username: "",
    password: "",
  };
  const initialErrors = {
    apiError: "",
    //feel free to add YUP errors here
  };
  const { push } = useHistory();
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [errors, setErrors] = useState(initialErrors);

  // VALIDATION //
  const validate = (credentials) => {
    // Validate / authenticate credentials onSubmit
  };
  // ON CHANGE //
  const change = (e) => {
    const { name, value } = e.target;
    // Update state with the changes
    setLoginValues({ ...loginValues, [name]: value });
  };
  // ON SUBMIT //
  const submit = (e) => {
    e.preventDefault();
    const loginCredentials = {
      username: loginValues.username,
      password: loginValues.password,
    };
    validate(loginCredentials);
    axios
      .post("https://watergrows.herokuapp.com/api/users/login", loginValues)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/plants");
      })
      .catch((err) => {
        setErrors({ ...errors, apiError: err.response.data.message });
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form id="login-form" onSubmit={submit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={loginValues.username}
            onChange={change}
            placeholder="Enter username"
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={change}
            value={loginValues.password}
            placeholder="Enter password"
          />
        </label>
        <br />
        <button onClick={validate}>Login</button>
      </form>
      <p>{errors.apiError}</p>
    </>
  );
}
