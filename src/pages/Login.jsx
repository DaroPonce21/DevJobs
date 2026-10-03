import React from "react";
import FormLogin from "../components/FormLogin";
import "../styles/LoginTitle.css";
import NavBar from "../components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar variant="login" />
      <main className="container">
        <div className="Logingcenter">
          <h2 className="Title">Iniciar seccion</h2>
          <p className="texto">introdusca sus claves de acceso</p>
          <FormLogin />
        </div>
      </main>
    </>
  );
};

export default Login;
