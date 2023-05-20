import React from "react";
import Logo from "../../../assets/img/png/logo.png";
import "./TopRegister.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const TopRegister = () => {
  return (
    <div className="top-register">
      <div className="top-register__left">
      <Link to="/">
          <img className="top-register__left__logo" src={Logo} alt="Logo"></img>
      </Link>
      </div>
      <div className="top-register__right">
        <Link to="/Register">
          <Button className="registrarse">Sing Up</Button>
        </Link>
        <Link to="/Login">
          <Button className="ingresar">Log In</Button>
        </Link>
      </div>
    </div>
  );
};