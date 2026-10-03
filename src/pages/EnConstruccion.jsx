import React from "react";
import "../styles/EnConstruccion.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const EnConstruccion = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="container construction-page">
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
      </main>
    </>
  );
};

export default EnConstruccion;
