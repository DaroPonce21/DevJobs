import React from "react";
import "../styles/EnConstruccion.css";
import MainNavBar from "../components/MainNavBar";
import { useNavigate } from "react-router-dom";

const EnConstruccion = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainNavBar />
      <div className="container">
        <h1>Página en construcción</h1>
        <p>
          Estamos trabajando para traerte esta sección lo antes posible.
          ¡Gracias por tu paciencia!
        </p>
        <button
          className="button-return"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
        >
          Volver atrás
        </button>
      </div>
    </>
  );
};

export default EnConstruccion;
