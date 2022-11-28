import React from "react";
import "./login.scss";
import { LoginBg } from "../../assets";
import { Button, Input } from "../../components";
function Login() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="bg_image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" autocomplete="none" />
        <Input label="Password" placeholder="Password" autocomplete="none" />
        <Button title="Login" />
      </div>
    </div>
  );
}

export default Login;
