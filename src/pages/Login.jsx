import React from "react";
import MiniNavBar from "../components/MiniNavBar";
import FormLogin from "../components/FormLogin";
import "../styles/LoginTitle.css";

const Login = () => {
  return (
    <>
      <MiniNavBar />
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
