import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-main-component">
      <div className="login">
        <form>
          <h3>Login</h3>

          <br />

          <label> User Name</label>
          <input
            type="String"
            class="form-control"
            id="userName"
            name="userName"
          />
          <br />

          <label> Password </label>
          <input
            type="String"
            class="form-control"
            id="password"
            name="password"
          />
          <br />

          <button type="submit" class="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
