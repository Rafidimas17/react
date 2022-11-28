import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Input, Link } from "../../components";
function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="bg_image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" autocomplete="none" />
        <Input label="Email" placeholder="Email" autocomplete="none" />
        <Input label="Password" placeholder="Password" autocomplete="none" />
        <Button title="Register" />
        <Link title="Kembali ke login" />
      </div>
    </div>
  );
}

export default Register;
