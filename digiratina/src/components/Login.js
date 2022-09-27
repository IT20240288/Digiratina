import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const onSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/login", login);
      if (res.status === 200) {
        //setLogin(undefined);
        alert("Login Successfull");
        navigate("AddReservation");
      } else {
        alert("Check Username or Password!");
        setLogin({
          username: "",
          password: ""
        });
      }
    } catch (e) {
      alert("Check Username or Password!");

      console.log("error", e);
    }
  };

  return (
    <div className="login-main-component">
      <div className="login">
        <center>
          <h3>Login</h3>
        </center>
        <br />

        <label> User Name</label>
        <input
          type="String"
          class="form-control"
          id="userName"
          name="userName"
          onChange={e => setLogin({ ...login, username: e.target.value })}
        />
        <br />

        <label> Password </label>
        <input
          type="String"
          class="form-control"
          id="password"
          onChange={e => setLogin({ ...login, password: e.target.value })}
          name="password"
        />
        <br />

        <button onClick={onSubmit} class="loginBtn">
          Login
        </button>
      </div>
    </div>
  );
}
